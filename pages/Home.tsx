
import React from 'react';
import { Link } from 'react-router-dom';
import { Bolt, Wind, Building, CheckCircle, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Complete Electrical, HVAC & Civil Engineering <span className="text-secondary">Under One Roof</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
              M/s Miles Electro Technologies provides end-to-end engineering solutions for residential, commercial, and industrial projects with unmatched quality and safety.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all flex items-center gap-2 shadow-lg">
                Request a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                Welcome to Miles Electro Technologies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Expert Engineering For A Better Tomorrow</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                As a multi-disciplinary service provider, we pride ourselves on delivering robust Electrical, HVAC, and Civil Engineering services. Whether it's a massive industrial plant or a boutique residential interior, our commitment to excellence, safety, and energy efficiency remains constant.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Expert Engineers", icon: <Users className="text-secondary" /> },
                  { label: "Safety First", icon: <ShieldCheck className="text-secondary" /> },
                  { label: "Quality Work", icon: <CheckCircle className="text-secondary" /> },
                  { label: "Modern Tools", icon: <Zap className="text-secondary" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                    <span className="font-semibold text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover aspect-[4/3]" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-primary">Reliable</div>
                <div className="text-secondary font-semibold">Engineering Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Providing high-quality solutions across three major engineering disciplines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServicePreview 
              title="Electrical" 
              icon={<Bolt className="w-12 h-12" />} 
              desc="Comprehensive power distribution, wiring, and panel installations." 
              image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2071&auto=format&fit=crop"
            />
            <ServicePreview 
              title="HVAC" 
              icon={<Wind className="w-12 h-12" />} 
              desc="Design, installation, and maintenance of advanced climate control systems." 
              image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
            />
            <ServicePreview 
              title="Civil" 
              icon={<Building className="w-12 h-12" />} 
              desc="Expert construction, interiors, and renovation for every space." 
              image="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="text-primary font-bold hover:text-secondary inline-flex items-center gap-2 border-b-2 border-primary hover:border-secondary pb-1 transition-all">
              View All Detailed Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to start your next project?</h2>
          <p className="text-xl text-blue-100 opacity-90">Experience engineering excellence with Miles Electro Technologies.</p>
          <div className="flex justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Get A Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicePreview: React.FC<{title: string, icon: React.ReactNode, desc: string, image: string}> = ({ title, icon, desc, image }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg bg-white h-96 transition-all hover:-translate-y-2">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
    </div>
    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
      <div className="bg-secondary/90 w-fit p-3 rounded-lg mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title} Services</h3>
      <p className="text-blue-50 opacity-90 mb-4">{desc}</p>
      <Link to="/services" className="text-white font-bold inline-flex items-center gap-2 hover:text-secondary transition-colors">
        Read More <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default Home;
