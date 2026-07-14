"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    image: "/projects/planetcred.png",
  },
  {
    tag: "Proptech · 2025",
    name: "Estate360",
    description: "A smart estate management platform connecting residents, managers, and security teams.",
    url: "https://estate360hub.com/",
    label: "View Website",
    image: "/projects/estate360.png",
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
    tag: "Edtech · 2025",
    name: "A Day in a Year",
    description: "An all-in-one learning platform built around community, mentorship, and habit formation.",
    url: "https://mentors.echobitsone.com/",
    label: "View Demo",
    image: "/projects/adayinayear.png",
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
    innovation: "As the product manager, I partnered with a team of 2 designers, 4 developers, a project manager, and a QA. Together we built a platform connecting education with real-world climate missions, tied together with certification which acts as both a proof of participation for individuals and a trust signal for organisations running missions.",
    impact: "60+ early users with an active beta cohort. A free, community-driven platform deliberately built for participation at scale, not solely monetisation.",
    tags: ["Climate and Sustainability", "Teens", "Young Adults", "Community-focused"],
  },
  {
    number: "02",
    tag: "Estate360 Community · PropTech",
    title: "Simplifying estate living and visitors management into one connected ecosystem",
    problem: "Estate management and residents often rely on several systems and manual processes. Residents struggle with communication and security coordination, managers lack visibility across operations, visitors face long wait hours and frustration from inaccessibility. There was no unified ecosystem designed to serve every stakeholder across the property lifecycle.",
    innovation: "Estate360 Hub was designed as a central platform housing four specialized products: Estate360 Community for estate engagement and security, Estate360 Homes for property discovery and rental management, Estate360 Organisation for operational oversight and financial control, and Estate360 Developer for project and sales management. Together, they create a connected digital ecosystem while allowing each stakeholder to access tools built specifically for their needs.",
    impact: "Established a scalable PropTech ecosystem capable of supporting residents, estate administrators, facility managers, landlords, agents, developers, and corporate estates. We currently have one of the four products which is the Estate360 community live on both web and mobile with about 5 estates onboarded.",
    tags: ["PropTech", "Estate Management", "Community Platforms", "Property Marketplace", "Real Estate Development", "B2B2C"],
  },
  {
    number: "03",
    tag: "InnovatePath Consulting Learning Platform · Edtech",
    title: "Giving 500+ students a structured way to learn across different timezones",
    problem: "During the 8-week no-code tech bootcamp where I was one of the project coordinators, we discovered that students who could not make it to their live classes were missing out on their learning experience because there was no replay option. Students were paying to learn and missing content through no fault of their own.",
    innovation: "We spoke directly with affected students, set aside a project team, drafted documentation, and put resources together to build a dedicated LMS solving four problems at once: structured content delivery, async access, IP protection to prevent our content from being distributed, and engagement tracking.",
    impact: "500+ students gained structured, async learning across timezones. What started as a complaint became a product that made learning more accessible.",
    tags: ["Edtech", "Learning Bootcamp", "500+ students"],
  },
];

export default function Projects() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-5xl"
      >
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
          ← Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-2">
          Projects
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-12">
          Products I have worked on and problems I have helped solve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] rounded-2xl"
            >
              <div className="rounded-2xl bg-black overflow-hidden">
                <div className="relative w-full h-48 bg-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-zinc-500 mb-1">{project.tag}</p>
                  <h2 className="text-base font-semibold text-zinc-100 mb-2">{project.name}</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 underline underline-offset-4 hover:decoration-[#88051E] transition-all">
                    {project.label} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-1">
            Key Innovations
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mb-16">
            Problems I Solved
          </p>

          <div className="space-y-24">
            {innovations.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex gap-8">
                  <p className="text-6xl font-bold text-zinc-200 dark:text-zinc-800 shrink-0">{item.number}</p>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500 mb-2">{item.tag}</p>
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">{item.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">The Problem</p>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">The Innovation</p>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.innovation}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">The Impact</p>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.impact}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-8 pb-16">
          <ul role="list" className="flex flex-wrap items-center gap-6">
            <li><a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Medium</a></li>
            <li><a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">X (Twitter)</a></li>
            <li><a href="mailto:stellausohh@gmail.com" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Email</a></li>
            <li><a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">GitHub</a></li>
          </ul>
        </div>

      </motion.div>
    </Container>
  );
}