import { motion } from 'framer-motion';
import { Mail, Code, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">A<span className="text-primary-400">S</span></span>
            </div>
            <p className="text-neutral-400 max-w-md mb-6 leading-relaxed">
              Computer Engineering student passionate about AI/ML, full-stack development, 
              and building impactful technology solutions. Open to internships and collaborations.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/adityashiralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600/20 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <GithubIcon size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/adityashiralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600/20 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <LinkedinIcon size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/adityashiralkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600/20 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TwitterIcon size={20} />
              </motion.a>
              <motion.a
                href="mailto:adityashiralkar9@gmail.com"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600/20 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-neutral-400 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Python', 'C++', 'Java', 'Node.js', 'AI/ML', 'Docker', 'AWS', 'PostgreSQL'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700 hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neutral-500 text-sm"
            >
              © {currentYear} Aditya Shiralkar. All rights reserved.
            </motion.p>

          </div>
        </div>
      </div>
    </footer>
  );
}