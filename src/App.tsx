import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactGA from 'react-ga4';
import { 
  Github as GithubIcon,
  Linkedin, 
  Mail, 
  Download, 
  Moon, 
  Sun, 
  Code, 
  Brain,
  Database,
  Server,
  Globe,
  Send,
  ExternalLink,
  Layers,
  Bot,
  ShoppingCart,
  FileCode2,
  GitBranch,
  Terminal,
  Settings,
  Phone,
  Trophy,
  Star,
  Award,
  Cloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Initialize Google Analytics
ReactGA.initialize('YOUR-GA4-ID');

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, cart functionality, and secure payments.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: ShoppingCart
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by OpenAI's GPT-3, featuring natural language processing, context awareness, and customizable responses for various business needs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Python", "React", "OpenAI", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Bot
  },
  {
    title: "Cloud Infrastructure Dashboard",
    description: "A comprehensive dashboard for monitoring and managing cloud infrastructure, with real-time metrics, cost optimization suggestions, and automated scaling capabilities.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["AWS", "React", "TypeScript", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Layers
  }
];

// Add these particle configurations at the top of the file
const PARTICLE_COUNT = 50;
const COMET_COUNT = 3;

// Update certifications array
const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2024",
    image: "/aws-cert.png",
    credentialId: "AWS-123456",
    verifyLink: "https://aws.amazon.com/verify",
    icon: Cloud,
    color: "from-orange-400 to-amber-600"
  },
  {
    title: "MongoDB Associate Developer",
    organization: "MongoDB",
    date: "2023",
    image: "/mongodb-cert.png",
    credentialId: "MDB-789012",
    verifyLink: "https://mongodb.com/verify",
    icon: Database,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Meta Frontend Developer",
    organization: "Meta",
    date: "2023",
    image: "/meta-cert.png",
    credentialId: "META-345678",
    verifyLink: "https://meta.com/verify",
    icon: Code,
    color: "from-blue-500 to-indigo-600"
  }
];

const tools = [
  { name: "Git", icon: GitBranch },
  { name: "Terminal", icon: Terminal },
  { name: "DevTools", icon: Settings },
  { name: "VS Code", icon: FileCode2 },
  { name: "Postman", icon: Send },
];

// Update the skills array with categories and colors
const skills = {
  technologies: [
    { 
      name: "React", 
      icon: Code, 
      color: "from-[#61DAFB] to-[#00B4D8]",
      category: "Frontend" 
    },
    { 
      name: "Node.js", 
      icon: Server, 
      color: "from-[#68A063] to-[#3C873A]",
      category: "Backend" 
    },
    { 
      name: "PostgreSQL", 
      icon: Database, 
      color: "from-[#336791] to-[#0064A5]",
      category: "Database" 
    },
    { 
      name: "AI/ML", 
      icon: Brain, 
      color: "from-[#FF6B6B] to-[#EE0979]",
      category: "Technologies" 
    },
    { 
      name: "Web Dev", 
      icon: Globe, 
      color: "from-[#4A90E2] to-[#2E5C9E]",
      category: "Technologies" 
    },
    { 
      name: "TypeScript", 
      icon: Code, 
      color: "from-[#3178C6] to-[#235A97]",
      category: "Frontend" 
    },
    { 
      name: "Next.js", 
      icon: Code, 
      color: "from-[#000000] to-[#333333]",
      category: "Frontend" 
    },
    { 
      name: "TailwindCSS", 
      icon: Code, 
      color: "from-[#38B2AC] to-[#2C7A7B]",
      category: "Frontend" 
    },
    { 
      name: "MongoDB", 
      icon: Database, 
      color: "from-[#4DB33D] to-[#3F8C3F]",
      category: "Database" 
    },
    { 
      name: "Docker", 
      icon: Server, 
      color: "from-[#2496ED] to-[#1D76C7]",
      category: "DevOps" 
    }
  ],
  tools: [
    { 
      name: "Git", 
      icon: GitBranch, 
      color: "from-[#F05032] to-[#BD4932]",
      category: "Version Control" 
    },
    { 
      name: "VS Code", 
      icon: FileCode2, 
      color: "from-[#007ACC] to-[#0556F3]",
      category: "Editor" 
    },
    { 
      name: "Terminal", 
      icon: Terminal, 
      color: "from-[#241F31] to-[#2E3436]",
      category: "Development" 
    },
    { 
      name: "DevTools", 
      icon: Settings, 
      color: "from-[#9B59B6] to-[#8E44AD]",
      category: "Development" 
    },
    { 
      name: "Postman", 
      icon: Send, 
      color: "from-[#FF6C37] to-[#FF8C37]",
      category: "API Testing" 
    },
    { 
      name: "Figma", 
      icon: FileCode2, 
      color: "from-[#F24E1E] to-[#FF7262]",
      category: "Design" 
    },
    { 
      name: "Docker Desktop", 
      icon: Server, 
      color: "from-[#2496ED] to-[#1D76C7]",
      category: "Development" 
    },
    { 
      name: "GitHub Desktop", 
      icon: GitBranch, 
      color: "from-[#6E40C9] to-[#552FAA]",
      category: "Version Control" 
    }
  ]
};

