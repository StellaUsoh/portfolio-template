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

const experiences = [
  { company: "Building Bloques", role: "Product Manager", period: "Jun 2026 - Present" },
  { company: "EchoBitsTech", role: "Product Manager", period: "Sept 2025 - Apr 2026" },
  { company: "InnovatePath Consulting Limited", role: "Project Coordinator", period: "Feb 2025 - Jun 2025" },
  { company: "SwiftCare", role: "Project Owner", period: "2024 - 2026" },
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
  { category: "Research and Feedback", items: "Typeform, Google Forms, User Interviews, Slack" },
  { category: "AI Tools", items: "Claude, ChatGPT, Gemini" },
];

const education = [
  { year: "28", title: "BSc. Computer Science", subtitle: "University of the People", note: "In Progress" },
  { year: "26", title: "Product Management Diploma", subtitle: "TS Academy · 2026" },
  { year: "26", title: "Building Your AI Partner For Product Managers", subtitle: "ProdLoop · 2026" },
  { year: "26", title: "AI for Product Management", subtitle: "Pendo · 2026" },
  { year: "26", title: "McKinsey Forward Program", subtitle: "McKinsey and Company · 2026" },
  { year: "23", title: "Google Project Management Certificate", subtitle: "Google · 2023" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <a href="/" className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
            ← Home
          </a>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            About
          </h1>
        </motion.div>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Who</p>
          <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>I got into product because I love solving problems. I genuinely believe that everything in life is figure-out-able. Just like a puzzle, you have to be willing to sit with the problem long enough to find the right pieces.</p>
            <p>This belief shapes how I view and build products. I believe thoughtful solutions come from understanding people and problems deeply and bringing the pieces together to create something meaningful.</p>
            <p>I start by listening a lot: first to users, stakeholders, and the team before defining the problem. Then I begin to ask questions, conduct research and discovery. This process helps me translate what I find into clear documentation that gives everyone a shared understanding of what is being built and why.</p>
            <p>My goal in every product is the same: deliver what the business needs while making sure users can actually use it, find value in it, and keep coming back. That balance between business outcomes and real user satisfaction is what I am always working towards.</p>
            <a href="mailto:stellausohh@gmail.com" className="inline-block mt-2 text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 hover:text-zinc-500 transition-colors">
              Lets work together
            </a>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
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

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Skills</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {skills.join(" · ")}
          </p>
          <div className="mt-8 space-y-4">
            {tools.map((tool, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-1">{tool.category}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{tool.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Education and Certifications</p>
          <div className="space-y-4">
            {education.map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <p className="text-xs text-zinc-400 dark:text-zinc-600 w-6 shrink-0">{item.year}</p>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {item.title} {item.note && <span className="text-xs font-normal text-zinc-400 ml-1">{item.note}</span>}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <footer className="text-xs text-zinc-400 dark:text-zinc-600 space-y-4 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800">
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