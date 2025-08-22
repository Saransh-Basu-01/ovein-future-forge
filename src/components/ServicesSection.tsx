import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Bot, Zap, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks and technologies. From concept to deployment, we create scalable and performant solutions.',
      features: ['React & Next.js', 'Node.js & APIs', 'Database Design', 'Cloud Deployment'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bot,
      title: 'AI Models & Solutions',
      description: 'Custom AI models tailored to your specific needs. Machine learning, natural language processing, and computer vision solutions.',
      features: ['Custom ML Models', 'NLP Integration', 'Computer Vision', 'AI Consulting'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Microagents',
      description: 'Intelligent autonomous agents that automate workflows, process data, and make decisions to enhance productivity and efficiency.',
      features: ['Workflow Automation', 'Data Processing', 'Decision Making', 'API Integration'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Wrench,
      title: 'Custom AI Tools',
      description: 'Bespoke AI-powered tools and applications designed to solve your unique business challenges and streamline operations.',
      features: ['Custom Development', 'API Integrations', 'User Interfaces', 'Maintenance & Support'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and unlock new possibilities for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-glow-primary hover:border-primary/30 hover:-translate-y-2">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.1 }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 group/btn"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive innovation forward.
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Start Your Project</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;