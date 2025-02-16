import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies and best practices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that users love.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Websites that work flawlessly on all devices.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lightning-fast websites optimized for speed.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />

      {/* Hero Section */}
      <motion.header
        style={{ opacity, scale }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              Crafting Digital
              <motion.span
                className="text-gradient inline-block ml-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Experiences
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Freelance web designer and developer specializing in creating
              stunning, user-friendly websites that drive results.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </div>

          {/* New Profile Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Decorative Elements */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                {/* Profile Image */}
                <img
                  src="IMG_20231110_172521_478.jpg"
                  alt="Bharath"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-teal-500/20 backdrop-blur-md"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="text-blue-400 mb-6"
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative group overflow-hidden rounded-2xl glass-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Project 1"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-3">Filmyy Platform</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Modern filmyy recomandation platform
                </p>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/bharath200578/filmyyy.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href="https://bharath200578.github.io/filmyyy/movieweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative group overflow-hidden rounded-2xl glass-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Project 2"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-3">Glow Website</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Beauty products platform
                </p>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/bharath200578/cosmotics.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href="https://bharath200578.github.io/cosmotics/cosmetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.a
              href="bharath200578@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors p-4 glass-card rounded-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://github.com/bharath200578"
              className="text-gray-400 hover:text-blue-400 transition-colors p-4 glass-card rounded-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bharath-kumar-479691297/"
              className="text-gray-400 hover:text-blue-400 transition-colors p-4 glass-card rounded-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
          <motion.div
            className="glass-card p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Looking to start a project? Send me a message and let's create
              something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-gray-800/50 py-8 glass-card mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Bharath . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
