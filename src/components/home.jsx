import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Truck, Warehouse, Home, Shield, Clock, Users, Award, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteDetails, setQuoteDetails] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const quoteFirstRef = useRef(null);
  const quoteLastRef = useRef(null);
  const ctaRef = useRef(null);

  const heroSlides = [
    {
      id: 1,
      image: "/images/home4.png",
      title: "Cargo Shipping & Transportation",
      subtitle: "Global Reach, Local Trust",
      description: "Reliable cargo shipping services across Ghana and international routes with real-time tracking and secure handling.",
      highlight: "shipping",
      icon: <Truck className="w-6 h-6" />
    },
    {
      id: 2,
      image: "/images/warehouse.jpg", 
      title: "Warehousing & Storage",
      subtitle: "Secure Storage Solutions",
      description: "State-of-the-art warehousing facilities with climate control, inventory management, and flexible storage options.",
      highlight: "warehousing",
      icon: <Warehouse className="w-6 h-6" />
    },
    {
      id: 3,
      image: "/images/home11.jpg",
      title: "Household Imports",
      subtitle: "Door-to-Door Service",
      description: "Specialized handling and importation of household goods with customs clearance and seamless delivery.",
      highlight: "imports", 
      icon: <Home className="w-6 h-6" />
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  function openQuote() {
    setQuoteOpen(true);
    // lock body scroll when modal open
    document.body.style.overflow = 'hidden';
  }

  function closeQuote() {
    setQuoteOpen(false);
    document.body.style.overflow = '';
  }

  function handleQuoteSubmit(e) {
    e.preventDefault();
    // front-end only: show a console message and close modal; integrate backend later
    console.log('Quote request', { quoteName, quoteEmail, quoteDetails });
    closeQuote();
    alert('Thanks — we\'ll get back to you within 24 hours.');
  }

  // focus management for modal
  useEffect(() => {
    function onKey(e) {
      if (!quoteOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeQuote();
        ctaRef.current?.focus();
        return;
      }
      if (e.key === 'Tab') {
        const first = quoteFirstRef.current;
        const last = quoteLastRef.current;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    if (quoteOpen) {
      // set initial focus briefly after open
      setTimeout(() => quoteFirstRef.current?.focus(), 60);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [quoteOpen]);

  return (
    <div id="main" className="min-h-screen">
      {/* Hero Carousel Section - Full Width Background */}
      <section 
        className="relative min-h-[100vh] sm:min-h-[100vh] overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Images Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              width="1920" height="1080"
              loading={index === 0 ? "eager" : "lazy"}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                index === currentSlide ? 'animate-zoom-in' : ''
              }`}
            />
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 flex items-center justify-center min-h-[100vh] px-4 py-20">
          <div className="container mx-auto text-center text-white">
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              {/* Service indicator */}
              <div className="flex items-center justify-center gap-2 text-[#08aff1] font-medium">
                {heroSlides[currentSlide].icon}
                <span className="text-xs sm:text-sm uppercase tracking-wider">{heroSlides[currentSlide].highlight}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight hero-text-shadow">
                <span className="block text-white">{heroSlides[currentSlide].subtitle}</span>
                <span className="text-[#08aff1] block">{heroSlides[currentSlide].title}</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto hero-subtitle-shadow">
                {heroSlides[currentSlide].description}
              </p>
              <p className="text-sm text-gray-200 hero-subtitle-shadow">Free quotes • Typical response within 24 hours</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-8">
                <button 
                  ref={ctaRef} 
                  onClick={openQuote} 
                  className="bg-[#08aff1] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#0694d1] transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-2xl flex items-center gap-2 justify-center focus:outline-none focus:ring-4 focus:ring-[#08aff1]/30 focus:ring-offset-2 w-full sm:w-auto sm:min-w-[200px] shadow-lg"
                >
                  Get Quote Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 w-full sm:w-auto sm:min-w-[200px] shadow-lg backdrop-blur-sm">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 z-30 group"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rotate-180 group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 z-30 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#08aff1] scale-125 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden z-30">
          <div 
            className="h-full bg-[#08aff1] transition-all duration-300 ease-out"
            style={{ 
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your shipping and storage needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cargo Shipping */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-[#08aff1]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cargo Shipping & Transportation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Reliable cargo shipping services across Ghana and international routes with 
                real-time tracking and secure handling.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-[#0694d1]">
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Warehousing */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-[#08aff1]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Warehouse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Warehousing & Storage</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Secure, climate-controlled storage facilities with inventory management 
                and flexible storage solutions.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-[#0694d1]">
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Household Items */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-[#08aff1]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Importation of Household Items</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Specialized handling and importation of household goods with customs 
                clearance and door-to-door delivery.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-[#0694d1]">
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable & Timely Deliveries</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize punctuality and consistency to keep your shipments on schedule.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer-Centric Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                Our dedicated team works closely with clients to understand and meet their unique needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#08aff1] to-[#0694d1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional & Secure Handling</h3>
              <p className="text-slate-600 leading-relaxed">
                Your cargo is handled with the utmost care and security throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Our Experience</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                With over 20 years in the shipping and logistics industry, Bob-Linus has built
                a reputation for dependable, efficient, and client-focused service. Our
                long-standing presence reflects our commitment to excellence, adaptability, and deep
                industry knowledge.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#08aff1] mb-2">20+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#08aff1] mb-2">1000+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/home2.png" 
                alt="Bob-Linus Experience" 
                width="1000" height="667"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/images/home3.png" 
                alt="Bob-Linus Partners" 
                width="1000" height="667"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-900">Our Partners & Clients</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Over the years, we've proudly partnered with trusted global carriers, logistics
                networks, and a diverse range of clients. These lasting relationships speak to
                the confidence businesses place in Bob-Linus Shipping for their critical
                transport needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Awards</h2>
            <p className="text-xl text-slate-600">Recognition of our commitment to excellence</p>
          </div>
          
          <div className="flex justify-center items-center gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#08aff1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Excellence Award 2024</h3>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#08aff1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Best Logistics Service 2023</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">Ready to ship? Contact us today for a quote</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#08aff1] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-slate-300">+233 303 204 743</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#08aff1] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-slate-300">info@bob-linus.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-4">
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08aff1]"
                />

                <label className="sr-only" htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08aff1]"
                />

                <label className="sr-only" htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08aff1] resize-none"
                ></textarea>
                <button className="w-full bg-[#08aff1] text-white py-3 rounded-lg font-semibold hover:bg-[#5bc6f0] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/customer-service" className="text-slate-300 hover:text-[#08aff1] transition-colors">Customer Service</a></li>
                <li><a href="/track" className="text-slate-300 hover:text-[#08aff1] transition-colors">Track Shipment</a></li>
                <li><a href="/get-quote" className="text-slate-300 hover:text-[#08aff1] transition-colors">Get a Quote</a></li>
                <li><a href="/business" className="text-slate-300 hover:text-[#08aff1] transition-colors">Bob-Linus for Business</a></li>
                <li><a href="/locations" className="text-slate-300 hover:text-[#08aff1] transition-colors">Our Locations</a></li>
                <li><a href="/contact" className="text-slate-300 hover:text-[#08aff1] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="/shipping" className="text-slate-300 hover:text-[#08aff1] transition-colors">Cargo Shipping</a></li>
                <li><a href="/warehousing" className="text-slate-300 hover:text-[#08aff1] transition-colors">Warehousing & Storage</a></li>
                <li><a href="/household-imports" className="text-slate-300 hover:text-[#08aff1] transition-colors">Household Imports</a></li>
                <li><a href="/vehicle-importation" className="text-slate-300 hover:text-[#08aff1] transition-colors">Vehicle Importation</a></li>
                <li><a href="/trans-shipment" className="text-slate-300 hover:text-[#08aff1] transition-colors">Trans-Shipment</a></li>
                <li><a href="/logistics" className="text-slate-300 hover:text-[#08aff1] transition-colors">Logistics Solutions</a></li>
              </ul>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Company Information</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-slate-300 hover:text-[#08aff1] transition-colors">About Bob-Linus</a></li>
                <li><a href="/careers" className="text-slate-300 hover:text-[#08aff1] transition-colors">Careers</a></li>
                <li><a href="/news" className="text-slate-300 hover:text-[#08aff1] transition-colors">News & Press</a></li>
                <li><a href="/sustainability" className="text-slate-300 hover:text-[#08aff1] transition-colors">Sustainability</a></li>
                <li><a href="/partnerships" className="text-slate-300 hover:text-[#08aff1] transition-colors">Partnerships</a></li>
                <li><a href="/awards" className="text-slate-300 hover:text-[#08aff1] transition-colors">Awards & Recognition</a></li>
              </ul>
            </div>

            {/* Contact & Follow Us */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact & Follow Us</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#08aff1]" />
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+233 303 204 743</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#08aff1]" />
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <p className="text-white font-medium">info@bob-linus.com</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <p className="text-sm font-medium text-slate-300 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#08aff1] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#08aff1] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#08aff1] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#08aff1] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#08aff1] transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Logo and Company Info */}
              <div className="flex items-center gap-4">
                <img src="/images/logo.png" alt="Bob-Linus logo" className="w-12 h-12" />
                <div>
                  <div className="font-bold text-xl text-white">Bob-Linus</div>
                  <div className="text-sm text-slate-400">Shipping & Logistics</div>
                </div>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-[#08aff1] transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-slate-400 hover:text-[#08aff1] transition-colors">Terms of Service</a>
                <a href="/legal" className="text-slate-400 hover:text-[#08aff1] transition-colors">Legal Notice</a>
                <a href="/cookies" className="text-slate-400 hover:text-[#08aff1] transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            {/* Copyright and Business Hours */}
            <div className="mt-6 pt-6 border-t border-slate-800 text-center lg:flex lg:justify-between lg:items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Bob-Linus Shipping & Logistics. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm mt-2 lg:mt-0">
                Business Hours: Mon — Sat: 9AM — 4PM (GMT)
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal (front-end only) */}
      {quoteOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 modal-panel modal-panel-open">
            <div className="flex justify-between items-center mb-4">
              <h3 id="quote-modal-title" className="text-xl font-bold">Get a Quote</h3>
              <button onClick={closeQuote} aria-label="Close" className="p-2 text-slate-600 hover:text-black">×</button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <label className="sr-only" htmlFor="quote-name">Name</label>
              <input id="quote-name" ref={quoteFirstRef} value={quoteName} onChange={(e) => setQuoteName(e.target.value)} required placeholder="Your name" className="w-full px-3 py-2 border rounded-md" />

              <label className="sr-only" htmlFor="quote-email">Email</label>
              <input id="quote-email" value={quoteEmail} onChange={(e) => setQuoteEmail(e.target.value)} required type="email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md" />

              <label className="sr-only" htmlFor="quote-details">Details</label>
              <textarea id="quote-details" value={quoteDetails} onChange={(e) => setQuoteDetails(e.target.value)} placeholder="Tell us about your shipment (origin, destination, size)" rows={4} className="w-full px-3 py-2 border rounded-md" />

              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-[#08aff1] text-white px-4 py-2 rounded-md">Request Quote</button>
                <button ref={quoteLastRef} type="button" onClick={() => { closeQuote(); ctaRef.current?.focus(); }} className="flex-1 border rounded-md px-4 py-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
