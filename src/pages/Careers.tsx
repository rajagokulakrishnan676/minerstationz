import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Award, Heart, Search, Send } from 'lucide-react';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Mining Engineer',
      department: 'Operations',
      location: 'Geita, Tanzania',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      posted: '2024-01-15',
      description: 'Lead mining operations and ensure safety compliance across all extraction activities.',
      requirements: [
        'Bachelor\'s degree in Mining Engineering',
        '5+ years of mining experience',
        'Strong safety management skills',
        'Proficiency in mining software',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Housing allowance',
        'Professional development opportunities',
        'Performance bonuses',
      ],
    },
    {
      id: 2,
      title: 'Environmental Specialist',
      department: 'Sustainability',
      location: 'Dar es Salaam, Tanzania',
      type: 'Full-time',
      salary: '$45,000 - $65,000',
      posted: '2024-01-10',
      description: 'Develop and implement environmental protection strategies for mining operations.',
      requirements: [
        'Master\'s degree in Environmental Science',
        '3+ years in environmental consulting',
        'Knowledge of environmental regulations',
        'Experience with impact assessments',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Research funding support',
        'International conference attendance',
        'Flexible work arrangements',
      ],
    },
    {
      id: 3,
      title: 'Safety Officer',
      department: 'Safety',
      location: 'Mwanza, Tanzania',
      type: 'Full-time',
      salary: '$40,000 - $55,000',
      posted: '2024-01-08',
      description: 'Ensure workplace safety standards and conduct safety training programs.',
      requirements: [
        'Diploma in Occupational Safety',
        '4+ years of safety management experience',
        'Safety certification (NEBOSH preferred)',
        'Strong communication skills',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Safety equipment provided',
        'Career advancement opportunities',
        'Training and certification support',
      ],
    },
    {
      id: 4,
      title: 'Geologist',
      department: 'Exploration',
      location: 'Shinyanga, Tanzania',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      posted: '2024-01-05',
      description: 'Conduct geological surveys and analyze mineral deposits for exploration projects.',
      requirements: [
        'Bachelor\'s degree in Geology',
        '3+ years of field experience',
        'Knowledge of geological software',
        'Willingness to travel to remote locations',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Field work allowances',
        'Equipment and vehicle provided',
        'Professional development budget',
      ],
    },
    {
      id: 5,
      title: 'Plant Operator',
      department: 'Processing',
      location: 'Arusha, Tanzania',
      type: 'Full-time',
      salary: '$35,000 - $45,000',
      posted: '2024-01-03',
      description: 'Operate and maintain mineral processing equipment and machinery.',
      requirements: [
        'Technical diploma in Mechanical Engineering',
        '2+ years of plant operation experience',
        'Understanding of processing equipment',
        'Strong mechanical aptitude',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Shift allowances',
        'Skills development programs',
        'Safety training and certification',
      ],
    },
    {
      id: 6,
      title: 'Community Relations Manager',
      department: 'CSR',
      location: 'Dodoma, Tanzania',
      type: 'Full-time',
      salary: '$55,000 - $75,000',
      posted: '2023-12-28',
      description: 'Build and maintain positive relationships with local communities and stakeholders.',
      requirements: [
        'Bachelor\'s degree in Social Sciences',
        '5+ years in community relations',
        'Excellent communication skills',
        'Fluency in Swahili and English',
      ],
      benefits: [
        'Comprehensive health insurance',
        'Community project budget',
        'Cultural sensitivity training',
        'Leadership development programs',
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical insurance and wellness programs for you and your family.',
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuous learning opportunities, training programs, and career advancement.',
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative work culture with diverse, skilled professionals.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance-based bonuses and benefits.',
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    alert('Thank you for your application! We will contact you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
    });
    setSelectedJob(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

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
            Join Our <span className="text-yellow-400">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Build your career with Tanzania's leading mining company. Join us in shaping the future of sustainable mining.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Work <span className="text-yellow-400">With Us?</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Current <span className="text-yellow-400">Openings</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-yellow-400 text-sm">{job.department}</p>
                  </div>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <button
                  onClick={() => setSelectedJob(job.id)}
                  className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  View Details & Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
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
                Life at <span className="text-yellow-400">Minerstationz</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                At Minerstationz, we foster a culture of innovation, safety, and excellence. Our team members are our greatest asset, and we're committed to providing an environment where everyone can thrive and grow.
              </p>
              
              <div className="space-y-4">
                {[
                  'Diverse and inclusive workplace',
                  'Continuous learning opportunities',
                  'Work-life balance support',
                  'Innovation and creativity encouraged',
                  'Strong safety culture',
                  'Community involvement initiatives',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4" />
                    <span className="text-gray-300">{item}</span>
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
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team at Work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Our Team</h3>
                <p className="text-gray-300">850+ professionals working together</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const job = jobOpenings.find(j => j.id === selectedJob);
                if (!job) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-yellow-400">{job.department} • {job.location}</p>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="text-gray-400 hover:text-white transition-colors text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Job Description</h4>
                        <p className="text-gray-300 mb-6">{job.description}</p>
                        
                        <h4 className="text-lg font-semibold mb-4">Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                              <span className="text-gray-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-lg font-semibold mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Apply Now</h4>
                        <form onSubmit={handleApplicationSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={applicationData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={applicationData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={applicationData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Years of Experience
                            </label>
                            <select
                              name="experience"
                              value={applicationData.experience}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                            >
                              <option value="">Select experience level</option>
                              <option value="0-2">0-2 years</option>
                              <option value="3-5">3-5 years</option>
                              <option value="6-10">6-10 years</option>
                              <option value="10+">10+ years</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Cover Letter
                            </label>
                            <textarea
                              name="message"
                              value={applicationData.message}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white resize-none"
                              placeholder="Tell us why you're interested in this position..."
                            />
                          </div>
                          
                          <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Submit Application
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};