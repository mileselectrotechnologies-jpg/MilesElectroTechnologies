
import React from 'react';
import { Bolt, Wind, Building, Settings, Zap, CheckSquare } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Comprehensive Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Engineering excellence delivered through specialized teams and modern technology.
          </p>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Service Sections */}
        <div className="space-y-32">
          
          {/* Electrical Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary text-white rounded-2xl shadow-lg">
                  <Bolt size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Electrical Services</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                We provide complete end-to-end electrical solutions, from initial design to commissioning and maintenance.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Electrical Wiring & Rewiring",
                  "Power Distribution Systems",
                  "LT & HT Panel Installation",
                  "Earthing & Lightning Protection",
                  "DG Set Installation & AMC",
                  "Testing & Commissioning",
                  "Energy Audit Solutions",
                  "Industrial Automation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Zap size={16} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2071&auto=format&fit=crop" 
                alt="Electrical Work" 
                className="w-full aspect-video lg:aspect-square object-cover"
              />
            </div>
          </div>

          {/* HVAC Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?q=80&w=1920&auto=format&fit=crop" 
                alt="HVAC Work" 
                className="w-full aspect-video lg:aspect-square object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-secondary text-white rounded-2xl shadow-lg">
                  <Wind size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">HVAC Services</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Specialized in creating optimal climate control environments for productivity and comfort.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "HVAC System Design & Planning",
                  "Air Conditioning Installation",
                  "VRF / VRV Systems",
                  "Chillers & AHU Systems",
                  "Ducting & Ventilation",
                  "HVAC Maintenance & AMC",
                  "Exhaust Systems",
                  "Clean Room Systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Settings size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Civil Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent text-white rounded-2xl shadow-lg">
                  <Building size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Civil Services</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Delivering robust construction and aesthetic interior solutions with precision engineering.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Residential Construction",
                  "Commercial Interiors",
                  "Renovation & Remodeling",
                  "Structural Repairs",
                  "Waterproofing Solutions",
                  "Flooring & Painting",
                  "Exterior Facade Works",
                  "Infrastructure Works"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckSquare size={16} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop" 
                alt="Civil Work" 
                className="w-full aspect-video lg:aspect-square object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
