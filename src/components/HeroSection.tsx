import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Cpu, Zap, Code } from 'lucide-react';

// Beautiful animated fallback component (replacing Spline for now)
const AnimatedRobot = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="relative">
      {/* Animated Robot Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-80 h-80 mx-auto"
      >
        {/* Main Robot Body */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl backdrop-blur-sm border border-primary/40 shadow-glow-primary"
        >
          {/* Robot Head */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary/40 to-accent/40 rounded-2xl flex items-center justify-center border border-primary/50">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center"
            >
              <Cpu className="w-6 h-6 text-accent-foreground" />
            </motion.div>
          </div>
          
          {/* Robot Eyes */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-primary rounded-full"
            />
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          </div>
          
          {/* Robot Arms */}
          <motion.div
            animate={{ rotate: [0, 25, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 -left-6 w-12 h-24 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full border border-primary/40"
          />
          <motion.div
            animate={{ rotate: [0, -25, 25, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-20 -right-6 w-12 h-24 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full border border-primary/40"
          />
          
          {/* Robot Body Center */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent/40 to-primary/40 rounded-2xl flex items-center justify-center border border-accent/50">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Tech Icons */}
        {[
          { Icon: Code, delay: 0, position: { top: '10%', left: '85%' } },
          { Icon: Cpu, delay: 1, position: { top: '40%', left: '90%' } },
          { Icon: Zap, delay: 2, position: { top: '70%', left: '85%' } }
        ].map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
            }}
            className="absolute w-14 h-14 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center border border-accent/40 shadow-glow-accent"
            style={position}
          >
            <Icon className="w-7 h-7 text-accent" />
          </motion.div>
        ))}
        
        {/* Energy Rings */}
        {[1, 2, 3].map((ring, index) => (
          <motion.div
            key={ring}
            className="absolute border-2 border-primary/20 rounded-full"
            style={{
              width: `${120 + index * 40}%`,
              height: `${120 + index * 40}%`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 10 + index * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, delay: index * 0.5 }
            }}
          />
        ))}
      </motion.div>
    </div>
  </div>
);

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              We Build the{' '}
              <span className="gradient-text">Future</span> of{' '}
              <span className="gradient-text">Web & AI</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Cutting-edge technology meets innovative design. We specialize in web development, 
              AI models, and intelligent microagents that transform your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={scrollToServices} className="btn-hero">
                <span>Explore Our Services</span>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '30+', label: 'Projects Delivered' },
                { number: '15+', label: 'Happy Clients' },
                { number: '1+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden">
              <AnimatedRobot />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;