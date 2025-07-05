import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const Home: React.FC = () => {
  const [counters, setCounters] = useState({
    years: 0,
    tonnes: 0,
    safety: 0,
    employees: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hero slides for fallback
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Powering Growth.',
      subtitle: 'Mining the Future.',
      description: 'Leading Tanzania\'s mining industry with sustainable practices and cutting-edge technology.',
    },
    {
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Advanced Technology.',
      subtitle: 'Sustainable Operations.',
      description: 'State-of-the-art equipment and eco-friendly mining practices for a better tomorrow.',
    },
    {
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Global Standards.',
      subtitle: 'Local Impact.',
      description: 'International excellence with deep commitment to Tanzanian communities.',
    },
    {
      image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Strategic Locations.',
      subtitle: 'Maximum Efficiency.',
      description: 'Optimally positioned mining operations across Tanzania\'s mineral-rich regions.',
    },
    {
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Investor Confidence.',
      subtitle: 'Proven Returns.',
      description: 'Over 25 years of consistent growth and profitable mining operations.',
    },
  ];

  useEffect(() => {
    if (statsInView) {
      const timer = setTimeout(() => {
        setCounters({
          years: 25,
          tonnes: 2500000,
          safety: 1200,
          employees: 850,
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [statsInView]);

  // Auto-advance slides
  useEffect(() => {
    if (!showVideo) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showVideo, heroSlides.length]);

  // Check if video should be shown (not on mobile for performance)
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setShowVideo(!isMobile);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (end === 0) return;
      
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(startValue + (end - startValue) * progress);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <div className="relative">
      {/* Hero Section with Video Background or Image Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {showVideo ? (
          /* Video Background */
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster={heroSlides[0].image}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setShowVideo(false)}
            >
              <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ) : (
          /* Image Slider Fallback */
          <div className="absolute inset-0 z-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Mining operations ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}
            
            {/* Slider Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="block text-white drop-shadow-2xl"
              >
                {showVideo ? 'Powering Growth.' : heroSlides[currentSlide].title}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="block text-yellow-400 drop-shadow-2xl"
              >
                {showVideo ? 'Mining the Future.' : heroSlides[currentSlide].subtitle}
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {showVideo 
              ? 'Leading Tanzania\'s mining industry with sustainable practices, cutting-edge technology, and unwavering commitment to excellence.'
              : heroSlides[currentSlide].description
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 212, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="bg-yellow-400 text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center group shadow-2xl"
              >
                Explore Projects
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="border-3 border-yellow-400 text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center group shadow-2xl backdrop-blur-sm"
              >
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-8 h-14 border-2 border-yellow-400 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-4 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven <span className="text-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and sustainable growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counters.years, suffix: '+', label: 'Years of Excellence', icon: Award },
              { value: counters.tonnes, suffix: 'T+', label: 'Tonnes Extracted', icon: TrendingUp },
              { value: counters.safety, suffix: '+', label: 'Safety Days', icon: Shield },
              { value: counters.employees, suffix: '+', label: 'Employees', icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-black" />
                </motion.div>
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              >
                Leading Africa's
                <span className="text-yellow-400 block"> Mining Revolution</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg mb-10 leading-relaxed"
              >
                For over two decades, Minerstationz has been at the forefront of sustainable mining in Tanzania. 
                Our commitment to innovation, safety, and environmental stewardship has made us the trusted partner 
                for international investors and local communities alike.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Shield, title: 'Safety First', desc: 'Zero-accident commitment' },
                  { icon: TrendingUp, title: 'Growth Focused', desc: 'Expanding operations' },
                  { icon: Users, title: 'Community First', desc: 'Local empowerment' },
                  { icon: Award, title: 'Award Winning', desc: 'Industry recognition' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="bg-yellow-400 p-3 rounded-full mr-4 group-hover:shadow-lg transition-all duration-300"
                    >
                      <item.icon className="w-6 h-6 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/about"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 inline-flex items-center group shadow-xl hover:shadow-2xl"
                >
                  Learn More About Us
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Mining Operations"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Advanced Operations</h3>
                  <p className="text-gray-300">Cutting-edge technology meets sustainable practices</p>
                </div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-black text-yellow-400 p-6 rounded-2xl shadow-2xl border border-yellow-400"
              >
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm font-semibold">Active Sites</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-16"
          >
            Comprehensive Mining
            <span className="text-yellow-400 block"> Solutions</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Exploration & Analysis',
                description: 'Advanced geological surveys and mineral analysis using cutting-edge technology.',
                icon: '⚒️',
                image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
              {
                title: 'Extraction & Processing',
                description: 'Efficient extraction methods with state-of-the-art processing facilities.',
                icon: '🏭',
                image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
              {
                title: 'Export & Logistics',
                description: 'Seamless supply chain management and international export capabilities.',
                icon: '🚛',
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group shadow-xl hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="bg-yellow-400 text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 inline-flex items-center group shadow-xl hover:shadow-2xl"
            >
              View All Services
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight"
          >
            Ready to Partner with Tanzania's Mining Leader?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join us in shaping the future of sustainable mining in East Africa. Discover investment opportunities, 
            partnerships, and career possibilities with Tanzania's most trusted mining company.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-black text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center group shadow-2xl"
              >
                Get in Touch
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/investors"
                className="border-3 border-black text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 inline-flex items-center justify-center shadow-2xl"
              >
                Investor Information
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};