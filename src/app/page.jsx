"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { GitHubIcon, LinkedInIcon, XIcon } from "../components/SocialIcons";
import portraitImage from "../portrait.jpeg";
import { Container } from "../components/Container";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
];

export default function Home() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div
        className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="lg:pl-20" variants={imageVariants}>
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Stella Usoh"
              sizes="(min-width: 1024px) 24rem, 16rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover object-top dark:bg-zinc-800 shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:order-first lg:row-span-2"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Stella Usoh
          </h1>
          <p className="mt-2 text-xl font-semibold text-zinc-600 dark:text-zinc-400">
            Product Manager.
          </p>
          <div className="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Hi, I am Stella.</p>
            <p>
              I help teams turn ideas into products people actually want to use.
              I do this as a product manager.
            </p>
            <p>
              I started out working in project management. That means I understand what it takes to build a product and how to drive delivery and monitor progress.
              For about 4 years, I have worked with startups, founders, and
              organizations across Edtech, Ecommerce, and Proptech;
              shipping products and getting things built.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="https://cal.com/stella-usoh/45-min-discovery-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 px-5 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Book a call
            </Link>
          </div>

        <div className="mt-10 space-y-3">
  {navLinks.map((link) => (
    <div key={link.href}>
      <Link
        href={link.href}
        className="group flex items-center justify-between text-sm font-medium text-zinc-800 hover:text-[#88051E] dark:text-zinc-200 dark:hover:text-[#FEF8C4] transition py-2"
      >
        <span>{link.label}</span>
        <span>→</span>
      </Link>
    </div>
  ))}
</div>

<div className="mt-6 pt-6 pb-16">            <ul role="list" className="flex items-center gap-6">
              <li>
                <Link href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">
                  Medium
                </Link>
              </li>
              <li>
                <Link href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link href="mailto:stellausohh@gmail.com" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>

          </div>
        </motion.div>
      </motion.div>
    </Container>
  )
}