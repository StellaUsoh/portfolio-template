"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitImage from "../images/portrait.jpeg";
import { Container } from "../components/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const experiences = [
  { company: "Building Bloques", role: "Product Manager", period: "Jun 2026 - Present" },
  { company: "EchoBitsTech", role: "Product Manager", period: "Sept 2025 - Apr 2026" },
  { company: "InnovatePath Consulting Limited", role: "Project Coordinator", period: "Feb 2025 - Jun 2025" },
];

const projects = [
  {
    name: "PlanetCred",
    tag: "Climate Tech 2026",
    description: "A mobile-first climate action platform for teens and young adults. Built around participation, evidence, rewards, and community.",
    impact: "60 plus early users. Live on web and mobile.",
  },
  {
    name: "Estate360",
    tag: "Proptech 2025",
    description: "A smart estate management app connecting residents, security teams, and administrators in one place.",
    impact: "Adopted across 5 estates at launch.",
  },
  {
    name: "Court Management System",
    tag: "LegalTech 2025",
    description: "A web app enabling court service requests, affidavits, court orders, and document verification for users and agents across Nigerian courts.",
    impact: "Shipped in 4 weeks.",
  },
  {
    name: "MyJournal",
    tag: "AI In progress",
    description: "An AI-powered journaling and note-taking web app I am building solo. Exploring what it means to build a personal product from the inside out.",
    impact: "Currently building.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.section initial="hidden" animate="visible" variants={fadeUp} className="mb-20">
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                Stella Usoh
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                Product Manager. Open to opportunities.
              </p>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                <p>
                  I am a Product Manager with a strong background in project management.
                  That means I understand what it takes to build a product and how to drive delivery and monitor progress.
                </p>
                <p>
                  I particularly enjoy the discovery aspect of product development,
                  asking questions, understanding the why and the who,
                  and uncovering the value we are trying to create.
                </p>
                <p>
                  I am driven by the conviction that a product is only as good as the problem
                  it solves for the person using it. The best technology in the world would not
                  mean much if it was not created to make someones life easier, better, or simpler.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a href="mailto:stellausohh@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Email
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <a href="https://linkedin.com/in/stellausoh" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  LinkedIn
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  X
                </a>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <a href="https://cal.com/stella-usoh/45-min-discovery-meeting" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 font-medium hover:text-zinc-500 transition-colors">
                  Book a call
                </a>
              </div>
            </div>
            <motion.div variants={fadeUp} custom={1} className="sm:w-32 sm:flex-shrink-0">
              <Image
                src={portraitImage}
                alt="Stella Usoh"
                width={128}
                height={128}
                className="rounded-2xl object-cover object-top shadow-md w-24 h-24 sm:w-32 sm:h-32"
              />
            </motion.div>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-20" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Now</p>
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>Building <strong className="text-zinc-800 dark:text-zinc-200">MyJournal</strong>, an AI-powered journaling and note-taking app. My first solo product, built from the inside out.</p>
            <p>Job hunting for a mid-level PM role at a company with strong product culture, somewhere I can work alongside senior PMs who take discovery seriously.</p>
            <p>Learning product analytics and SQL. Taking it seriously this time, not just reading about it.</p>
            <p>Writing about what I am building and learning. Slowly getting comfortable putting my thoughts out in public.</p>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-20" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Work</p>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{exp.company}</p>
                  <p className="text-sm text-zinc-500">{exp.role}</p>
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-600 whitespace-nowrap pt-0.5">{exp.period}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-20" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Projects</p>
          <div className="space-y-10">
            {projects.map((project, i) => (
              <div key={i}>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{project.name}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 whitespace-nowrap pt-0.5">{project.tag}</p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2">{project.description}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-600">{project.impact}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-20" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Outside of work</p>
          <div className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">Avid reader</p>
              <p>You will always find me deep in a book, particularly African fiction. I promote African literature on my social platforms and write content to encourage reading culture among young Africans.</p>
              <div className="mt-3">
                <a href="https://www.goodreads.com/user/show/188990551-whatstellaread" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                  Currently reading: Season of Crimson Blossoms by Abubakar Adam Ibrahim. See all on Goodreads
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">Writing and journaling</p>
              <p>I yap about books sometimes. Actually, all the time. I also love to scribble a lot and consider journaling an act of self-care. It is also why I am building MyJournal.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">True crime and audiobooks</p>
              <p>You will also find me hooked on a true crime documentary or deep into an audiobook between tasks.</p>
            </div>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-20" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Someday</p>
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>Be the PM people call when there is a hard problem to solve.</p>
            <p>Build a product that genuinely makes someones life easier and have the numbers to prove it.</p>
            <p>Write things that make other people feel less alone in figuring out what they are doing.</p>
            <p>Close the gap between the work I do and the story I can tell about it.</p>
          </div>
        </motion.section>

        <footer className="text-xs text-zinc-400 dark:text-zinc-600 flex justify-between items-center pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800">
          <a href="https://cal.com/stella-usoh/45-min-discovery-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            If you are building something that needs to ship, lets talk
          </a>
          <span>Stella Usoh · PM</span>
        </footer>

      </Container>
    </div>
  );
}