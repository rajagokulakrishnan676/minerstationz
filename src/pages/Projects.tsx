import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, TrendingUp, Eye, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: 'Geita Gold Mine',
      location: 'Geita Region, Tanzania',
      status: 'active',
      type: 'gold',
      startDate: '2003',
      employees: 450,
      production: '15,000 oz/year',
      description: 'Our flagship gold mining operation featuring state-of-the-art extraction and processing facilities.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 85,
    },
    {
      id: 2,
      name: 'Shinyanga Diamond Project',
      location: 'Shinyanga Region, Tanzania',
      status: 'active',
      type: 'diamond',
      startDate: '2015',
      employees: 320,
      production: '50,000 carats/year',
      description: 'Advanced diamond mining operation using eco-friendly extraction methods.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 72,
    },
    {
      id: 3,
      name: 'Mwanza Copper Mine',
      location: 'Mwanza Region, Tanzania',
      status: 'development',
      type: 'copper',
      startDate: '2023',
      employees: 180,
      production: 'TBD',
      description: 'New copper mining project in development phase with projected high yield.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 35,
    },
    {
      id: 4,
      name: 'Dodoma Nickel Project',
      location: 'Dodoma Region, Tanzania',
      status: 'completed',
      type: 'nickel',
      startDate: '2010',
      employees: 280,
      production: 'Completed',
      description: 'Successfully completed nickel mining project that operated for 8 years.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 100,
    },
    {
      id: 5,
      name: 'Arusha Gemstone Mine',
      location: 'Arusha Region, Tanzania',
      status: 'active',
      type: 'gemstone',
      startDate: '2018',
      employees: 120,
      production: 'Various precious stones',
      description: 'Specialty gemstone mining operation focusing on tanzanite and other precious stones.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 68,
    },
    {
      id: 6,
      name: 'Iringa Coal Project',
      location: 'Iringa Region, Tanzania',
      status: 'development',
      type: 'coal',
      startDate: '2024',
      employees: 95,
      production: 'In development',
      description: 'New coal mining project focused on clean coal technology and environmental sustainability.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      progress: 15,
    },
  ];

  const filteredProjects = projects.filter(project => 
    selectedFilter === 'all' || project.status === selectedFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'development': return 'In Development';
      case 'completed': return 'Completed';
      default: return 'Unknown';
    }
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
            Mining <span className="text-yellow-400">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our portfolio of mining projects across Tanzania, showcasing our commitment to sustainable resource extraction.
          </motion.p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Mining <span className="text-yellow-400">Locations</span>
          </motion.h2>
          
          <div className="bg-black rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent" />
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Tanzania Map"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <p className="text-gray-300 text-lg">
                  Our mining operations span across multiple regions in Tanzania, 
                  strategically positioned to maximize efficiency and minimize environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                selectedFilter === 'all' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <Filter className="w-5 h-5 mr-2" />
              All Projects
            </button>
            <button
              onClick={() => setSelectedFilter('active')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'active' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setSelectedFilter('development')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'development' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              In Development
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedFilter === 'completed' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Completed
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-semibold text-yellow-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>{project.employees} employees</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center group"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Project Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status:</span>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(project.status)} text-white`}>
                              {getStatusText(project.status)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Started:</span>
                            <span>{project.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Employees:</span>
                            <span>{project.employees}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Production:</span>
                            <span>{project.production}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Progress</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Completion</span>
                            <span className="font-semibold text-yellow-400">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                              className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4">Description</h4>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Project Gallery</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.gallery.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${project.name} ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                          />
                        ))}
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