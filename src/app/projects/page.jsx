"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";

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
    image: "/projects/planetcred.png",
  },
  {
    tag: "Proptech · 2024",
    name: "Estate360",
    description: "A smart estate management platform connecting residents, managers, and security teams.",
    url: "https://estate360hub.com/",
    label: "View Website",
    image: "/projects/estate360.png",
  },
  {
    tag: "Edtech · 2025",
    name: "Bootcamp Learning Platform",
    description: "An async-friendly LMS built for InnovatePath no-code tech bootcamp.",
    url: "https://innovatepathconsulting.co.uk/",
    label: "Internal Platform",
    image: "/projects/bootcamp.png",
  },
  {
    tag: "Edtech · 2025",
    name: "A Day in a Year",
    description: "An all-in-one learning platform built around community, mentorship, and habit formation.",
    url: "https://mentors.echobitsone.com/",
    label: "View Demo",
    image: "/projects/adayinayear.png",
  },
  {
    tag: "LegalTech · 2025",
    name: "Court Management System",
    description: "A web-based platform that digitised court service requests, case management, and document verification.",
    url: "https://court.echobitsone.com/landing",
    label: "View Demo",
    image: "/projects/courtms.png",
  },
  {
    tag: "E-commerce · 2024",
    name: "EasyPowerHub",
    description: "An E-Commerce platform dedicated to making sustainable energy and advanced technology accessible to all.",
    url: "https://easypowerhub.com/home",
    label: "View Website",
    image: "/projects/easypowerhub.png",
  },
];

const innovations = [
  {
    number: "01",
    tag: "PlanetCred · Climate Tech",
    title: "Turning climate awareness into consistent real-world action",
    problem: "Climate platforms either teach or organise activities, rarely both. None was designed in a way that keeps young people engaged long enough to build a habit. For teens especially, there was nothing that made climate participation feel structured, rewarding, and worth coming back to.",
    innovation: "Built a free platform connecting education with real-world missions, tied together with certification which acts as both a proof of participation for individuals and a trust signal for organisations running missions.",
    impact: "60+ early users with an active beta cohort. A free, community-driven platform deliberately built for participation at scale, not solely monetisation.",
    tags: ["Climate and Sustainability", "Teens", "Young Adults", "Community-focused"],
    url: "https://planetcred.echobitsone.com/",
  },
  {
    number: "02",
    tag: "Estate360 Community · PropTech",
    title: "Simplifying fragmented estate living and property management into one connected ecosystem",
    problem: "Estate stakeholders often rely on disconnected systems and manual processes. Residents struggle with communication and security coordination, managers lack visibility across operations, home seekers face unreliable listings, and developers manage projects and sales through scattered tools. There was no unified ecosystem designed to serve every stakeholder across the property lifecycle.",
    innovation: "Estate360 Hub was designed as a central platform housing four specialized products: Estate360 Community for estate engagement and security, Estate360 Homes for property discovery and rental management, Estate360 Organisation for operational oversight and financial control, and Estate360 Developer for project and sales management. Together, they create a connected digital ecosystem while allowing each stakeholder to access tools built specifically for their needs.",
    impact: "Established a scalable PropTech ecosystem capable of supporting residents, estate administrators, facility managers, landlords, agents, developers, and corporate estates. The modular structure enables future expansion while creating a foundation for smarter communities, streamlined operations, and improved property experiences.",
    tags: ["PropTech", "Estate Management", "Community Platforms", "Property Marketplace", "Real Estate Development", "B2B2C"],
    url: "https://estate360hub.com/",
  },
  {
    number: "03",
    tag: "InnovatePath Learning Platform · Edtech",
    title: "Giving 500+ students a structured way to learn across different timezones",
    problem: "Students who could not make it to their live classes, or had complications when joining due to different factors were missing out on their learning experience because there was no replay option for them such as class recordings. Students were paying to learn and missing content through no fault of their own.",
    innovation: "We built a dedicated LMS solving four problems at once: structured content delivery, async access, IP protection, and engagement tracking.",
    impact: "500+ students gained structured, async learning across timezones. What started as a complaint became a product that made learning more accessible.",
    tags: ["Edtech", "Learning Bootcamp", "500+ students"],
    url: "https://innovatepathconsulting.co.uk/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="max-w-5xl mx-auto px-8 py-16">

        <div className="flex justify-end mb-12">
          <ThemeToggle />
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <a href="/" className="text-base text-zinc-400 hover:text-zinc-100 transition-colors mb-8 block">
            ← Home
          </a>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            Projects
          </h1>
          <p className="text-lg text-zinc-400">
            Products I have worked on and problems I have helped solve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl bg-zinc-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black"
            >
              <div className="relative w-full h-48 bg-zinc-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain object-top bg-zinc-800"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-zinc-500 mb-1">{project.tag}</p>
                <h2 className="text-base font-semibold text-zinc-100 mb-2">{project.name}</h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 underline underline-offset-4 hover:text-zinc-100 transition-colors">
                  {project.label} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 mb-2">
            Key Innovations
          </h2>
          <p className="text-lg text-zinc-400 mb-16">
            Problems I Solved
          </p>

          <div className="space-y-24">
            {innovations.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex gap-8">
                  <p className="text-6xl font-bold text-zinc-800 shrink-0">{item.number}</p>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500 mb-2">{item.tag}</p>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-8">{item.title}</h3>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">The Problem</p>
                        <p className="text-base text-zinc-400 leading-relaxed">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">The Innovation</p>
                        <p className="text-base text-zinc-400 leading-relaxed">{item.innovation}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">The Impact</p>
                        <p className="text-base text-zinc-400 leading-relaxed">{item.impact}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="text-xs text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-sm font-medium text-zinc-300 underline underline-offset-4 hover:text-zinc-100 transition-colors">
                      Visit Website →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <footer className="text-sm text-zinc-600 space-y-4 mt-20">
          <div className="flex flex-wrap gap-4">
            <a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">Medium</a>
            <a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">X (Twitter)</a>
            <a href="mailto:stellausohh@gmail.com" className="hover:text-zinc-300 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <a href="https://cal.com/stella-usoh/45-min-discovery-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              If you are building something that needs to ship, lets talk
            </a>
            <span>Stella Usoh — Product Manager · Open to opportunities</span>
          </div>
        </footer>

      </div>
    </div>
  );
}