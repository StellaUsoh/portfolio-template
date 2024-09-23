"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { GitHubIcon, LinkedInIcon, XIcon } from "../components/SocialIcons";
import portraitImage from "../images/portrait.jpeg";
import { Container } from "../components/Container";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500 items-center"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

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

export default function Home() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div
        className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left side - Image */}
        <motion.div className="lg:pl-20" variants={imageVariants}>
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 24rem, 16rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover bg-bottom dark:bg-zinc-800"
            />
          </div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          className="lg:order-first lg:row-span-2"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Angelina Jolie
          </h1>
          <p className="mt-2 text-xl font-semibold text-zinc-600 dark:text-zinc-400">
            Frontend developer from Mallorca, Spain.
          </p>
          <div className="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I have a passion for building beautiful, snappy, and performant
              web applications. I have worked at big tech companies and small
              and medium startups. Even though I focus on the frontend, I am
              comfortable with all parts of the stack, from designing UIs,
              publishing npm packages, building backend APIs and databases.
            </p>
            <p>
              Currently, I am working at Supabase, an open source postgres
              development platform with authentication, realtime, storage, logs
              and analytics, and more! I focus on observability and helping
              developers build better applications.
            </p>
            <p>
              Outside of work, I am a big fan of taking photos 📷 barbecuing 🍖
              playing music 🎸 traveling 🧳 hiking 🥾 and learning new things 📚
            </p>
          </div>
          <div className=" mb-8">
            <SocialLink
              href="mailto:angelinajolie@buildingbloques.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              angelinajolie@buildingbloques.com
            </SocialLink>
            <ul role="list" className="flex items-center gap-4 mt-4">
              <SocialLink href="#" icon={XIcon}>
                X
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon}>
                GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon}>
                LinkedIn
              </SocialLink>
            </ul>
          </div>
        </motion.div>

        {/* Social Links */}
      </motion.div>
    </Container>
  );
}
