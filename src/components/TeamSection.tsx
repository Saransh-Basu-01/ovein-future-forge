import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail,Globe } from 'lucide-react';
import dipesh from '../photos/dipesh.jpg'
import sabi from '../photos/sabi.jpg'
import jhapa from '../photos/jhapali.jpg'
import kriman from '../photos/kriman.jpg'
import sar from '../photos/sar.jpg'

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Sabinaya Bajracharya',
      role: 'CEO & Founder',
      bio: '"Frontend developer with 1+ year of experience building responsive and user-friendly web applications."',
      image: sabi,
      socials: {
        linkedin: 'https://www.linkedin.com/in/sabinaya-bajracharya-464416357/',
        twitter: 'https://twitter.com',
        github: 'https://github.com/Bajra-sabi',
      },
    },
    {
      name: 'Prajwal Sitoula',
      role: 'CTO & Co-Founder',
      bio: 'AI and backend specialist building intelligent, scalable systems that power seamless user experiences.',
      image: jhapa,
      socials: {
        linkedin: 'https://www.linkedin.com/in/prajwal-sitoula/',
        github: 'https://github.com/CrypticLuminary',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Dipesh Suwal',
      role: 'CFO & Co-Founder',
      bio: 'Scalable systems architect ensuring robust infrastructure and seamless performance.',
      image: dipesh,
      socials: {
        linkedin: 'https://www.linkedin.com/in/dipesh-suwal-769169358/',
        github: 'https://github.com/dipeshsuwal9',
        email: 'marcus@ovein.com',
      },
    },
    {
      name: 'Kriman Basi',
      role: 'COO & Co-founder',
      bio: 'Backend engineer, architecting scalable systems and robust infrastructures to power modern applications.',
      image: kriman,
      socials: {
        linkedin: 'https://www.linkedin.com/in/kriman-basi-5278b7355/',
         github: 'https://github.com/Kreeman08',
        email: 'emily@ovein.com',
      },
    },
    {
      name: 'Saransha Basu',
      role: 'CMO & Co-founder',
      bio: 'Full-stack developer and AI/ML engineer, building intelligent, scalable applications from front-end to backend.',
      image: sar,
      socials: {
        linkedin: 'https://www.linkedin.com/in/saransh-basu-86a4152b5/',
        github: 'https://github.com/Saransh-Basu-01',
        portfolio: 'https://www.saranshabasu.com.np/',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-muted/30 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate innovators and technical experts dedicated to delivering 
            exceptional results and pushing the boundaries of technology.
          </p>
        </motion.div>

       {/* Team Grid - Single Row, 5 Members */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index} 
              inView={inView} 
            />
          ))}
        </div>
        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation. 
                Ready to shape the future of technology with us?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                <span>View Open Positions</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index, inView }: { member: any; index: number; inView: boolean }) => {
const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  email: Mail,
  portfolio: Globe,
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-card border border-border/50 rounded-3xl p-6 h-full transition-all duration-500 hover:shadow-glow-primary hover:border-primary/30 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-square overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Overlay with Bio */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
            <p className="text-sm text-foreground leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-muted-foreground mb-4">{member.role}</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            {Object.entries(member.socials).map(([platform, url]) => {
              const IconComponent = socialIcons[platform as keyof typeof socialIcons];
              return (
                <motion.a
                  key={platform}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Hover Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </motion.div>
  );
};

export default TeamSection;