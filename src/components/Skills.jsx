import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Globe, 
  Brain, GitBranch, Terminal,
  FileCode, Server, Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    barColor: '#2563eb',
    skills: [
      { name: 'C++', level: 75, description: 'Systems programming, OOP, competitive coding' },
      { name: 'Java', level: 70, description: 'OOP, core Java' },
      { name: 'Python', level: 80, description: 'AI/ML, automation, scripting' },
      { name: 'JavaScript', level: 75, description: 'ES6+, DOM manipulation, React ecosystem' },
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    barColor: '#16a34a',
    skills: [
      { name: 'React.js', level: 80, description: 'Hooks, components, state management' },
      { name: 'HTML5/CSS3', level: 85, description: 'Semantic HTML, Flexbox, Grid, responsive design' },
      { name: 'TailwindCSS', level: 80, description: 'Utility-first styling, custom configs' },
      { name: 'Framer Motion', level: 65, description: 'Animations, transitions, scroll effects' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    barColor: '#9333ea',
    skills: [
      { name: 'Node.js/Express', level: 70, description: 'REST APIs, basic middleware' },
      { name: 'PostgreSQL/MySQL', level: 65, description: 'Schema design, queries, joins' },
      { name: 'MongoDB', level: 65, description: 'CRUD operations, basic aggregation' },
    ],
  },
  {
    title: 'AI/ML & Data',
    icon: Brain,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    barColor: '#ea580c',
    skills: [
      { name: 'Python (ML)', level: 75, description: 'Scikit-learn, Pandas, NumPy, EDA' },
      { name: 'LLMs & RAG', level: 65, description: 'Prompt engineering, vector databases' },
      { name: 'Agentic AI', level: 65, description: 'LangChain, tool use, agent workflows' },
      { name: 'Deep Learning', level: 60, description: 'Neural networks, PyTorch basics' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
    barColor: '#dc2626',
    skills: [
      { name: 'Git/GitHub', level: 85, description: 'Branching, PRs, collaboration workflows' },
      { name: 'Docker', level: 55, description: 'Basic containerization, compose files' },
      { name: 'VS Code/IntelliJ', level: 85, description: 'Debugging, extensions, shortcuts' },
      { name: 'ESP8266 / Arduino IDE', level: 60, description: 'IoT projects, sensor and appliance control' },
    ],
  },
  {
    title: 'Architecture & Concepts',
    icon: Layers,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    barColor: '#4f46e5',
    skills: [
      { name: 'Data Structures & Algo', level: 75, description: 'Arrays, trees, graphs, DP' },
      { name: 'Object-Oriented Programming', level: 70, description: 'Classes, inheritance, design principles' },
      { name: 'DBMS', level: 65, description: 'Schema design, normalization, queries' },
      { name: 'Operating Systems', level: 60, description: 'Processes, threading, memory management' },
      { name: 'System Design (Basic)', level: 50, description: 'Scalability concepts, API design' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            Technologies I've worked with through coursework, projects, 
            and self-study. Skill levels are a rough self-assessment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
              whileHover={{ y: -6 }}
              className={`card p-6 ${category.bgColor} ${category.borderColor} h-full hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  className={`p-3 rounded-xl ${category.bgColor} ${category.borderColor} ${category.color}`}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-neutral-900">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-neutral-900">{skill.name}</span>
                      <span className="text-sm text-neutral-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                        className="relative h-full rounded-full overflow-hidden"
                        style={{ backgroundColor: category.barColor }}
                      >
                        <div className="absolute inset-0 shimmer" />
                      </motion.div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Next.js', icon: FileCode },
              { name: 'PostgreSQL', icon: Database },
              { name: 'REST APIs', icon: Globe },
              { name: 'JWT Auth', icon: Server },
              { name: 'Firebase', icon: Cloud },
              { name: 'Git', icon: GitBranch },
              { name: 'Vite', icon: FileCode },
              { name: 'TypeScript', icon: FileCode },
              { name: 'Jest/Vitest', icon: Terminal },
              { name: 'MySQL', icon: Database },
              { name: 'MongoDB', icon: Database },
              { name: 'Arduino IDE', icon: Terminal },
              { name: 'Problem Solving', icon: Brain },
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, type: 'spring' }}
                className="skill-badge group"
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon className="w-4 h-4 mr-1.5" />
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}