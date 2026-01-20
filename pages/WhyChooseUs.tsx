
import React from 'react';
import { UserCheck, Zap, DollarSign, Package, ShieldAlert, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-6">Why Choose Miles Electro Technologies?</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              In a highly competitive engineering market, we stand out by focusing on the fundamentals: reliability, quality, and technical prowess. We don't just complete projects; we build lasting relationships through excellence.
            </p>
            <div className="space-y-6">
              <Differentiator 
                icon={<UserCheck />} 
                title="Skilled Engineers & Technicians" 
                text="Our team consists of certified professionals with years of hands-on experience in complex engineering tasks."
              />
              <Differentiator 
                icon={<Zap />} 
                title="On-Time Project Delivery" 
                text="We respect your timelines. Our project management ensures that every milestone is hit precisely on schedule."
              />
              <Differentiator 
                icon={<ShieldAlert />} 
                title="Safety Compliance" 
                text="Zero compromises on safety. We adhere to the highest industry safety standards to protect personnel and assets."
              />
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-3xl border-2 border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                icon={<DollarSign />} 
                title="Competitive Pricing" 
                text="High-end engineering doesn't have to break the bank. We offer value-driven pricing models."
              />
              <FeatureCard 
                icon={<Package />} 
                title="Quality Materials" 
                text="We source only from top-tier vendors ensuring the longevity and reliability of your installations."
              />
              <FeatureCard 
                icon={<Headphones />} 
                title="End-to-End Support" 
                text="From planning to post-commissioning AMC, we stay with you at every stage."
              />
              <FeatureCard 
                icon={<Package className="text-secondary" />} 
                title="Energy Efficiency" 
                text="Our designs prioritize lower power consumption and sustainable engineering practices."
              />
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-secondary rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Experience the Professional Difference</h2>
            <p className="text-white/90 text-lg">Partner with an engineering firm that values your goals as much as you do.</p>
          </div>
          <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent transition-colors flex items-center gap-2 shrink-0">
            Consult Our Engineers Today <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Differentiator: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
    <div className="text-primary">{icon}</div>
    <h3 className="text-lg font-bold text-primary">{title}</h3>
    <p className="text-gray-500 text-sm">{text}</p>
  </div>
);

export default WhyChooseUs;
