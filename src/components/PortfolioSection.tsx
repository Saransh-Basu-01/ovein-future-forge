import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'Next-generation e-commerce solution with AI-driven product recommendations, intelligent search, and automated customer support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      category: 'Web Development',
      links: {
        live: 'https://demo.ovein.com',
        github: 'https://github.com/ovein'
      }
    },
    {
      title: 'Smart Document Analyzer',
      description: 'ML-powered document processing system that extracts, categorizes, and analyzes content from various file formats with 95% accuracy.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'OpenCV', 'NLP', 'FastAPI'],
      category: 'AI Solutions',
      links: {
        live: 'https://docs-analyzer.ovein.com',
        github: 'https://github.com/ovein'
      }
    },
    {
      title: 'Automated Trading Bot',
      description: 'Intelligent microagent for cryptocurrency trading with real-time market analysis, risk management, and automated decision making.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tags: ['Python', 'Machine Learning', 'WebSocket', 'PostgreSQL'],
      category: 'Microagents',
      links: {
        live: 'https://trading-bot.ovein.com'
      }
    },
    {
      title: 'Healthcare Data Visualization',
      description: 'Interactive dashboard for healthcare providers featuring real-time patient monitoring, predictive analytics, and intuitive data visualization.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'Redis'],
      category: 'Custom Tools',
      links: {
        live: 'https://health-dash.ovein.com'
      }
    },
    {
      title: 'Social Media Sentiment Monitor',
      description: 'Real-time sentiment analysis tool that monitors social media platforms and provides actionable insights for brand management.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'NLP', 'Elasticsearch', 'Docker'],
      category: 'AI Solutions',
      links: {
        live: 'https://sentiment.ovein.com',
        github: 'https://github.com/ovein'
      }
    },
    {
      title: 'Enterprise Workflow Automation',
      description: 'Comprehensive automation platform that streamlines business processes, reduces manual work, and increases operational efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'GraphQL', 'Microservices', 'AWS'],
      category: 'Microagents',
      links: {
        live: 'https://workflow.ovein.com'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative projects that showcase cutting-edge technology 
            solutions and demonstrate our expertise across various domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl overflow-hidden h-full transition-all duration-500 hover:shadow-glow-primary hover:border-primary/30 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-muted hover:bg-muted/80 text-foreground rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
          <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear about your ideas and discuss how we can bring them to life 
            with our expertise and innovative approach.
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

export default PortfolioSection;