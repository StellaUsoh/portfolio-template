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

export default function Random() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <Container className="py-16 sm:py-24 max-w-2xl">

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <a href="/" className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 block">
            ← Home
          </a>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            Random stuff about me
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Outside of work, I have many other interests. Some of them are:
          </p>
        </motion.div>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Outside of work</p>
          <div className="space-y-8 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Reading</p>
              <p>You will always find me deep-neck in a book, particularly African fiction.</p>
              <a href="/reading" className="inline-block mt-2 text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Check out what I am currently reading
              </a>
            </div>
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Writing and Journaling</p>
              <p>I yap about books sometimes. Actually, all the time. So I dedicated a blog to the cause. I also love to scribble a lot and consider journaling an act of self-care.</p>
              <a href="https://whatstellaread.medium.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Read about it here
              </a>
            </div>
            <div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">True Crime and Audiobooks</p>
              <p>You will also find me hooked on a true crime documentary or deep into an audiobook between tasks.</p>
            </div>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Now</p>
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>Working towards joining a company with strong product culture and contributing to something life-impacting.</p>
            <p>Studying Computer Science virtually at University of the People. Quite challenging but an interesting experience that keeps me on my toes.</p>
            <p>Reading at least one book a month. For the first half of this year I have read at least 20 books. I document them on <a href="https://www.goodreads.com/user/show/188990551-whatstellaread" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Goodreads</a>.</p>
            <p>Building fun projects, like MyJournal, an AI-powered journaling and notes-taking platform for people who love to pen down their thoughts.</p>
          </div>
        </motion.section>

        <hr className="border-dashed border-zinc-200 dark:border-zinc-800 mb-12" />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">Someday</p>
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>Attend product-led open events and connect with top industry players.</p>
            <p>Mentor beginners in project and product management.</p>
            <p>Own a skincare clinic. Outside of tech I am quite interested in skincare and beauty and would love to use my knowledge to educate and help people with skin concerns.</p>
            <p>Travel. Tour Nigeria, Africa, and other parts of the world.</p>
            <p>Host book reading events and sessions.</p>
          </div>
        </motion.section>

        <footer className="text-xs text-zinc-400 dark:text-zinc-600 space-y-4 pt-8 border-t border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-3">
            <a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Medium</a>
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