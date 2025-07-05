import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Eye, Filter, X } from 'lucide-react';

export const MediaGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const mediaItems = [
    {
      id: 1,
      title: 'Geita Gold Mine Operations',
      type: 'video',
      category: 'operations',
      thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Aerial view of our flagship gold mining operation in Geita region.',
      date: '2023-11-15',
      project: 'Geita Gold Mine',
    },
    {
      id: 2,
      title: 'Mining Equipment in Action',
      type: 'image',
      category: 'equipment',
      thumbnail: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'State-of-the-art mining equipment at work in our facilities.',
      date: '2023-10-22',
      project: 'Equipment Showcase',
    },
    {
      id: 3,
      title: 'Sustainable Mining Practices',
      type: 'video',
      category: 'sustainability',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Documentary showcasing our environmental protection initiatives.',
      date: '2023-09-18',
      project: 'Sustainability Report',
    },
    {
      id: 4,
      title: 'Community Development Projects',
      type: 'image',
      category: 'community',
      thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Local community development initiatives supported by Minerstationz.',
      date: '2023-08-25',
      project: 'CSR Initiatives',
    },
    {
      id: 5,
      title: 'Diamond Processing Facility',
      type: 'video',
      category: 'operations',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Inside our advanced diamond processing and sorting facility.',
      date: '2023-07-30',
      project: 'Shinyanga Diamond Project',
    },
    {
      id: 6,
      title: 'Safety Training Program',
      type: 'image',
      category: 'safety',
      thumbnail: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive safety training for all mining personnel.',
      date: '2023-06-12',
      project: 'Safety Excellence',
    },
    {
      id: 7,
      title: 'Copper Mine Development',
      type: 'video',
      category: 'development',
      thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Construction progress at our new copper mining site in Mwanza.',
      date: '2023-05-20',
      project: 'Mwanza Copper Mine',
    },
    {
      id: 8,
      title: 'Environmental Restoration',
      type: 'image',
      category: 'sustainability',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Land restoration and reforestation efforts at completed mining sites.',
      date: '2023-04-15',
      project: 'Environmental Restoration',
    },
    {
      id: 9,
      title: 'Gemstone Sorting Process',
      type: 'video',
      category: 'operations',
      thumbnail: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Precision sorting and grading of precious gemstones.',
      date: '2023-03-08',
      project: 'Arusha Gemstone Mine',
    },
    {
      id: 10,
      title: 'Innovation Lab',
      type: 'image',
      category: 'technology',
      thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Research and development facility for mining technology innovation.',
      date: '2023-02-28',
      project: 'Technology Innovation',
    },
    {
      id: 11,
      title: 'Employee Training Center',
      type: 'video',
      category: 'community',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'State-of-the-art training facility for skill development.',
      date: '2023-01-18',
      project: 'Human Resources',
    },
    {
      id: 12,
      title: 'Drone Survey Operations',
      type: 'image',
      category: 'technology',
      thumbnail: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Advanced drone technology for geological surveys and monitoring.',
      date: '2022-12-10',
      project: 'Geological Survey',
    },
  ];

  const filteredItems = mediaItems.filter(item => 
    selectedFilter === 'all' || item.category === selectedFilter
  );

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'operations', name: 'Operations' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'community', name: 'Community' },
    { id: 'safety', name: 'Safety' },
    { id: 'development', name: 'Development' },
    { id: 'technology', name: 'Technology' },
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
            Media <span className="text-yellow-400">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our comprehensive collection of images and videos showcasing our mining operations, sustainability efforts, and community impact.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                  selectedFilter === category.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.id === 'all' && <Filter className="w-5 h-5 mr-2" />}
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400"
          >
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </motion.div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group cursor-pointer"
                onClick={() => setSelectedMedia(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.type === 'video' ? (
                      <Play className="w-16 h-16 text-yellow-400" />
                    ) : (
                      <Eye className="w-16 h-16 text-yellow-400" />
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      item.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{item.project}</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const media = mediaItems.find(m => m.id === selectedMedia);
                if (!media) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{media.title}</h3>
                        <p className="text-gray-400">{media.project} • {new Date(media.date).toLocaleDateString()}</p>
                      </div>
                      <button
                        onClick={() => setSelectedMedia(null)}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="mb-6">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-300 text-lg">{media.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                            media.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                          }`}>
                            {media.type.toUpperCase()}
                          </span>
                          <span className="text-gray-400 capitalize">{media.category}</span>
                        </div>
                        
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
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