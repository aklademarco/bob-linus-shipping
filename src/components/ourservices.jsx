import React from 'react'
import { Truck, Home, Ship, Package, Warehouse, ArrowLeft, Shield, Award, Users, Phone, Mail, CheckCircle, Star, Globe, Clock } from 'lucide-react'

export default function OurServices() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
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
        <div className="absolute inset-0">
          <img 
            src="/images/industrial-port-container-yard.jpg" 
            alt="Port Container Yard" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/85 to-slate-900/85"></div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 w-full px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-[#08aff1] mb-6">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Trusted • Reliable • Professional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#08aff1]">Services</span>
            </h1>
            <div className="w-24 h-1 bg-[#08aff1] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Comprehensive shipping and logistics solutions backed by 20+ years of experience and trusted by 1000+ clients worldwide
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#08aff1]" />
                <span className="text-sm">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#08aff1]" />
                <span className="text-sm">1000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#08aff1]" />
                <span className="text-sm">Global Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#08aff1]" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto py-16">
          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Our Service Portfolio</h2>
            <p className="text-center text-slate-600 mb-8">Click on any service to learn more about our specialized solutions</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#transport" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl hover:shadow-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Transport Services</div>
                  <div className="text-sm text-slate-600">Local & Cross-border</div>
                </div>
              </a>
              <a href="#household-imports" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl hover:shadow-lg hover:from-green-100 hover:to-green-200 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Household Imports</div>
                  <div className="text-sm text-slate-600">Door-to-door Moving</div>
                </div>
              </a>
              <a href="#shipping-services" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl hover:shadow-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Shipping Services</div>
                  <div className="text-sm text-slate-600">Sea & Air Freight</div>
                </div>
              </a>
              <a href="#vehicle-importation" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl hover:shadow-lg hover:from-orange-100 hover:to-orange-200 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Vehicle Importation</div>
                  <div className="text-sm text-slate-600">Auto Import Solutions</div>
                </div>
              </a>
              <a href="#trans-shipment" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl hover:shadow-lg hover:from-teal-100 hover:to-teal-200 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Trans-Shipment</div>
                  <div className="text-sm text-slate-600">FCL & LCL Services</div>
                </div>
              </a>
              <a href="#warehousing" className="group flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl hover:shadow-lg hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Warehouse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Warehousing Services</div>
                  <div className="text-sm text-slate-600">Secure Storage Solutions</div>
                </div>
              </a>
            </div>
          </div>

          <section id="transport" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Transport Services</h2>
                <p className="text-slate-600 mb-4">We are SPECIALISTS in the industry, providing a sound, personalized, top class solution at an excellent rate. We provide unique solutions that are tailor made for our client’s individual needs, thus providing a complete distribution solution. We are experts in the field of local, long distance and cross border transportation. In its bid to maintain a comprehensive, yet specialized service, the company is continually updating and expanding its products, offering clients access to the most advanced methods in the field of cargo movement.</p>

                <p className="text-slate-600 mb-4">Bob-Linus Shipping aims to pursue impeccable standards of integrity and is committed to providing the highest possible levels of service to its clients through management’s valuable years of experience in the transportation field. Management and staff remain committed to achieving these goals and providing customers with the services that are best suited to their individual requirements. Freight is extremely valuable to clients and therefore we handle it with the outmost care and responsibility. The freight is adequately protected against rain, well-fastened and arranged in such a manner that as little time as possible is lost during loading and offloading. All vehicles are equipped with the necessary equipment (covers, corner plates, fire extinguishers, chains, tarps, straps etc.) to ensure that effective handling of freight is maintained. All equipment is checked on a regular basis.</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/industrial-port-container-yard.jpg" alt="Transport" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          <section id="household-imports" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Importation of Household Items</h2>
                <p className="text-slate-600 mb-4">Bob-Linus Shipping specialises in moving families overseas. Having successfully handled a number of removals to South Africa every year, we are consistently one of the largest movers to South Africa. Moving on an international basis can be an adventurous time for you and your family. The task of acquiring a new position, together with the excitement of gaining new acquaintances, researching your new environment and adopting a new culture, can make your international relocation an extremely enticing experience.</p>
                <p className="text-slate-600 mb-4">What you want to avoid is the distraction of problems originating with the relocation of your personal effects to your new country. It is very important to assume some planning and research, to make sure that you understand the requirements involved when moving your treasured possessions, and to acknowledge the laws and regulations governing the importation of your personal and household effects into South Africa.</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/home11.jpg" alt="Household imports" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          <section id="shipping-services" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Shipping Services</h2>
                <p className="text-slate-600 mb-4">Bob-Linus Shipping’s strategy is to provide a total support system, as an extension of our client’s supply chain, to allow for shorter transport lead times, better and easier inventory management and the best possible support on turn key projects, with personal attention by skilled individuals. We offer a customized and optimized solution that integrates transportation, warehousing systems and process skills for the end-to-end, cost effective and high-service management of cargo.</p>
                <p className="text-slate-600 mb-4">Different goods require different levels of service, some can go the cheapest way possible and some need more care. At Bob-Linus Shipping we believe in providing the appropriate level of service for the lowest cost. Which is why, at the outset, we examine your needs and then provide a global but tailored solution that will suit your needs, optimize your processes, reduce your risk and increase service levels. We provide a comprehensive range of integrated cargo transportation and logistics services to meet the needs of domestic and international customers. Bob-Linus Shipping strives to be the number one freight movement company when measured in terms of service excellence and reliability!</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/scene-with-photorealistic-logistics-operations-proceedings.jpg" alt="Shipping services" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          <section id="vehicle-importation" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Vehicle Importation</h2>
                <p className="text-slate-600 mb-4">Very strict rules apply to the importation of motor vehicles (including motor cycles) into Ghana and it is imperative that an Import Permit (from the Department of Trade and Industry) and a letter of Authority are obtained prior to shipment.</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/freepik__the-style-is-candid-image-photography-with-natural__74130.png" alt="Vehicle importation" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          <section id="trans-shipment" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Trans-Shipment</h2>
                <p className="text-slate-600 mb-4">Through our well established global partners we handle cargoes ‘in transit' (FCL and LCL) all over the world. Bob-Linus offers transshipment services on a subcontract basis to major container shipping lines.</p>
                <p className="text-slate-600 mb-4">Thanks to our customs clearance department, all necessary formalities are worked out with speed and efficiency, so that cargoes stay at the transshipment port the shortest time possible.</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/3d-render-freight-container-forklift.jpg" alt="Trans-shipment" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          <section id="warehousing" className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Warehousing</h2>
                <p className="text-slate-600 mb-4">Bob-Linus Shipping offers you warehousing services that go far beyond short-term and long-term storage. You are assured of outstanding safety and security for all your warehousing needs.</p>

                <p className="text-slate-600 mb-4">We provide large equipment storage in a clean, safe, gated facility that’s conveniently located near the Tema port area. These facilities are well equipped with the right equipment such as forklifts which provide staging and storage of any size or weight equipment and can handle materials up to 200 tons.</p>

                <p className="text-slate-600 mb-4">Our first class facility provides outdoor, long-term and short-term storage as well as indoor storage, upon request and availability.</p>

                <p className="text-slate-600 mb-4">You can depend upon our warehousing services for:</p>
                <ul className="list-disc list-inside text-slate-600 mb-4">
                  <li>Sea container loading and unloading</li>
                  <li>Crating and packaging</li>
                  <li>Computerized inventory control</li>
                  <li>Climate control for sensitive high value products and components</li>
                  <li>Haulage drivers to deliver stored equipment and materials to your jobsite</li>
                </ul>

                <p className="text-slate-600 mb-4">Bob-Linus Shipping – The Warehousing Services Source You Can Depend On</p>
                <p className="text-slate-600">Regardless of your storage needs, our warehousing services are here to help, so give us a call. For more information e-mail us at info@bob-linus.com or call us toll-free at +233-244-244-255</p>
              </div>
              <div className="hidden md:block">
                <img src="/images/warehouse.jpg" alt="Warehousing" className="w-full rounded-lg shadow" />
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="bg-gradient-to-r from-[#08aff1] to-[#0694d1] rounded-2xl text-white p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers who trust Bob-Linus for their shipping needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="tel:+233244244255" 
                  className="inline-flex items-center gap-2 bg-white text-[#08aff1] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +233-244-244-255
                </a>
                <a 
                  href="mailto:info@bob-linus.com" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#08aff1] transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
