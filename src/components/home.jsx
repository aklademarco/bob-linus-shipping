import React from 'react';
import { ChevronRight, Truck, Warehouse, Home, Shield, Clock, Users, Award, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-slate-100 pt-20 pb-16">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 px-4">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Your Trusted
                  <span className="text-[#08aff1] block">Shipping Partner</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  With over 20 years of experience, Bob-Linus delivers reliable cargo shipping, 
                  warehousing, and logistics solutions across Ghana and beyond.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#08aff1] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5bc6f0] transition-colors flex items-center gap-2 justify-center">
                  Get Quote Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-slate-400 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/home1.png" 
                alt="Bob-Linus Shipping Operations" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
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
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#08aff1] rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cargo Shipping & Transportation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Reliable cargo shipping services across Ghana and international routes with 
                real-time tracking and secure handling.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Warehousing */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#08aff1] rounded-full flex items-center justify-center mb-6">
                <Warehouse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Warehousing & Storage</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Secure, climate-controlled storage facilities with inventory management 
                and flexible storage solutions.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Household Items */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#08aff1] rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Importation of Household Items</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Specialized handling and importation of household goods with customs 
                clearance and door-to-door delivery.
              </p>
              <button className="text-[#08aff1] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
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
            <div className="text-center">
              <div className="w-20 h-20 bg-[#08aff1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable & Timely Deliveries</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize punctuality and consistency to keep your shipments on schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#08aff1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer-Centric Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                Our dedicated team works closely with clients to understand and meet their unique needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#08aff1] rounded-full flex items-center justify-center mx-auto mb-6">
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
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#08aff1] focus:outline-none resize-none"
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
      <footer className="bg-slate-950 text-white py-12">
        <div className="w-full px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Bob-Linus logo" className="w-12 h-12" />
              <div>
                <div className="font-bold text-xl">Bob-Linus</div>
                <div className="text-sm text-slate-400">Shipping & Logistics</div>
              </div>
            </div>
            <p className="text-slate-400">
              © 2025 Bob-Linus Shipping | All rights reserved
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Mon — Sat: 9AM — 4PM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
