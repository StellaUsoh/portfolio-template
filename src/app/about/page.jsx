"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "../../components/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" },
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
  { year: "'28", title: "BSc. Computer Science", subtitle: "University of the People", note: "In Progress" },
  { year: "'26", title: "Product Management Diploma", subtitle: "TS Academy · 2026" },
  { year: "'26", title: "Building Your AI Product Partner For Product Managers", subtitle: "ProdLoop · 2026" },
  { year: "'26", title: "Product Analytics: From Metrics to Business Impact", subtitle: "GreatLearning · 2026" },
  { year: "'26", title: "McKinsey Forward Program", subtitle: "McKinsey and Company · 2026" },
  { year: "'23", title: "Google Project Management Certificate", subtitle: "Google · 2023" },
];

export default function About() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors mb-8 block">
          Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-8">
          About
        </h1>

        <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-16">
          <p>I got into product because I have a deep curiosity for learning and solving problems. I genuinely believe that everything in life is figure-out-able, a phrase I adopted from the book Everything is Figureoutable by Marie Forleo. Just like a puzzle, which happens to be one of my favourite games, you have to be willing to sit with the problem long enough to find the right pieces.</p>
          <p>This belief shapes how I view and build products. I believe thoughtful solutions come from understanding people and problems deeply and bringing the pieces together to create something meaningful.</p>
          <p>I start by listening a lot: first to users, stakeholders, and the team before defining the problem. Then I begin to ask questions and go deep into discovery. This process helps me translate what I find into clear documentation that gives everyone a shared understanding of what is being built and why.</p>
          <p>My goal in every product is the same: deliver what the business needs while making sure users can actually use it, find value in it, and keep coming back. That balance between business outcomes and real user satisfaction is what I am always working towards.</p>
        </div>

        <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Why Product?</h2>
          <p>I started out in software project management, a role that involved managing the development of software products and the teams building them. Somewhere along the way, I realised I was far more interested in the product itself; how it works, and the problem it solves for people. It was only a matter of time before I started building products of my own.</p>
          <p>So, why product? The answer is pretty obvious. The real question is: why not? As a kid I was fascinated by computers and that curiosity led me to sign up for computer science as my major in high school for three years. As a teenager, I wrote my first line of code and it was exciting. I always knew I wanted to do cool stuff on my computer, I just didn't know how. I realized early on in my learning journey that I didn't have the patience to write the codes(although I did build this website myself with a little help from Claude).</p>
          <p>So I dabbled in Business, Content writing, Social Media Marketing, Operations, Project Management, and eventually Product.</p>
          <p>What excites me most about product is the thinking behind it: understanding problems, making business decisions, talking to users, and building solutions from idea to launch. It can be challenging, but it is the kind of challenge I genuinely enjoy.</p>
          <p>One of my most recent projects is <a href="https://planetcred.echobitsone.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] transition-all">PlanetCred</a>, a climate action platform for teens and young adults. The design challenge was real especially because of our target audience. And, we were building something valuable in a world of short attention spans and brain-rotting content. We did not want to be just another abandoned app. So we took inspiration from Duolingo's interactive learning UI and mobile video games reward systems to create something animated and engaging enough to hold a teenager's attention while still being impactful. Watching this idea go from a conversation to something 60+ people were onboarded on reminded me exactly why I do this. You can see more of what I have done on my projects page <a href="/projects" className="underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] transition-all">projects page</a>.</p>
        </div>

        <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">The Full Person</h2>
          <p>I consider myself a minimalist. If I was not doing product, I would be running a cafe and bookshop. I like to keep things simple, both in work and in life. I like peace and quiet. I like coffee. I consider family and friends my safe space. I write a lot. I like reading too, I talked about most of this on my <a href="/notes" className="underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] transition-all">notes page</a>. I am an introvert but I mostly never get bored because there is always so much to be done with so little time. I work better in environments that create room for creativity whether or not we are facing pressure.</p>
        </div>

        <a href="https://mail.google.com/mail/?view=cm&to=stellausohh@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors mb-16">
          Let's work together
        </a>

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

        <div className="mt-16 mb-8">
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
            <li><a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">Medium</a></li>
            <li><a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">X (Twitter)</a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&to=stellausohh@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">Email</a></li>
            <li><a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">GitHub</a></li>
          </ul>
        </div>

      </motion.div>
    </Container>
  );
}
