import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Users, Heart, Award, TrendingUp } from 'lucide-react';

export const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Environmental Protection',
      description: 'Implementing comprehensive environmental management systems to minimize our ecological footprint.',
      metrics: { value: '95%', label: 'Waste Reduction' },
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Maximizing resource efficiency through recycling and waste-to-value conversion programs.',
      metrics: { value: '85%', label: 'Material Recovery' },
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Supporting local communities through education, healthcare, and economic development programs.',
      metrics: { value: '50+', label: 'Community Projects' },
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Heart,
      title: 'Social Responsibility',
      description: 'Prioritizing employee welfare and creating positive social impact in our operational areas.',
      metrics: { value: '1000+', label: 'Lives Impacted' },
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  const achievements = [
    { year: '2020', title: 'Carbon Neutral Certification', description: 'Achieved carbon neutrality across all operations' },
    { year: '2021', title: 'Biodiversity Protection Award', description: 'Recognized for ecosystem conservation efforts' },
    { year: '2022', title: 'Community Impact Excellence', description: 'Honored for outstanding community development' },
    { year: '2023', title: 'Sustainable Mining Leader', description: 'Named industry leader in sustainable practices' },
  ];

  const [progressValues, setProgressValues] = React.useState({
    environmental: 0,
    social: 0,
    economic: 0,
    governance: 0,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        environmental: 92,
        social: 88,
        economic: 85,
        governance: 94,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
            Sustainability & <span className="text-yellow-400">CSR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our commitment to sustainable mining practices and corporate social responsibility drives every aspect of our operations.
          </motion.p>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our <span className="text-yellow-400">Initiatives</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group"
              >
                <div className="relative">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <initiative.icon className="w-16 h-16 text-yellow-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-gray-300 mb-6">{initiative.description}</p>
                  
                  <div className="bg-black rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      {initiative.metrics.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {initiative.metrics.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            ESG <span className="text-yellow-400">Performance</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Environmental', value: progressValues.environmental, color: 'bg-green-500' },
              { title: 'Social', value: progressValues.social, color: 'bg-blue-500' },
              { title: 'Economic', value: progressValues.economic, color: 'bg-yellow-500' },
              { title: 'Governance', value: progressValues.governance, color: 'bg-purple-500' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-6">{metric.title}</h3>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - metric.value / 100)}`}
                      className={`${metric.color.replace('bg-', 'text-')} transition-all duration-1000`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-400">{metric.value}%</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Excellence Rating</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Sustainability <span className="text-yellow-400">Achievements</span>
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 hidden md:block" />
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-bold text-lg">{achievement.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full relative z-10" />
                
                <div className="md:w-1/2 md:pl-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our <span className="text-yellow-400">Impact</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: 'Trees Planted', icon: Leaf },
              { value: '50+', label: 'Schools Built', icon: Users },
              { value: '200+', label: 'Jobs Created', icon: TrendingUp },
              { value: '95%', label: 'Local Hiring', icon: Heart },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
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
                Future <span className="text-yellow-400">Goals</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our commitment to sustainability extends beyond today. We're setting ambitious goals for the future 
                to ensure mining contributes positively to society and the environment.
              </p>
              
              <div className="space-y-6">
                {[
                  { target: '2025', goal: 'Net-zero carbon emissions across all operations' },
                  { target: '2026', goal: '100% renewable energy for all facilities' },
                  { target: '2027', goal: 'Zero waste to landfill achievement' },
                  { target: '2030', goal: 'Full circular economy implementation' },
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-yellow-400 text-black rounded-full w-16 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      {goal.target}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300">{goal.goal}</p>
                    </div>
                  </motion.div>
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
                alt="Sustainable Future"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Building Tomorrow</h3>
                <p className="text-gray-300">Sustainable mining for future generations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};