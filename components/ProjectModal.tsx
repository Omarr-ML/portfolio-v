import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Server, Layers, Trophy, AlertTriangle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-slate-900 sticky top-0 z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400 font-mono">
                <span className="text-primary">{project.role}</span>
                <span>•</span>
                {project.tags.slice(0, 3).join(" • ")}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
            
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden mb-6 border border-slate-700/50 shadow-lg">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto object-cover max-h-[400px]"
                />
            </div>

            {/* Overview */}
            <div>
                <p className="text-lg text-slate-300 leading-relaxed">
                    {project.fullDescription}
                </p>
            </div>

            {/* Tech Stack */}
            <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                    <Server size={20} className="text-primary" />
                    Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                        <Layers size={20} className="text-secondary" />
                        Key Features
                    </h3>
                    <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                 {/* Challenges */}
                 <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                        <AlertTriangle size={20} className="text-amber-500" />
                        Challenges Solved
                    </h3>
                    <ul className="space-y-3">
                        {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Results */}
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
                 <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                    <Trophy size={20} className="text-emerald-400" />
                    Impact & Results
                </h3>
                <ul className="grid md:grid-cols-3 gap-4">
                     {project.results.map((result, idx) => (
                        <li key={idx} className="bg-slate-900 p-4 rounded border border-slate-800 text-slate-300 text-sm">
                            {result}
                        </li>
                     ))}
                </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;