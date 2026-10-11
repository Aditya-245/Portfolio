import { motion } from 'framer-motion';
import { GraduationCap, Target, Brain } from 'lucide-react';

const stats = [
  { value: '3rd Year', label: 'Computer Engineering' },
  { value: '6+', label: 'Projects Built' },
  { value: '6+', label: 'Core Technologies' },
  { value: '3+', label: 'Hackathons' },
];

const education = [
  {
    degree: 'B.Tech Computer Engineering — GPA 8',
    institution: 'Savitribai Phule Pune University',
    period: 'Aug 2024 - Present',
    description: 'Third year student covering core computer science fundamentals — data structures & algorithms, object-oriented programming, DBMS, and operating systems — alongside self-driven projects in full-stack development and AI.',
    icon: GraduationCap,
  },
  {
    degree: 'HSC (XII), MHT-CET & JEE Mains',
    institution: 'Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)',
    period: 'June 2022 - June 2024',
    description: 'Completed higher secondary education and qualified MHT-CET (PCM) and JEE Mains entrance exams.',
    icon: Target,
  },
  {
    degree: 'Self-Learning: Software Development & DSA',
    institution: 'LeetCode, Documentation & Personal Projects',
    period: '2024 - Present',
    description: 'Practicing data structures and algorithms regularly through Java and LeetCode, and building practical projects across web development, AI APIs, and IoT.',
    icon: Brain,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Computer Engineering student with a strong interest in software development,
            data structures & algorithms, and problem solving — building practical projects
            and seeking internship and entry-level software engineering opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 260, damping: 22 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.35, type: 'spring', stiffness: 300, damping: 15 }}
                className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-neutral-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Education & Learning Journey</h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative pl-12 lg:pl-16"
              >
                <div className="absolute left-0 top-0 lg:left-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 rounded-xl bg-primary-200 animate-ping opacity-40" />
                    <item.icon size={20} className="relative" />
                  </motion.div>
                  <div className="absolute left-4 lg:left-5 top-10 bottom-0 w-0.5 bg-neutral-200" />
                </div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white border border-neutral-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-neutral-900">{item.degree}</h4>
                    <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">{item.period}</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-2">{item.institution}</p>
                  <p className="text-neutral-500 text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Always Learning, Always Building</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Currently exploring advanced agentic AI systems, distributed systems, and 
            developer tooling. Open to collaborating on impactful projects.
          </p>
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Collaborate
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}