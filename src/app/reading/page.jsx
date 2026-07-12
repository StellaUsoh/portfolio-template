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

export default function Reading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <a href="/random" className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
            ← Random stuff about me
          </a>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            Currently Reading
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A couple of books on rotation right now.
          </p>
        </motion.div>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <div className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">Season of Crimson Blossoms</p>
              <p className="text-zinc-500 dark:text-zinc-500 mb-3">Abubakar Adam Ibrahim</p>
              <a href="https://www.goodreads.com/user/show/188990551-whatstellaread" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                View on Goodreads →
              </a>
            </div>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Find my book content</p>
          <div className="space-y-3 text-sm">
            <a href="https://www.goodreads.com/user/show/188990551-whatstellaread" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b border-dashed border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <span className="underline-offset-4 hover:underline">Goodreads</span>
              <span className="text-zinc-300 dark:text-zinc-700">→</span>
            </a>
            <a href="https://www.tiktok.com/@whatstellaread" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b border-dashed border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <span className="underline-offset-4 hover:underline">TikTok</span>
              <span className="text-zinc-300 dark:text-zinc-700">→</span>
            </a>
            <a href="https://whatstellaread.medium.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b border-dashed border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <span className="underline-offset-4 hover:underline">Medium</span>
              <span className="text-zinc-300 dark:text-zinc-700">→</span>
            </a>
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