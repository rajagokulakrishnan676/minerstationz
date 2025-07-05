import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pickaxe, Truck, Shield, Globe, FileText, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Geological Exploration',
      description: 'Advanced geological surveys and mineral analysis using cutting-edge technology including 3D geological modeling and geophysical surveys.',
      features: [
        'Mineral resource assessment',
        'Geophysical surveys',
        '3D geological modeling',
        'Environmental impact studies',
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Pickaxe,
      title: 'Mining Operations',
      description: 'Comprehensive mining operations from planning to execution, utilizing modern equipment and sustainable practices.',
      features: [
        'Open-pit and underground mining',
        'Automated extraction systems',
        'Real-time monitoring',
        'Safety protocol implementation',
      ],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Truck,
      title: 'Processing & Refining',
      description: 'State-of-the-art processing facilities that transform raw minerals into market-ready products with maximum efficiency.',
      features: [
        'Ore processing and beneficiation',
        'Quality control testing',
        'Waste management systems',
        'Product certification',
      ],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Globe,
      title: 'Export & Logistics',
      description: 'Seamless supply chain management and international export capabilities ensuring timely delivery worldwide.',
      features: [
        'Global supply chain management',
        'International shipping coordination',
        'Customs and documentation',
        'Quality assurance throughout transport',
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Shield,
      title: 'Environmental & Safety',
      description: 'Comprehensive environmental protection and safety management to ensure sustainable and responsible mining practices.',
      features: [
        'Environmental impact mitigation',
        'Workplace safety programs',
        'Emergency response planning',
        'Regulatory compliance',
      ],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: FileText,
      title: 'Consulting & Advisory',
      description: 'Expert consulting services for mining ventures, providing strategic guidance and technical expertise.',
      features: [
        'Mining project feasibility studies',
        'Technical advisory services',
        'Regulatory compliance guidance',
        'Investment analysis',
      ],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
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
            Our <span className="text-yellow-400">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive mining solutions from exploration to export, delivered with world-class expertise and commitment to sustainability.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-yellow-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-yellow-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our <span className="text-yellow-400">Process</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Exploration', description: 'Site survey and mineral analysis' },
              { step: '02', title: 'Planning', description: 'Project design and environmental assessment' },
              { step: '03', title: 'Extraction', description: 'Safe and efficient mining operations' },
              { step: '04', title: 'Processing', description: 'Refining and quality control' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-400/30 transform -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
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
                Advanced <span className="text-yellow-400">Technology</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We leverage cutting-edge technology to maximize efficiency, ensure safety, and minimize environmental impact 
                across all our operations.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-powered geological analysis',
                  'Automated mining equipment',
                  'Real-time environmental monitoring',
                  'Digital twin technology',
                  'Predictive maintenance systems',
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4" />
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
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
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mining Technology"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            Ready to Start Your Mining Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 mb-8"
          >
            Contact our experts today to discuss your mining needs and discover how we can help you achieve your goals.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};