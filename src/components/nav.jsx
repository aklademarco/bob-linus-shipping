// ...ex// ...ex// ...ex// ...existing code...
import React, { useEffect, useRef, useState } from 'react';
import { Search, X, Menu, ChevronDown, Info, Phone, CreditCard, Package, Home } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // services dropdown visible
  const [servicesPersist, setServicesPersist] = useState(false); // keep services open after click
  const [searchOpen, setSearchOpen] = useState(false); // search toggle
  const [query, setQuery] = useState('');
  const servicesRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const overlaySearchInputRef = useRef(null);
  const [overlaySearchOpen, setOverlaySearchOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [trackingPersist, setTrackingPersist] = useState(false); // keep tracking open after click
  const [trackingId, setTrackingId] = useState('');
  const trackingRef = useRef(null);

  function trackNavClick(label, href) {
    const payload = { event: 'nav_click', label, href, ts: Date.now() };
    try {
      window.dataLayer = window.dataLayer || []; window.dataLayer.push(payload);
    } catch (err) { void err; }
    console.log('TRACK:', payload);
  }

  function handleTrackSubmit(e) {
    e.preventDefault();
    const id = (trackingId || '').trim();
    if (!id) return trackingRef.current?.focus();
    window.location.href = `/tracking?id=${encodeURIComponent(id)}`;
  }

  // close dropdowns/search when clicking outside (use pointerdown for touch/mouse)
  useEffect(() => {
    function onDoc(event) {
      // if click/touch is inside any element marked with data-services or data-search, don't close
      if (event.target.closest && (event.target.closest('[data-services]') || event.target.closest('[data-search]') || event.target.closest('[data-tracking]'))) return;
      setServicesOpen(false);
      setServicesPersist(false);
      setSearchOpen(false);
      setTrackingOpen(false);
      setTrackingPersist(false);
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

  // focus overlay search input when opened
  useEffect(() => {
    let id;
    if (overlaySearchOpen) {
      id = setTimeout(() => overlaySearchInputRef.current?.focus(), 60);
    }
    return () => clearTimeout(id);
  }, [overlaySearchOpen]);

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
        setOverlaySearchOpen(false);
        setTrackingOpen(false);
        setTrackingPersist(false);
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

  function handleTrackingClick() {
    setTrackingOpen((s) => {
      const next = !s;
      setTrackingPersist(next); // if opened by click, persist until outside click or click again
      return next;
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    console.log('search:', query);
   
  }

  function handleOverlaySearchSubmit(e) {
    e.preventDefault();
    console.log('overlay search:', query);
    setOverlaySearchOpen(false);
  }

  return (
    <>
    {/* Skip link for accessibility */}
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white px-3 py-2 rounded-md text-slate-900 border border-slate-200">Skip to main content</a>
    <nav
      role="navigation"
      className="fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand (not a link) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="/images/logo.png" alt="Bob-Linus logo" className="w-12 h-12 object-contain" />
            <div className="leading-tight whitespace-nowrap">
              <span className="block font-bold text-slate-950 text-xl md:text-2xl">Bob-Linus</span>
              <small className="block text-xs text-slate-950">Shipping & Logistics</small>
            </div>
          </div>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-6 transition-opacity duration-200 ${searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <a href="/" onClick={() => trackNavClick('Home', '/')} className="flex items-center gap-2 text-sm text-slate-950 hover:text-[#08aff1]"><Home className="w-4 h-4 text-slate-700"/>Home</a>
            
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
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden />
              </button>

              {/* Desktop dropdown */}
              <div
                id="services-menu-desktop"
                role="menu"
                className={`absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg ring-1 ring-black/5 transition-opacity duration-150 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-hidden={!servicesOpen}
              >
                <div className="py-2">
                 
                  <a href="#transport" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Transport Services</a>
                  <a href="#trans-shipment" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Trans-Shipment</a>
                  <a href="#warehousing" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Warehousing Services</a>
                  <a href="#vehicle-importation" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Vehicle importation</a>
                  <a href="#shipping-services" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Shipping Services</a>
                  <a href="#household-imports" role="menuitem" className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#08aff1] hover:text-white">Importation of household items</a>
                </div>
              </div>
            </div>

            <a href="#about" onClick={() => trackNavClick('About', '#about')} className="flex items-center gap-2 text-sm text-slate-950 hover:text-[#08aff1]"><Info className="w-4 h-4 text-slate-700"/>About</a>
            <a href="#contact" onClick={() => trackNavClick('Contact', '#contact')} className="flex items-center gap-2 text-sm text-slate-950 hover:text-[#08aff1]"><Phone className="w-4 h-4 text-slate-700"/>Contact</a>

            {/* Desktop tracking dropdown*/}
            <div 
              className="relative" 
              data-tracking
              onMouseEnter={() => { if (!trackingPersist) setTrackingOpen(true); }}
              onMouseLeave={() => { if (!trackingPersist) setTrackingOpen(false); }}
            >
              <button
                type="button"
                aria-expanded={trackingOpen}
                aria-controls="tracking-menu-desktop"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); handleTrackingClick(); }}
                className="flex items-center gap-2 text-sm text-slate-950 hover:text-[#08aff1]"
              >
                <Package className="w-4 h-4 text-slate-700" />
                Track
                <ChevronDown className={`w-4 h-4 transition-transform ${trackingOpen ? 'rotate-180' : ''}`} aria-hidden />
              </button>

              <div
                id="tracking-menu-desktop"
                role="menu"
                className={`absolute left-0 mt-2 w-80 bg-white border rounded-md shadow-lg ring-1 ring-black/5 transition-opacity duration-150 ${trackingOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-hidden={!trackingOpen}
              >
                <div className="p-3">
                  <form onSubmit={handleTrackSubmit} className="flex items-center gap-2" data-tracking>
                    <input ref={trackingRef} value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="Enter tracking id" className="flex-1 px-2 py-1 border rounded-md text-sm text-black placeholder:text-slate-400" />
                    <button type="submit" className="px-3 py-1 bg-[#08aff1] text-white rounded-md text-sm flex items-center gap-2">
                      <Package className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* mobile overlay search opener) */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Open site search"
                onClick={() => setOverlaySearchOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
              >
                <Search className="w-5 h-5" color="#334155" />
              </button>
            </div>
            {/* Desktop search (togglable) */}
            <div className="hidden md:flex items-center" data-search ref={searchRef}>
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                  <input
                    ref={searchInputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded-md px-3 py-1 w-64 text-sm text-black placeholder:text-slate-400"
                    placeholder="Search services..."
                    aria-label="Search services"
                  />
                  <button type="submit" className="px-3 py-1 bg-[#08aff1] text-white rounded-md text-sm">Go</button>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setSearchOpen(false); }} aria-label="Close search" className="ml-2 p-2 text-[#060707]">
                    ✕
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSearchOpen(true); }}
                  className="p-2 rounded-md hover:bg-slate-400"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5 text-[#060707]"  />
                </button>
              )}
            </div>

            <a
              href="/get-quote"
              onClick={() => trackNavClick('Get a Quote', '/get-quote')}
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#08aff1] text-white text-sm font-medium hover:bg-[#5bc6f0] transition-opacity duration-200 ${searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <CreditCard className="w-4 h-4 text-white" />
              Get a Quote
            </a>

            {/* mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex flex-none items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-200 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-3 space-y-2 bg-white/95">
          <a href="/" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 text-sm text-slate-700 text-center"><Home className="w-4 h-4"/>Home</a>
          
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
              <ChevronDown className={`w-4 h-4 absolute right-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>
          </div>

          <div id="services-menu-mobile" className={`overflow-hidden transition-[max-height] duration-200 ${servicesOpen ? 'max-h-60' : 'max-h-0'}`}>
            <div className="pl-4 space-y-1">
              
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

          {/* Mobile Track collapsible */}
          <div className="mt-2">
            <div className="relative" data-tracking>
              <button
                type="button"
                aria-controls="tracking-menu-mobile"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setTrackingOpen((s) => !s); }}
                className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-700 bg-slate-50 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>Track</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${trackingOpen ? 'rotate-180' : ''}`} aria-hidden />
              </button>
            </div>

            <div id="tracking-menu-mobile" className={`overflow-hidden transition-[max-height] duration-200 ${trackingOpen ? 'max-h-40' : 'max-h-0'}`}>
              <div className="px-4 pt-3 pb-2">
                <form onSubmit={(e) => { handleTrackSubmit(e); setOpen(false); }} className="flex items-center gap-2" data-tracking>
                  {/* Underline-style input with blinking caret */}
                  <div className="flex-1">
                    <label htmlFor="mobile-tracking" className="sr-only">Tracking ID</label>
                    <input
                      id="mobile-tracking"
                      ref={trackingRef}
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="Tracking ID"
                      className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-[#08aff1] text-base text-black placeholder:text-slate-400 px-0 py-2 outline-none"
                      style={{ caretColor: '#08aff1' }}
                    />
                  </div>
                  <button type="submit" className="px-3 py-1 bg-[#08aff1] text-white rounded-md text-sm flex items-center gap-2">
                    <Package className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* Overlay search */}
    {overlaySearchOpen && (
      <div onPointerDown={() => setOverlaySearchOpen(false)} className="fixed inset-0 z-60 flex items-start sm:items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true">
        <div className="w-full max-w-lg mt-8 sm:mt-0">
          <form onSubmit={handleOverlaySearchSubmit} onPointerDown={(e) => e.stopPropagation()} className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-3">
                <input
                  ref={overlaySearchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border-none outline-none px-4 py-3 text-base sm:text-lg text-black placeholder:text-slate-400"
                  placeholder="Search Bob-Linus — e.g. transport, warehousing..."
                  aria-label="Site search"
                />
              <button type="submit" className="px-4 py-2 bg-[#08aff1] text-white rounded-md">Search</button>
              <button type="button" onClick={() => setOverlaySearchOpen(false)} aria-label="Close search" className="p-2 text-slate-600"><X className="w-4 h-4" /></button>
            </div>
            <div className="mt-3 text-sm text-slate-700">
              {/* placeholder suggestions */}
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => { setQuery('Transport Services'); }} className="px-3 py-1 bg-slate-100 rounded-md text-sm text-slate-700">Transport</button>
                <button type="button" onClick={() => { setQuery('Warehousing'); }} className="px-3 py-1 bg-slate-100 rounded-md text-sm text-slate-700">Warehousing</button>
                <button type="button" onClick={() => { setQuery('Vehicle importation'); }} className="px-3 py-1 bg-slate-100 rounded-md text-sm text-slate-700">Vehicle import</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
}
