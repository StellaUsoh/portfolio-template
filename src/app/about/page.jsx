"use client";

import { motion } from "framer-motion";
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

const experiences = [
  { company: "Building Bloques", role: "Product Manager", period: "Jun 2026 - Present" },
  { company: "EchoBitsTech", role: "Product Manager", period: "Sept 2025 - Apr 2026" },
  { company: "InnovatePath Consulting Limited", role: "Project Coordinator", period: "Feb 2025 - Jun 2025" },
];

const skills = [
  "Agile Delivery", "Requirements Documentation", "PRD Writing",
  "Cross-functional Leadership", "Stakeholder Communication",
  "Discovery and Problem Definition", "User Onboarding and Training",
  "User Research", "User Story Writing", "Wireframing and Userflow Design",
  "Sprint Planning", "MVP Prototyping", "Software Testing",
];

const tools = [
  { category: "Product and Planning", items: "Jira, Linear, Notion, Basecamp, Google Workspace, Excel" },
  { category: "Design and Collaboration", items: "Figma, Miro, Whimsical, FigJam" },
  { category: "Research and Feedback", items: "Typeform, Google Forms, Slack" },
  { category: "AI Tools", items: "Claude, ChatGPT, Gemini" },
];

const education = [
  { year: "'28", title: "BSc. Computer Science", subtitle: "University of the People", note:  "In Progress" },
  { year: "'26", title: "Product Management Diploma", subtitle: "TS Academy · 2026" },
  { year: "'26", title: "Building Your AI Partner For Product Managers", subtitle: "ProdLoop · 2026" },
  { year: "'26", title: "AI for Product Management", subtitle: "Pendo · 2026" },
  { year: "'26", title: "McKinsey Forward Program", subtitle: "McKinsey and Company · 2026" },
  { year: "'23", title: "Google Project Management Certificate", subtitle: "Google · 2023" },
];

export default function About() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-2xl"
      >
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
          ← Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-2">
          About
        </h1>

        <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>I got into product because I love solving problems. I genuinely believe that everything in life is figure-out-able. Just like a puzzle, you have to be willing to sit with the problem long enough to find the right pieces.</p>
          <p>This belief shapes how I view and build products. I believe thoughtful solutions come from understanding people and problems deeply and bringing the pieces together to create something meaningful.</p>
          <p>I start by listening a lot: first to users, stakeholders, and the team before defining the problem. Then I begin to ask questions, conduct research and discovery. This process helps me translate what I find into clear documentation that gives everyone a shared understanding of what is being built and why.</p>
          <p>My goal in every product is the same: deliver what the business needs while making sure users can actually use it, find value in it, and keep coming back. That balance between business outcomes and real user satisfaction is what I am always working towards.</p>
          <a href="mailto:stellausohh@gmail.com" className="inline-block text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 hover:text-zinc-500 transition-colors">
  Let's work together
</a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">Work</h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">{exp.company}</p>
                  <p className="text-sm text-zinc-500">{exp.role}</p>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-600 whitespace-nowrap pt-0.5">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">Skills</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {skills.join(" · ")}
          </p>
          <div className="mt-8 space-y-4">
            {tools.map((tool, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-1">{tool.category}</p>
                <p className="text-base text-zinc-600 dark:text-zinc-400">{tool.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">Education and Certifications</h2>
          <div className="space-y-4">
            {education.map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <p className="text-sm text-zinc-400 dark:text-zinc-600 w-8 shrink-0">{item.year}</p>
                <div>
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                    {item.title} {item.note && <span className="text-xs font-normal text-zinc-400 ml-1">{item.note}</span>}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-8 pb-16">
          <ul role="list" className="flex flex-wrap items-center gap-6">
            <li><Link href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Medium</Link></li>
            <li><Link href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">X (Twitter)</Link></li>
            <li><Link href="mailto:stellausohh@gmail.com" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Email</Link></li>
            <li><Link href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">LinkedIn</Link></li>
            <li><Link href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">GitHub</Link></li>
          </ul>
        </div>

      </motion.div>
    </Container>
  );
}