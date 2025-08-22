import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cpu, Zap } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent systems that learn and adapt to your business needs',
    },
    {
      icon: Cpu,
      title: 'Microagents',
      description: 'Autonomous agents that streamline workflows and boost productivity',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Forward-thinking approaches to solve complex challenges',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pioneering the <span className="gradient-text">Digital Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Ovein, we're not just building applications—we're crafting the foundation of tomorrow's 
            digital landscape. Our expertise spans across web development, artificial intelligence, 
            and autonomous microagents, delivering solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-glow-primary hover:border-primary/30">
                <div className="relative">
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We believe technology should be intuitive, powerful, and accessible. Our mission is to 
                bridge the gap between complex technological capabilities and real-world applications, 
                creating solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;