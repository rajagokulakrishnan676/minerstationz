import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe, Calendar, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const timeline = [
    { year: '1998', event: 'Company Founded', description: 'Minerstationz established with a vision to revolutionize mining in Tanzania.' },
    { year: '2003', event: 'First Major Project', description: 'Launched our first large-scale gold mining operation in Geita region.' },
    { year: '2010', event: 'International Recognition', description: 'Received the African Mining Excellence Award for sustainable practices.' },
    { year: '2015', event: 'Technology Integration', description: 'Implemented AI-driven geological analysis and automated extraction systems.' },
    { year: '2020', event: 'Expansion Phase', description: 'Opened three new mining sites across Tanzania, doubling our capacity.' },
    { year: '2023', event: 'Sustainability Milestone', description: 'Achieved carbon-neutral operations across all mining sites.' },
  ];

  const leadership = [
    {
      name: 'Dr. James Mwangi',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With over 20 years in mining engineering, Dr. Mwangi leads our vision of sustainable mining excellence.',
    },
    {
      name: 'Sarah Kimani',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Sarah oversees our day-to-day operations and safety protocols across all mining sites.',
    },
    {
      name: 'Prof. Hassan Mbeki',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Prof. Mbeki drives our technological innovation and research initiatives.',
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
            About <span className="text-yellow-400">Minerstationz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Leading Tanzania's mining industry with a commitment to excellence, sustainability, and innovation for over two decades.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-900 rounded-lg"
            >
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To extract Tanzania's mineral wealth responsibly while creating sustainable value for our stakeholders and communities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-900 rounded-lg"
            >
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become Africa's premier mining company, recognized globally for operational excellence and environmental stewardship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-900 rounded-lg"
            >
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-300">
                Safety, integrity, innovation, and respect for the environment and communities guide everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Dr. James Mwangi, CEO"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Message from Our CEO</h2>
              <blockquote className="text-lg text-gray-300 italic mb-6">
                "At Minerstationz, we believe that mining can be a force for good. Our commitment to sustainable practices, 
                technological innovation, and community development has positioned us as a leader in Africa's mining sector. 
                We're not just extracting minerals; we're building a better future for Tanzania and its people."
              </blockquote>
              <cite className="text-yellow-400 font-semibold">
                - Dr. James Mwangi, Chief Executive Officer
              </cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our <span className="text-yellow-400">Journey</span>
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 hidden md:block" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full relative z-10" />
                
                <div className="md:w-1/2 md:pl-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Leadership <span className="text-yellow-400">Team</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-yellow-400 mb-4">{leader.position}</p>
                <p className="text-gray-300">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Key <span className="text-yellow-400">Achievements</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'African Mining Excellence Award', year: '2010, 2015, 2020' },
              { icon: Users, title: 'Best Employer in Mining', year: '2019, 2021' },
              { icon: Globe, title: 'Sustainability Champion', year: '2022' },
              { icon: TrendingUp, title: 'Top Mining Company Tanzania', year: '2020-2023' },
              { icon: Target, title: 'Safety Excellence Award', year: '2018, 2021' },
              { icon: Calendar, title: '25 Years of Excellence', year: '2023' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <achievement.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-yellow-400">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};