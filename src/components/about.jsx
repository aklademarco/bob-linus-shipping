import React from 'react';
import { Target, Eye, Heart, Shield, Users, Award, Truck, Globe, Clock, ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Back to Home Link */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full px-4 py-4">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#08aff1] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/boblinus.jpeg" 
            alt="Bob-Linus Shipping Operations" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 w-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#08aff1]">Bob-Linus</span>
            </h1>
            <div className="w-24 h-1 bg-[#08aff1] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your trusted partner in shipping and logistics solutions across Ghana and beyond
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  About Us
                </h2>
                <div className="w-16 h-1 bg-[#08aff1] mb-6"></div>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    At Bob-Linus Shipping and Trading Company, we value your custom. Our key investment is on our staff to provide you with first class customer service and support.
                  </p>
                  <p>
                    From the pickup of your goods to the delivery at your destination, you are assured of a first class service second to none. We ship to worldwide destinations through our strategic network of Affiliate and Associate companies.
                  </p>
                  <p>
                    We offer you a wide range of services from sending your cargo anywhere in the world to making sure your international financial transactions are safe and secure. You are very welcome to try our service…
                  </p>
                  <p className="font-medium text-slate-800 italic">
                    "If we please you tell others but if you are displeased by our services, tell us!"
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/home2.png" 
                  alt="Bob-Linus Team" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="text-2xl font-bold text-[#08aff1]">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="text-2xl font-bold text-[#08aff1]">1000+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-[#08aff1]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  Bob-Linus shipping is committed to provide the highest levels of services as well as providing innovative solutions to meet customers changing transport needs with complete transparency in the most cost-effective manner, thereby building lasting commitment and long-term relationship with its customers, principals and partners.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  To be the most preferred shipping & logistics provider, across African region, providing the best in terms of shipping solutions, value & customer service.
                </p>
              </div>

              {/* Core Values */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Core Values</h3>
                <p className="text-slate-600 leading-relaxed text-center">
                  At Bob-Linus Shipping, we are driven by integrity, reliability, and a deep commitment to our clients. We deliver with honesty and professionalism, always putting customer satisfaction at the heart of our operations. Innovation and sustainability guide our approach, ensuring efficient, future-ready logistics solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Bob-Linus?</h2>
              <div className="w-16 h-1 bg-[#08aff1] mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                With over two decades of experience, we've built our reputation on trust, reliability, and exceptional service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Experience */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Award className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">20+ Years Experience</h3>
                <p className="text-slate-600">
                  Two decades of proven excellence in shipping and logistics across Ghana and international markets.
                </p>
              </div>

              {/* Global Network */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Globe className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Network</h3>
                <p className="text-slate-600">
                  Strategic partnerships with affiliate companies worldwide ensuring seamless international shipping.
                </p>
              </div>

              {/* Customer Service */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">First-Class Service</h3>
                <p className="text-slate-600">
                  Our investment in staff training ensures you receive exceptional customer service and support.
                </p>
              </div>

              {/* Reliability */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Shield className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Reliability</h3>
                <p className="text-slate-600">
                  Safe and secure handling of your goods with comprehensive tracking and insurance options.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Truck className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovative Solutions</h3>
                <p className="text-slate-600">
                  Cutting-edge logistics solutions tailored to meet your changing transport needs.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="text-center p-6 group hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#08aff1] transition-colors duration-300">
                  <Clock className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
                <p className="text-slate-600">
                  Round-the-clock customer support to ensure your shipping needs are always met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08aff1] to-[#0694d1] text-white">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Bob-Linus for their shipping needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-quote" 
                className="bg-white text-[#08aff1] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get a Quote
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#08aff1] transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}