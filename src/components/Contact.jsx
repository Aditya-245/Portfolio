import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { useState } from 'react';

const contactInfo = [
  {
    label: 'Email',
    value: 'adityashiralkar9@gmail.com',
    href: 'mailto:adityashiralkar9@gmail.com',
    icon: Mail,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Phone',
    value: '+91 8010556902',
    href: 'tel:+918010556902',
    icon: Phone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    label: 'GitHub',
    value: 'github.com/adityashiralkar',
    href: 'https://github.com/adityashiralkar',
    icon: GithubIcon,
    color: 'text-neutral-600',
    bgColor: 'bg-neutral-50',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adityashiralkar',
    href: 'https://linkedin.com/in/adityashiralkar',
    icon: LinkedinIcon,
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Twitter',
    value: '@adityashiralkar',
    href: 'https://twitter.com/adityashiralkar',
    icon: TwitterIcon,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
  },
  {
    label: 'Location',
    value: 'Baramati, Pune, Maharashtra',
    href: null,
    icon: MapPin,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    await new Promise((resolve) => setTimeout(resolve, 600));

    const subject = encodeURIComponent(
      formData.subject ? `Portfolio contact: ${formData.subject} — ${formData.name}` : `Portfolio contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=adityashiralkar9@gmail.com&su=${subject}&body=${body}`;

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Let's Start a Conversation</h3>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just chatting about technology. Whether it's an internship, a 
              collaboration, or a technical question — feel free to reach out.
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href ? '_blank' : undefined}
                  rel={item.href ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}
                  >
                    <item.icon size={20} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500">{item.label}</p>
                    <p className="text-neutral-900 font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="p-3 rounded-xl bg-primary-50 text-primary-600"
              >
                <MessageSquare size={20} />
              </motion.div>
              <div>
                <p className="text-sm text-neutral-500">Typically replies within</p>
                <p className="text-lg font-semibold text-neutral-900">24 hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send a Message</h3>
            
            <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 14 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Gmail compose opened</h4>
                <p className="text-neutral-600">A draft addressed to me is ready in Gmail — just hit send. Thanks for reaching out!</p>
                <motion.button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="technical">Technical Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, opportunity, or question..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}