import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50" />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-100/60 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-50 rounded-full blur-3xl"
      />
      
      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Open to Internship Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
            >
              Hi, I'm <span className="text-animated-gradient">Aditya Shiralkar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-neutral-600 mb-8 font-medium"
            >
              Third Year Computer Engineering Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-neutral-500 mb-10 max-w-xl"
            >
              Working with AI/ML, full-stack web development, and agentic coding. 
              Third year computer engineering student looking for internship opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Aditya Shiralkar - Resume.pdf"
                className="btn-secondary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 mt-10"
            >
              <motion.a
                href="https://github.com/adityashiralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-primary-50"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <GithubIcon size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/adityashiralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-primary-50"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <LinkedinIcon size={20} />
              </motion.a>
              <motion.a
                href="mailto:adityashiralkar9@gmail.com"
                className="text-neutral-400 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-primary-50"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-primary-50 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-neutral-100 p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="p-6 bg-neutral-50 rounded-2xl"
                    whileHover={{ y: -4 }}
                  >
                    <Code className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                    <h3 className="text-3xl font-bold text-neutral-900">Full Stack</h3>
                    <p className="text-sm text-neutral-500 mt-1">Development</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="p-6 bg-neutral-50 rounded-2xl"
                    whileHover={{ y: -4 }}
                  >
                    <Brain className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                    <h3 className="text-3xl font-bold text-neutral-900">AI/ML &</h3>
                    <p className="text-sm text-neutral-500 mt-1">Agentic Coding</p>
                  </motion.div>
                </div>
              </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}