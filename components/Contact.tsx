import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Intelligent</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question about my research, 
            want to discuss a potential project, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white transition-all group"
            >
                <Mail className="text-primary group-hover:scale-110 transition-transform" />
                <span>{SOCIAL_LINKS.email}</span>
            </a>
             <div className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
                <Phone className="text-primary" />
                <span>{SOCIAL_LINKS.phone}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
             </a>
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;