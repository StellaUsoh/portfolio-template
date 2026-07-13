"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import portraitImage from "../portrait.jpeg";
import { Container } from "../components/Container";
import ThemeToggle from "../components/ThemeToggle";

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
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-3xl">

        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
                Stella Usoh
              </h1>
              <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-6">
                Product Manager.
              </p>
              <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>Hi, I am Stella.</p>
                <p>
                  I help teams turn problems into products people actually use.
                  I do this as a product manager.
                </p>
                <p>
                  For about 4 years, I have worked with startups, founders, and
                  organizations across SaaS, Edtech, Ecommerce, and Proptech;
                  shipping products and getting things built.
                </p>
              </div>
              <div className="mt-8">
                
                  href="https://cal.com/stella-usoh/45-min-discovery-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                <a>
                  Book a call
                </a>
              </div>
            </div>
            <div className="lg:flex lg:justify-end">
              <Image
                src={portraitImage}
                alt="Stella Usoh"
                width={400}
                height={400}
                className="rounded-2xl object-cover object-top shadow-xl w-full max-w-sm"
              />
            </div>
          </div>
        </motion.section>

        <hr className="border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <nav className="space-y-2">
            {navLinks.map((link, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-3 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-100 dark:border-zinc-800"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {link.label}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.section>

        <footer className="text-sm text-zinc-400 dark:text-zinc-600 space-y-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-4">
            <a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Medium</a>
            <a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">X (Twitter)</a>
            <a href="mailto:stellausohh@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">GitHub</a>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-4">
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