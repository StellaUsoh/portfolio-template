"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const projects = [
  {
    tag: "Climate Tech · 2026",
    name: "PlanetCred",
    description: "A mobile-first climate action platform built for teens and young adults.",
    url: "https://planetcred.echobitsone.com/",
    label: "View Website",
  },
  {
    tag: "Proptech · 2024",
    name: "Estate360",
    description: "A smart estate management platform connecting residents, managers, and security teams.",
    url: "https://estate360hub.com/",
    label: "View Website",
  },
  {
    tag: "Edtech · 2025",
    name: "Bootcamp Learning Platform",
    description: "An async-friendly LMS built for InnovatePath no-code tech bootcamp.",
    url: "https://innovatepathconsulting.co.uk/",
    label: "Internal Platform",
  },
  {
    tag: "Edtech · 2025",
    name: "A Day in a Year",
    description: "An all-in-one learning platform built around community, mentorship, and habit formation.",
    url: "https://mentors.echobitsone.com/",
    label: "View Demo",
  },
  {
    tag: "LegalTech · 2025",
    name: "Court Management System",
    description: "A web-based platform that digitised court service requests, case management, and document verification.",
    url: "https://court.echobitsone.com/landing",
    label: "View Demo",
  },
  {
    tag: "E-commerce · 2024",
    name: "EasyPowerHub",
    description: "An E-Commerce platform dedicated to making sustainable energy and advanced technology accessible to all.",
    url: "https://easypowerhub.com/home",
    label: "View Website",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <a href="/" className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
            ← Home
          </a>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            Projects
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Products I have worked on and problems I have helped solve.
          </p>
        </motion.div>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group"
            >
              <p className="text-xs text-zinc-400 dark:text-zinc-600 mb-1">{project.tag}</p>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                {project.name}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
             <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-zinc-700 dark:text-zinc-300 underline underline-offset-4 hover:text-zinc-500 transition-colors">
                {project.label} →
              </a>="border-dashed border-zinc-200 dark:border-zinc-800 mt-12"
              )
            </motion.div>
          ))}
        </div>

        <footer className="text-xs text-zinc-400 dark:text-zinc-600 space-y-4 pt-8 mt-16 border-t border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-3">
            <a href="https://whatstellaread.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Medium</a>
            <span>·</span>
            <a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">X (Twitter)</a>
            <span>·</span>
            <a href="mailto:stellausohh@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Email</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">GitHub</a>
          </div>
          <div className="flex justify-between items-center">
            <a href="https://cal.com/stella-usoh/45-min-discovery-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              If you are building something that needs to ship, lets talk
            </a>
            <span>Stella Usoh · PM</span>
          </div>
        </footer>

      </Container>
    </div>
  );
}