"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import portraitImage from "../portrait.jpeg";
import { Container } from "../components/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Random stuff about me", href: "/random" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-20"
        >
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                Stella Usoh
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                Product Manager
              </p>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                <p>Hi, I am Stella.</p>
                <p>I help teams turn problems into products people actually use. I do this as a product manager.</p>
                <p>For about 4 years, I have worked with startups, founders, and organizations across SaaS, Edtech, Ecommerce, and Proptech; shipping products and getting things built.</p>
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

          <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-8" />

          <nav className="space-y-3">
            {navLinks.map((link, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-dashed border-zinc-100 dark:border-zinc-800"
                >
                  <span className="underline-offset-4 group-hover:underline">
                    {link.label}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
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
