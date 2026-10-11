import { motion } from 'framer-motion';
import { Trophy, Code2, BookOpen } from 'lucide-react';

const experiences = [
  {
    role: 'Hackathon Participant & Finalist',
    company: 'Smart India Hackathon & IITB TechFest',
    period: '2024 - Present',
    description: 'Participated in hackathons building AI, full-stack, and computer vision projects under time pressure. Worked in teams to prototype, develop, and present solutions end-to-end.',
    highlights: [
      'Built Tesseract for SIH 2026 — single-pass drone video to georeferenced 3D model, with a team of six',
      'Finalist at IITB TechFest Hackathon 2025 with team',
      'Experience with rapid prototyping, CV pipelines, and presenting to judges',
    ],
    tech: ['Python', 'Computer Vision', 'Node.js', 'Team Collaboration'],
    icon: Trophy,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    role: 'Personal & Academic Projects',
    company: 'Self-directed',
    period: '2024 - Present',
    description: 'Building projects to learn and apply skills across full-stack development, AI/ML, and browser tooling. Each project explores a new technology or concept.',
    highlights: [
      'Developed Smart Chef AI — full-stack recipe generation app with ML',
      'Built CustomX — a Chrome extension for web automation in TypeScript',
      'Created SovereignAgent — an on-premise AI workbench with RAG',
      'Working with React, Next.js, Node.js, Python, and PyTorch',
    ],
    tech: ['React', 'Next.js', 'Python', 'PyTorch', 'TypeScript', 'Docker'],
    icon: Code2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    role: 'Continuous Learner',
    company: 'Online Courses, Documentation, Open Source',
    period: '2024 - Present',
    description: 'Self-learning through documentation, courses, and open-source exploration. Following along with AI/ML research and modern web development practices.',
    highlights: [
      'Learning agentic AI systems, RAG, and LLM applications',
      'Practicing data structures and algorithms regularly',
      'Exploring open-source projects and contributing where possible',
      'Reading technical documentation and building from scratch',
    ],
    tech: ['Self-learning', 'Documentation', 'Problem Solving', 'Git'],
    icon: BookOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Activities & Learning</h2>
          <p className="section-subheading">
            Hackathons, personal projects, and continuous learning that shape 
            my skills as a computer engineering student.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute left-0 top-0 lg:left-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center ${exp.bgColor} ${exp.color}`}
                >
                  <span className={`absolute inset-0 rounded-2xl opacity-40 animate-ping ${exp.bgColor}`} />
                  <exp.icon size={24} className="relative" />
                </motion.div>
                <div className="absolute left-6 lg:left-7 top-14 bottom-0 w-0.5 bg-neutral-200" />
              </div>
              <div className="pl-14 lg:pl-24">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`card p-6 ${exp.bgColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                      <p className="text-primary-600 font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="text-sm text-neutral-500 font-medium bg-white px-3 py-1 rounded-full border border-neutral-200">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs bg-white text-neutral-600 rounded border border-neutral-200 group-hover:border-primary-300 group-hover:text-primary-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-neutral-600">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}