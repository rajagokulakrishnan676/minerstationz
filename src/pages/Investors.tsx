import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, DollarSign, Shield, Users, Mail, Phone, FileText } from 'lucide-react';

export const Investors: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest. We will contact you soon!');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const keyMetrics = [
    { title: 'Annual Revenue', value: '$250M+', icon: DollarSign, growth: '+15%' },
    { title: 'Mining Sites', value: '6 Active', icon: TrendingUp, growth: '+2 new' },
    { title: 'Employees', value: '850+', icon: Users, growth: '+12%' },
    { title: 'Safety Record', value: '1200+ Days', icon: Shield, growth: 'Zero incidents' },
  ];

  const investmentHighlights = [
    {
      title: 'Market Leadership',
      description: 'Leading position in Tanzania\'s mining sector with 25+ years of experience',
      icon: '🏆',
    },
    {
      title: 'Diverse Portfolio',
      description: 'Multiple mining operations across gold, diamonds, copper, and gemstones',
      icon: '💎',
    },
    {
      title: 'Sustainable Growth',
      description: 'ESG-focused operations with strong environmental and social commitments',
      icon: '🌱',
    },
    {
      title: 'Strong Returns',
      description: 'Consistent profitability with attractive dividend yields for investors',
      icon: '📈',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Investor <span className="text-yellow-400">Relations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Join us in shaping the future of sustainable mining in Africa. Discover compelling investment opportunities with proven returns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download Investor Pack
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              Schedule a Meeting
            </button>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Key <span className="text-yellow-400">Metrics</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <metric.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 mb-2">{metric.title}</div>
                <div className="text-sm text-green-400">{metric.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Investment <span className="text-yellow-400">Highlights</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strong Financial <span className="text-yellow-400">Performance</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our consistent track record of profitability and growth demonstrates our ability to deliver value to shareholders while maintaining operational excellence.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Revenue Growth</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">2023 Performance</span>
                    <span className="text-green-400 font-bold">+15% YoY</span>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Profit Margin</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Industry Leading</span>
                    <span className="text-green-400 font-bold">22%</span>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Dividend Yield</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Attractive Returns</span>
                    <span className="text-green-400 font-bold">4.5%</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Financial Growth"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Consistent Growth</h3>
                <p className="text-gray-300">25 years of profitable operations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents and Reports */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Financial <span className="text-yellow-400">Reports</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Annual Report 2023', type: 'Annual Report', size: '15.2 MB' },
              { title: 'Q3 2023 Financial Results', type: 'Quarterly Report', size: '8.5 MB' },
              { title: 'Sustainability Report 2023', type: 'ESG Report', size: '12.1 MB' },
              { title: 'Investor Presentation', type: 'Presentation', size: '25.3 MB' },
              { title: 'Corporate Governance', type: 'Governance', size: '6.8 MB' },
              { title: 'Mineral Resources Update', type: 'Technical Report', size: '18.7 MB' },
            ].map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <FileText className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{document.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{document.type} • {document.size}</p>
                <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center group-hover:bg-yellow-500">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="text-yellow-400">Touch</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to explore investment opportunities with Minerstationz? Our investor relations team is here to provide you with detailed information and answer your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">+255 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">investors@minerstationz.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Investor Relations</h3>
                    <p className="text-gray-300">Quarterly reports, annual meetings, and investor updates</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Investor Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  />
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
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};