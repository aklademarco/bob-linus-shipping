// ...ex// ...ex// ...ex// ...existing code...
import React, { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // services dropdown visible
  const [servicesPersist, setServicesPersist] = useState(false); // keep services open after click
  const [searchOpen, setSearchOpen] = useState(false); // search toggle
  const [query, setQuery] = useState('');
  const servicesRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // close dropdowns/search when clicking outside (use pointerdown for touch/mouse)
  useEffect(() => {
    function onDoc(event) {
      // if click/touch is inside any element marked with data-services or data-search, don't close
      if (event.target.closest && (event.target.closest('[data-services]') || event.target.closest('[data-search]'))) return;
      setServicesOpen(false);
      setServicesPersist(false);
      setSearchOpen(false);
    }
    document.addEventListener('pointerdown', onDoc);
    return () => document.removeEventListener('pointerdown', onDoc);
  }, []);

  // focus search input when opened (clean up timeout)
  useEffect(() => {
    let id;
    if (searchOpen) {
      id = setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => clearTimeout(id);
  }, [searchOpen]);

  // when services open, focus the first visible service link for keyboard users
  useEffect(() => {
    if (!servicesOpen) return;
    const id = setTimeout(() => {
      const anchors = Array.from(document.querySelectorAll('[data-services] a'));
      const visible = anchors.find(a => a.offsetParent !== null) || anchors[0];
      visible?.focus();
    }, 80);
    return () => clearTimeout(id);
  }, [servicesOpen]);

  // close menus on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setServicesPersist(false);
        setSearchOpen(false);
        setOpen(false);
      }
    }
    if (servicesOpen || searchOpen || open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [servicesOpen, searchOpen, open]);

  function handleServicesClick() {
    setServicesOpen((s) => {
      const next = !s;
      setServicesPersist(next); // if opened by click, persist until outside click or click again
      return next;
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    // implement search navigation / behaviour here
    console.log('search:', query);
    // optionally close search on submit:
    // setSearchOpen(false);
  }

  return (
    <nav
      role="navigation"
      className="fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand (not a link) */}
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Bob-Linus logo" className="w-12 h-12 object-contain" />
            <div className="leading-tight">
              <span className="block font-bold text-slate-950 text-2xl">Bob-Linus</span>
              <small className="block text-xs text-slate-950">Shipping & Logistics</small>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              ref={servicesRef}
              data-services
              onMouseEnter={() => { if (!servicesPersist) setServicesOpen(true); }}
              onMouseLeave={() => { if (!servicesPersist) setServicesOpen(false); }}
            >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu-desktop"
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => { e.stopPropagation(); handleServicesClick(); }}
                  className="flex items-center gap-2 text-sm text-slate-950 hover:text-[#08aff1]"
                >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.584l3.71-3.396a.75.75 0 011.02 1.1l-4.24 3.882a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Desktop dropdown */}
              <div
                id="services-menu-desktop"
                role="menu"
                className={`absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg ring-1 ring-black/5 transition-opacity duration-150 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-hidden={!servicesOpen}
              >
                <div className="py-2">
                  {/* paste your service links here (unique hrefs) */}
                  <a href="#transport" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Transport Services</a>
                  <a href="#trans-shipment" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Trans-Shipment</a>
                  <a href="#warehousing" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Warehousing Services</a>
                  <a href="#vehicle-importation" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Vehicle importation</a>
                  <a href="#shipping-services" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Shipping Services</a>
                  <a href="#household-imports" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Importation of household items</a>
                </div>
              </div>
            </div>

            <a href="#about" className="text-sm text-slate-950 hover:text-[#08aff1]">About</a>
            <a href="#contact" className="text-sm text-slate-950 hover:text-[#08aff1]">Contact</a>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile-only inline search (between brand and menu toggle) */}
            <div className="md:hidden w-56">
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border rounded-md px-2 py-1 text-sm"
                  placeholder="Search services..."
                  aria-label="Search services"
                />
                <button type="submit" className="px-3 py-1 bg-[#08aff1] text-white rounded-md text-sm">Go</button>
              </form>
            </div>
            {/* Desktop search (togglable) */}
            <div className="hidden md:flex items-center" data-search ref={searchRef}>
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                  <input
                    ref={searchInputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded-md px-3 py-1 w-64 text-sm text-black"
                    placeholder="Search services..."
                    aria-label="Search services"
                  />
                  <button type="submit" className="px-3 py-1 bg-[#08aff1] text-white rounded-md text-sm">Go</button>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setSearchOpen(false); }} aria-label="Close search" className="ml-2 p-2">
                    ✕
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSearchOpen(true); }}
                  className="p-2 rounded-md hover:bg-slate-100"
                  aria-label="Open search"
                >
                  🔍
                </button>
              )}
            </div>

            <a
              href="/get-quote"
              className="hidden md:inline-block px-4 py-2 rounded-md bg-[#08aff1] text-white text-sm font-medium hover:bg-[#5bc6f0]"
            >
              Get a Quote
            </a>

            {/* mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* no search icon on mobile; search input shown inline */}
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-200 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-3 space-y-2 bg-white/95">
          {/* Mobile Services collapsible - centered label + right chevron */}
          <div className="relative" data-services>
            <button
              id="services-toggle-mobile"
              type="button"
              aria-controls="services-menu-mobile"
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); handleServicesClick(); }}
              aria-expanded={servicesOpen}
              className="w-full flex items-center justify-center px-2 py-2 text-center text-sm text-slate-700 relative"
            >
              <span className="block">Services</span>
              {/* chevron positioned absolute on the right */}
              <svg className={`w-4 h-4 absolute right-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.584l3.71-3.396a.75.75 0 011.02 1.1l-4.24 3.882a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div id="services-menu-mobile" className={`overflow-hidden transition-[max-height] duration-200 ${servicesOpen ? 'max-h-60' : 'max-h-0'}`}>
            <div className="pl-4 space-y-1">
              {/* paste your mobile service links here */}
              <a href="#transport" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Transport Services</a>
              <a href="#trans-shipment" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Trans-Shipment</a>
              <a href="#warehousing" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Warehousing Services</a>
              <a href="#vehicle-importation" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Vehicle importation</a>
              <a href="#shipping-services" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Shipping Services</a>
              <a href="#household-imports" onClick={() => { setOpen(false); setServicesOpen(false); setServicesPersist(false); }} className="block text-sm text-slate-700 py-1">Importation of household items</a>
            </div>
          </div>

          <a href="#about" onClick={() => setOpen(false)} className="block text-sm text-slate-700 text-center">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-slate-700 text-center">Contact</a>
          <a href="/get-quote" onClick={() => setOpen(false)} className="block mt-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm text-center">Get a Quote</a>
        </div>
      </div>
    </nav>
  );
}
// ...existing code...