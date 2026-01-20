import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, User } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600">Have a question or a project? Reach out to our engineering experts.</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<User className="text-secondary" />} 
                  label="Contact Person" 
                  value="Sadanandam" 
                />
                <ContactInfoItem 
                  icon={<Phone className="text-secondary" />} 
                  label="Phone Number" 
                  value="9704483322" 
                  href="tel:9704483322"
                />
                <ContactInfoItem 
                  icon={<Mail className="text-secondary" />} 
                  label="Email Address" 
                  value="MilesElectroTechnologies@gmail.com" 
                  href="mailto:MilesElectroTechnologies@gmail.com"
                />
                <ContactInfoItem 
                  icon={<MapPin className="text-secondary" />} 
                  label="Our Office" 
                  value="49-81/1, Cherukupally colony, Chintal, Hyd-500055" 
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Clock className="text-secondary" /> Business Hours
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-primary">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-primary">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-red-500">Sunday</span>
                  <span className="font-semibold text-red-500 uppercase">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12 animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Our team will get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <input 
                        type="text" required placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Phone Number</label>
                      <input 
                        type="tel" required placeholder="9704483322"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Email Address</label>
                      <input 
                        type="email" required placeholder="MilesElectroTechnologies@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Service Required</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                        value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Select a Service</option>
                        <option value="electrical">Electrical Engineering</option>
                        <option value="hvac">HVAC Systems</option>
                        <option value="civil">Civil & Construction</option>
                        <option value="maintenance">AMC / Maintenance</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Your Message</label>
                    <textarea 
                      required rows={4} placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Send Inquiry <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[450px] border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.83304266609434!2d78.45745057454457!3d17.491816586274403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb906b8d24def7%3A0xb0bd1f8cbba30bf2!2s49-81%2C%20Cherukupalli%20Colony%2C%20Quthbullapur%2C%20Hyderabad%2C%20Telangana%20500054!5e0!3m2!1sen!2sin!4v1768888213739!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, label: string, value: string, href?: string}> = ({ icon, label, value, href }) => (
  <div className="flex gap-4 group">
    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors shrink-0 flex items-center justify-center">
      <div className="text-secondary group-hover:text-white transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-white font-bold text-lg hover:text-secondary transition-colors break-words">{value}</a>
      ) : (
        <p className="text-white font-bold text-lg break-words">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;