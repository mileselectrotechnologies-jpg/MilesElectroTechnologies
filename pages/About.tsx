import React from 'react';
import { Target, Eye, Heart, Shield, Award, Lightbulb, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <div className="h-1.5 w-24 bg-secondary mb-8"></div>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              M/s Miles Electro Technologies is a leading multi-disciplinary engineering firm dedicated to providing high-quality solutions across various industry verticals. With a core focus on <strong>Electrical, HVAC, and Civil Engineering</strong>, we serve as a one-stop destination for complex project requirements.
            </p>
            <p className="mt-4">
              Our firm was established with a singular goal: to revolutionize the engineering service landscape by combining technical expertise with a customer-centric approach. We focus on quality execution, adherence to safety standards, promoting energy efficiency, and ensuring timely project delivery for every client.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
            <Target className="w-16 h-16 text-secondary/30 absolute -right-4 -top-4 group-hover:scale-110 transition-transform" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary rounded-lg"><Target className="text-white" /></div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl text-blue-50 leading-relaxed italic">
              "To deliver high-quality engineering services with safety, precision, and customer satisfaction."
            </p>
          </div>
          
          <div className="bg-white border-2 border-primary/10 p-10 rounded-2xl shadow-xl relative overflow-hidden group">
            <Eye className="w-16 h-16 text-primary/10 absolute -right-4 -top-4 group-hover:scale-110 transition-transform" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary rounded-lg"><Eye className="text-white" /></div>
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "To become a trusted engineering solutions provider across India, setting benchmarks for excellence."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
          <p className="text-gray-500 mt-2">The principles that drive our success and partnerships.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Quality", desc: "Unyielding commitment to technical excellence in every project.", icon: <Award className="w-8 h-8" /> },
            { title: "Safety", desc: "Rigorous adherence to international safety protocols and standards.", icon: <Shield className="w-8 h-8" /> },
            { title: "Integrity", desc: "Transparent dealings and ethical business practices at all times.", icon: <Heart className="w-8 h-8" /> },
            { title: "Innovation", desc: "Leveraging modern technology for energy-efficient and smart solutions.", icon: <Lightbulb className="w-8 h-8" /> },
            { title: "Customer Focus", desc: "Putting client needs at the center of our project management.", icon: <Users className="w-8 h-8" /> },
            { title: "Timely Delivery", desc: "Precise planning to meet strict deadlines without compromising quality.", icon: <Clock className="w-8 h-8" /> },
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-secondary/10 rounded-full text-secondary">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;