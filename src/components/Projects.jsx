import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Brain, Zap, Cpu, Globe, Drone, ChevronDown, Star
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const projects = [
  {
    id: 1,
    name: 'SovereignAgent (SwarajAI)',
    tagline: 'On-Premise AI Workbench with RAG and Local Models',
    description: 'An AI workbench built for environments where data cannot leave the premises. Runs local open-weight models via Ollama, with document ingestion, retrieval-augmented generation, authentication, and audit logging.',
    longDescription: `An industrial AI workbench that runs entirely on-premise. The system uses Ollama to serve local open-weight LLMs, implements retrieval-augmented generation (RAG) over uploaded documents (SOPs, inspection reports, technical docs), and includes authentication with role-based permissions. Other modules include an audit log, egress monitoring to detect outbound requests, a model router for switching between models, and sandboxed tool execution for agents. Ships with Docker Compose and an Electron desktop wrapper.`,
    tech: ['Node.js', 'Next.js', 'Electron', 'Docker', 'PostgreSQL', 'Ollama', 'RAG'],
    category: 'AI/ML & Systems',
    highlights: [
      'RAG pipeline over local documents using vector search',
      'Model routing across multiple open-weight LLMs via Ollama',
      'Authentication with role-based permissions and audit logging',
      'Egress monitoring to detect outbound network requests',
      'Sandboxed tool execution for agent workflows',
      'Docker Compose deployment with Electron desktop wrapper',
    ],
    github: 'https://github.com',
    demo: null,
    featured: true,
    icon: Brain,
    image: '/projects/sovereign-ai.jpg',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    id: 2,
    name: 'Smart Chef AI',
    tagline: 'AI-Powered Recipe Suggestions Based on Your Ingredients',
    description: 'A full-stack web app that suggests recipes based on the ingredients you have. Built with React, TypeScript, and an Express backend with a trained recipe-matching model.',
    longDescription: `A full-stack recipe application with a React/TypeScript frontend (Vite, TailwindCSS, shadcn/ui) and an Express backend. The backend includes a training script that builds a recipe-matching model from CSV data, used to suggest recipes based on input ingredients. Features include recipe browsing, a cooking mode with step-by-step instructions, a chat interface, a camera/scan page, user profiles, and social features like feeds and achievements.`,
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Express.js', 'Node.js'],
    category: 'Full Stack',
    highlights: [
      'Recipe-matching model trained from CSV data on the backend',
      'Ingredient-based recipe suggestions with filtering',
      'Interactive cooking mode with step-by-step instructions',
      'Chat interface and camera-based scan page',
      'Social feed, user profiles, and achievements',
      'Built with shadcn/ui components and TailwindCSS',
    ],
    github: 'https://github.com',
    demo: null,
    featured: true,
    icon: Cpu,
    image: '/projects/smart-chef.jpg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    name: 'CustomX',
    tagline: 'Chrome Extension for Web Automation and Session Recording',
    description: 'A Chrome extension built with TypeScript and Vite that records and replays browser sessions, manages authentication state, and applies custom rules to web pages.',
    longDescription: `A Chrome extension (Manifest V3) with a content script architecture covering page recording, replay, and rule-based automation. Modules include a DOM recorder and replayer, a selector engine for targeting elements, an authentication gate for handling login flows, a shortcuts layer, and a popup UI. Built with TypeScript and Vite with a test suite using Vitest and jsdom.`,
    tech: ['TypeScript', 'Vite', 'Chrome Extensions API', 'Manifest V3', 'Vitest'],
    category: 'Browser Extension',
    highlights: [
      'Manifest V3 with service worker background script',
      'DOM session recording and replay with timing preservation',
      'Custom selector engine for element targeting',
      'Authentication gate for managing login state',
      'Rule-based page automation system',
      'Tested with Vitest and jsdom',
    ],
    github: 'https://github.com',
    demo: null,
    featured: true,
    icon: Zap,
    image: '/projects/customx.jpg',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    name: 'Sciptify',
    tagline: 'Next.js 16 Web Application with shadcn/ui',
    description: 'A web application built with Next.js 16, React 19, TailwindCSS v4, and shadcn/ui. Uses the App Router with server components and modern React patterns.',
    longDescription: `A Next.js application using the App Router with React 19 and TailwindCSS v4. Styled with shadcn/ui components and includes sonner for notifications, next-themes for theming, and the React Compiler (babel-plugin-react-compiler) for automatic optimization. Uses ESLint with eslint-config-next for code quality.`,
    tech: ['Next.js 16', 'React 19', 'TailwindCSS v4', 'shadcn/ui', 'TypeScript', 'ESLint'],
    category: 'Modern Web',
    highlights: [
      'Next.js 16 App Router with server components',
      'React 19 with React Compiler for automatic optimization',
      'TailwindCSS v4 with shadcn/ui component library',
      'Dark mode support via next-themes',
      'Toast notifications with sonner',
      'Linted with ESLint and eslint-config-next',
    ],
    github: 'https://github.com',
    demo: null,
    featured: false,
    icon: Globe,
    image: '/projects/sciptify.jpg',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 5,
    name: 'Tesseract — Single-Pass 3D Model (SIH 2026)',
    tagline: 'One drone video pass + GPS → georeferenced, textured 3D model in under 15 minutes',
    description: 'A team Smart India Hackathon 2026 project for problem statement SIH26158 (NTRO). It converts a single-pass monocular drone video and its GPS log into a metrically accurate, textured 3D model on the map — poses from MapAnything, triangulation with COLMAP, meshing with OpenMVS, GPS fit in local ENU.',
    longDescription: `Tesseract turns one drone flight-pass video (plus the drone's SRT telemetry) into a georeferenced, textured 3D model within a 15-minute budget on a single laptop GPU. The pipeline screens each clip for admissibility, decodes frames and telemetry, fits camera poses (MapAnything focal length with COLMAP's global mapper), densifies/meshes/textures with OpenMVS, then georeferences with a gravity-constrained 5-DOF (yaw + translation + scale) fit in local ENU. A depth prior is off by default for flatter roofs and walls. Every run writes a manifest, and every requirement target gets an honest met / not met / not-measurable verdict. An upload path runs the pipeline as GCP Cloud Run jobs; a three.js workspace lets you view the model and measure distances, heights and areas. Built with a team of six for SIH 2026.`,
    tech: ['Python', 'MapAnything', 'COLMAP', 'OpenMVS', 'OpenCV', 'PyAV', 'three.js', 'GCP Cloud Run'],
    category: 'Computer Vision / SIH 2026',
    highlights: [
      'Pipeline from video screen → ingest → poses → dense mesh → texture → georeference → export, with run manifests and three-valued target verdicts',
      '24.6 dB PSNR (SSIM 0.71) on held-out frames vs 20.9 dB MapAnything and 18.7 dB COLMAP + OpenMVS alone',
      'Synthetic 10-min flight: 548 s end-to-end (under the 900 s budget), 0.344 m median error, 98.5% of points within 1 m',
      'Gravity-constrained 5-DOF GPS fit in local ENU cuts degenerate straight-pass scene error from 311 m to 0.041 m',
      'Exports OBJ, PLY, LAS, GeoTIFF, GLB and FBX, each verified by read-back',
      'three.js web workspace with distance, height and area measurement on the georeferenced surface',
    ],
    github: 'https://github.com/kartikshirode/sih26158-single-pass-3d',
    demo: 'https://tesseract-sih26158.vercel.app',
    featured: true,
    icon: Drone,
    image: '/projects/tesseract.jpg',
    gradient: 'from-slate-600 to-slate-900',
  },
];

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl border border-neutral-100 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-500`} />
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index % 3) * 0.12, type: 'spring' }}
            className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-amber-500 text-xs font-semibold shadow"
          >
            <Star size={12} className="fill-current" />
            Featured
          </motion.div>
        )}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${project.gradient} text-white shadow`}>
          {project.category}
        </div>
        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${project.gradient} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
          <project.icon size={22} />
        </div>
      </div>

      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors mb-2">
          {project.name}
        </h3>
        <p className="text-primary-600 font-medium mb-4">{project.tagline}</p>
        <p className="text-neutral-600 leading-relaxed mb-5">{project.description}</p>

        <motion.button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="self-start inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium mb-5 cursor-pointer pb-1 border-b border-primary-200 hover:border-primary-400 transition-colors"
          whileTap={{ scale: 0.98 }}
        >
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="inline-flex">
            <ChevronDown size={16} />
          </motion.span>
          {open ? 'Hide Technical Details' : 'Technical Details'}
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mb-5 p-4 bg-primary-50/50 rounded-xl border border-primary-100 text-sm text-neutral-600 leading-relaxed">
                {project.longDescription}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, hIndex) => (
            <motion.li
              key={hIndex}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + hIndex * 0.05 }}
              className="flex items-start gap-2 text-sm text-neutral-600"
            >
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {highlight}
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs bg-neutral-50 text-neutral-600 rounded border border-neutral-200 group-hover:border-primary-200 group-hover:text-primary-700 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-5 border-t border-neutral-100">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <GithubIcon size={16} />
                Code
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Selected projects spanning AI/ML, full-stack web development, 
            browser extensions, computer vision, and hackathon builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: projects.length * 0.1 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 mb-4">Want to see more projects and contributions?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            whileHover={{ x: 4 }}
          >
            View GitHub Profile
            <GithubIcon size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}