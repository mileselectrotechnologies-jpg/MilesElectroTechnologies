import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo.png" 
              alt="Miles Electro Technologies" 
              className="h-10 w-auto brightness-200 filter"
            />
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Multi-disciplinary engineering service provider delivering top-tier Electrical, HVAC, and Civil solutions with a focus on quality, safety, and energy efficiency.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
            <li><Link to="/projects" className="hover:text-secondary transition-colors">Work Experience</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Info</h3>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0" />
              <span>49-81/1, Cherukupally colony, Chintal, Hyd-500055</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-secondary shrink-0" />
              <a href="tel:9704483322" className="hover:text-secondary transition-colors">9704483322</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-secondary shrink-0" />
              <a href="mailto:MilesElectroTechnologies@gmail.com" className="hover:text-secondary transition-colors">MilesElectroTechnologies@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Business Hours</h3>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-secondary" />
              <div>
                <p className="font-semibold">Mon - Sat</p>
                <p>09:00 AM - 07:00 PM</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-secondary" />
              <div>
                <p className="font-semibold text-red-300">Sunday</p>
                <p>Closed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-blue-200 text-xs">
        &copy; {new Date().getFullYear()} M/s Miles Electro Technologies. All Rights Reserved. Designed for Professional Excellence.
      </div>
    </footer>
  );
};

export default Footer;