// Update the animation variants for smoother transitions
const skillAnimation = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

// Update the animation variants
const scrollAnimation = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Add these animation variants at the top of the file, after the imports
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Add these animation variants at the top of your file
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Add this smooth transition variant at the top
const smoothTransition = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

// Add these smooth animation variants at the top after imports
const smoothReveal = {
  hidden: { 
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.2
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

// Create a reusable section component
const Section = ({ children, id, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px"
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-32 px-6 relative ${className}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={smoothReveal}
    >
      {children}
    </motion.section>
  );
};

// Update the SkillsSection component
const SkillsSection = () => {
  return (
    <Section id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-20">
          {/* Technologies */}
          <div>
            <motion.h3 
              variants={fadeInUp}
              className="text-3xl font-semibold mb-10 text-center text-blue-400"
            >
              Technologies
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {skills.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  className="skill-card-container"
                >
                  <div className="skill-card">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${tech.color} animate-float-icon`}>
                      <tech.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white">{tech.name}</h4>
                    <span className="text-sm text-gray-400">{tech.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <motion.h3 
              variants={fadeInUp}
              className="text-3xl font-semibold mb-10 text-center text-purple-400"
            >
              Development Tools
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={fadeInUp}
                  className="skill-card-container"
                >
                  <div className="skill-card">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${tool.color} animate-float-icon`}>
                      <tool.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white">{tool.name}</h4>
                    <span className="text-sm text-gray-400">{tool.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Update the AboutSection component
const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Section id="about">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="border border-white/10 rounded-2xl bg-white/5 p-[1px] hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20">
              <div className="p-8 rounded-2xl backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack Developer & AI Enthusiast
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm Krithick T, a passionate Full Stack Developer based in Chennai, India. 
                    I transform ideas into elegant, high-performance web applications that make a real impact.
                  </p>
                  <p>
                    My expertise spans across modern web technologies, with a special focus on 
                    React, Node.js, and cloud platforms. I'm particularly passionate about creating 
                    seamless user experiences and robust backend architectures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="border border-white/10 rounded-2xl bg-white/5 p-[1px] hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20">
              <div className="p-8 rounded-2xl backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    { category: "Frontend", level: 90 },
                    { category: "Backend", level: 85 },
                    { category: "Database", level: 80 },
                    { category: "DevOps", level: 75 },
                    { category: "AI/ML", level: 70 }
                  ].map((skill) => (
                    <div key={skill.category} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.category}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Add more sample achievements and certifications
const achievements = [
  {
    title: "Best Innovation Award",
    organization: "Tech Innovation Summit 2023",
    date: "December 2023",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    image: "/path/to/award1.jpg",
    description: "Awarded for developing an AI-powered solution that improved process efficiency by 80%"
  },
  {
    title: "Hackathon Winner",
    organization: "Global Tech Hackathon",
    date: "October 2023",
    icon: Star,
    color: "from-blue-400 to-blue-600",
    image: "/path/to/award2.jpg",
    description: "First place for creating an innovative healthcare monitoring system"
  },
  {
    title: "Excellence in Leadership",
    organization: "Tech Leaders Summit",
    date: "August 2023",
    icon: Award,
    color: "from-purple-400 to-purple-600",
    image: "/path/to/award3.jpg",
    description: "Recognized for outstanding team leadership and project management"
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub Community",
    date: "July 2023",
    icon: GithubIcon,
    color: "from-gray-600 to-gray-800",
    image: "/path/to/award4.jpg",
    description: "Top 1% contributor with over 500+ meaningful contributions"
  },
  {
    title: "Innovation Champion",
    organization: "Tech Innovators Club",
    date: "June 2023",
    icon: Brain,
    color: "from-green-400 to-green-600",
    image: "/path/to/award5.jpg",
    description: "Recognized for innovative solutions in AI and ML"
  },
  {
    title: "Best Team Lead",
    organization: "Agile Community",
    date: "May 2023",
    icon: Trophy,
    color: "from-red-400 to-red-600",
    image: "/path/to/award6.jpg",
    description: "Led team to successful delivery of enterprise project"
  }
];

// Update the slider logic in both AchievementsSection and CertificationsSection
const nextSlide = () => {
  setCurrentIndex((prev) => 
    prev + 1 >= achievements.length ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) => 
    prev - 1 < 0 ? achievements.length - 1 : prev - 1
  );
};

// Add the AchievementsSection component
const AchievementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= achievements.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerView < 0 ? Math.max(0, achievements.length - itemsPerView) : prev - itemsPerView
    );
  };

  return (
    <Section id="achievements">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        <div className="relative">
          <motion.div 
            className="overflow-hidden"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                gap: '2rem'
              }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card-container min-w-[calc(33.333%-1rem)]"
                  variants={fadeInUp}
                >
                  <div className="achievement-card h-full">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-b-xl">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-4`}>
                        <achievement.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-blue-400 mb-2">{achievement.organization}</p>
                      <p className="text-gray-400 text-sm mb-4">{achievement.date}</p>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="nav-button left-4"
            aria-label="Previous achievements"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="nav-button right-4"
            aria-label="Next achievements"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

// Update the CertificationsSection component
const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= certifications.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? certifications.length - 1 : prev - 1
    );
  };

  const getCardClassName = (index: number) => {
    const normalizedIndex = (index - currentIndex + certifications.length) % certifications.length;
    return `certification-card-container ${normalizedIndex === 1 ? 'center-card' : ''}`;
  };

  return (
    <Section id="certifications">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="relative">
          <motion.div 
            className="overflow-hidden px-4"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                gap: '2rem'
              }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className={getCardClassName(index)}
                  variants={fadeInUp}
                >
                  <div className="certification-card">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} mb-4`}>
                      <cert.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-blue-400 mb-2">{cert.organization}</p>
                    <p className="text-gray-400 text-sm mb-4">Issued: {cert.date}</p>
                    <p className="text-gray-400 text-sm mb-4">ID: {cert.credentialId}</p>
                    <a 
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2"
                    >
                      Verify
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="nav-button left-4"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="nav-button right-4"
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

// Update the navigation items array
const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-100'}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-lg z-50 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
            >
              Krithick T
            </motion.a>
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              variants={staggerContainer}
            >
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={fadeInUp}
                  className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                    activeSection === item.href.slice(1) 
                      ? 'text-blue-500' 
                      : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-white flex items-center gap-2 animate-gradient"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated stars/particles */}
          {[...Array(PARTICLE_COUNT)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Enhanced comets */}
          {[...Array(COMET_COUNT)].map((_, i) => (
            <motion.div
              key={`comet-${i}`}
              className="comet"
              initial={{ 
                x: -100,
                y: -100,
                opacity: 0 
              }}
              animate={{
                x: [
                  -100,
                  window.innerWidth + 100
                ],
                y: [
                  -100,
                  window.innerHeight + 100
                ],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 2 + 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            >
              <div className="comet-head" />
              <div className="comet-tail" />
            </motion.div>
          ))}

          {/* Animated gradient orbs */}
          <motion.div 
            className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [-200, 200],
              y: [-100, 100],
              scale: [1, 1.2, 1],
              rotate: [0, 180]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Additional decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        {/* Main content with enhanced styling */}
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h1 className={`relative text-6xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Crafting Digital
                <motion.span 
                  className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Experiences
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 leading-relaxed`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Full-stack developer specializing in creating beautiful, functional, and secure web applications.
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Turning ideas into reality through elegant code.
              </span>
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href="#contact"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"
              >
                <div className="relative px-8 py-3 bg-black rounded-full transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <span className="relative flex items-center gap-2 text-white font-medium">
                    <Mail size={20} />
                    Get in Touch
                  </span>
                </div>
              </motion.a>
              <motion.a
                href="#projects"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 flex items-center gap-2 text-white font-medium hover:bg-white/20 transition-colors"
              >
                <Code size={20} />
                View Projects
              </motion.a>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-16 flex flex-wrap justify-center gap-3"
            >
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-4 py-2 rounded-full text-sm ${
                    darkMode 
                      ? 'bg-white/5 text-gray-300 border border-white/10' 
                      : 'bg-gray-100 text-gray-700'
                  } backdrop-blur-sm hover:shadow-glow transition-all duration-300`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Centered social media links with colored icons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-8 mt-12 mb-16"
            >
              {[
                { 
                  icon: GithubIcon, 
                  href: "https://github.com/yourusername",
                  color: "hover:text-[#2DBA4E]",
                  label: "GitHub"
                },
                { 
                  icon: Linkedin, 
                  href: "https://linkedin.com/in/yourusername",
                  color: "hover:text-[#0A66C2]",
                  label: "LinkedIn"
                },
                { 
                  icon: Mail, 
                  href: "mailto:your.email@example.com",
                  color: "hover:text-[#EA4335]",
                  label: "Email"
                },
                { 
                  icon: Code, 
                  href: "https://leetcode.com/yourusername",
                  color: "hover:text-[#FFA116]",
                  label: "LeetCode"
                }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 
                    transition-all duration-300 ${social.color} hover:border-white/20 hover:shadow-lg`}
                >
                  <social.icon size={24} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
              >
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <motion.div 
                    className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} opacity-0 flex items-center justify-center`}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <project.icon size={48} className="text-blue-500" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <motion.h3 
                    className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1 }}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, color: '#60A5FA' }}
                      className="flex items-center gap-2 text-sm transition-colors"
                    >
                      <GithubIcon size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, color: '#60A5FA' }}
                      className="flex items-center gap-2 text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className={`py-24 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Have a project in mind? Let's bring it to life together.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'your.email@example.com',
                  link: 'mailto:your.email@example.com',
                  color: 'from-[#EA4335] to-[#FBBC05]'
                },
                {
                  icon: Linkedin,
                  title: 'LinkedIn',
                  value: 'linkedin.com/in/yourusername',
                  link: 'https://linkedin.com/in/yourusername',
                  color: 'from-[#0A66C2] to-[#0077B5]'
                },
                {
                  icon: GithubIcon,
                  title: 'GitHub',
                  value: 'github.com/yourusername',
                  link: 'https://github.com/yourusername',
                  color: 'from-[#2DBA4E] to-[#1F6FEB]'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+1 (234) 567-8900',
                  link: 'tel:+12345678900',
                  color: 'from-[#4CAF50] to-[#45B649]'
                }
              ].map((contact) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="hover-card-apple p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.color} mb-4`}>
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-medium text-sm text-gray-400">{contact.title}</h4>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form - Keep existing form code but update styling */}
            <motion.form 
              onSubmit={handleContactSubmit}
              variants={fadeInUp}
              className="hover-card-apple p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    value={contactForm.name} 
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    required 
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    value={contactForm.email} 
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    required 
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    value={contactForm.message} 
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    required 
                  />
                </div>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`py-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>© 2025 Krithick T. Built with React & Framer Motion.</p>
      </footer>

      {/* Update the loading animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Krithick T
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
