import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, MessageCircle, Globe } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oubenssaidyoussef@gmail.com",
      href: "mailto:oubenssaidyoussef@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 654823654",
      href: "tel:+212654823654"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      href: "https://maps.google.com/?q=Casablanca,Morocco"
    }
  ];

  const socialLinks = [
    {
      icon: Globe,
      label: "Portfolio",
      value: "youssefoubensaid.me",
      href: "https://www.youssefoubensaid.me/",
      color: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/youssef-ouben-said",
      href: "https://linkedin.com/in/youssef-ouben-said",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/youssef",
      href: "https://github.com/youssef",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <Icon className="w-6 h-6 text-blue-400 mr-4" />
                      <div>
                        <p className="text-white font-medium">{contact.label}</p>
                        <p className="text-gray-300">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/20 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`p-2 rounded-lg ${social.color} transition-colors mr-4`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{social.label}</p>
                        <p className="text-gray-300 group-hover:text-blue-400 transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                <MessageCircle className="inline-block w-5 h-5 mr-2" />
                Quick Response
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call or connect on LinkedIn for faster communication.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">24h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-xs text-gray-400">Reply Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name (optional)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-sm text-gray-300">
                Prefer other communication methods? Check the contact options on the left!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-400">
            © 2024 Youssef Ouben Said. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
