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

export default function Notes() {
  return (
    <Container className="mt-12 sm:mt-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors mb-8 block">
          Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-2">
          Notes
        </h1>
        <p className="text-base text-zinc-500 dark:text-zinc-400 mb-16">
          Outside of work, I have many other interests. Some of them include:
        </p>
        <div className="space-y-12 mb-16">
          <div>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Reading</h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              You will always find me deep-neck in a book, particularly African fiction. I promote African literature on my social platforms and share content to encourage reading culture among young Africans.
            </p>
<a href="https://www.tiktok.com/@whatstellaread" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-zinc-500 dark:text-zinc-400 underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">
              Check It Out
            </a>
          </div>
          <div>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Writing and Journaling</h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I yap about books sometimes. Actually, all the time. So I dedicated a blog to the cause. I also love to scribble a lot and consider journaling an act of self-care.
            </p>
            <a href="https://whatstellaread.medium.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-zinc-500 dark:text-zinc-400 underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">
              Read here
            </a>
          </div>
          <div>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Watching True Crime Documentaries</h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              You will also find me hooked on a true crime documentary between tasks. Turns out watching how people get away with crime, or "almost" get away, is intriguing.            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Listening to Audiobooks and Podcasts</h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I listen to audiobooks on Libby or on YouTube and Spotify. I do not have a playlist yet but I will share one when I do.
            </p>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              For podcasts, the list is endless. These are a couple I play on rotation:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="https://www.youtube.com/@ISaidWhatISaidPod" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">
                  I Said What I Said
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@PeaceItimiofficial" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">
                  Peace Itimi
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Crea8torium" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">
                  Crea8torium
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-12 mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-2">Now</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            Read through if you are curious about what I am up to right now.
          </p>
          <div className="space-y-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p> for the remainder of the year, I am working towards being a part of a company with strong product culture and contributing to something life-impacting.</p>
            <p>I am currently studying Computer Science virtually at University of the People. Quite challenging but an interesting experience that keeps me on my toes. Funfact- i used to be obsessed with computers as a kid, i thought i'd end up being a computer engineer. oh well!</p>
            <p>I am committed to reading at least one book a month. For the first half of this year I have read at least 20 books. I document them on <a href="https://www.goodreads.com/user/show/188990551-whatstellaread" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:decoration-[#88051E] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4]] dark:hover:decoration-[#FEF8C4] dark:hover:decoration-[#FEF8C4] transition-all">Goodreads</a>.</p>
            <p>I am dedicating time to learning and building fun projects, like MyJournal— an AI-powered journaling and notes-taking platform for people who love to pen down their thoughts just like me.</p>
          </div>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-12 mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-2">Someday</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            These are a few long-term goals I have set for myself. While this is subject to change because life itself is not constant, I hope it encourages you to have a someday page too.
          </p>
          <div className="space-y-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            
            <p>Someday, I would like to coach people starting out their career in product.</p>
            <p>Someday, I would like to own a skincare clinic. Outside of tech, I am quite interested in beauty and wellness, and would love to use my knowledge to educate and help people with various skin concerns.</p>
            <p>Someday, I would like to travel across Nigeria, Africa, and other parts of the world.</p>
            <p>Someday, I would like to host book reading events.</p>
            <p>Someday, I will like to own a coffee shop that also doubles as a mini library and entry will be free for all members. We'll host occassional funraising events and all donations will go to charity</p>
          </div>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-8 pb-16">
          <ul role="list" className="flex flex-wrap items-center gap-6">
            <li><a href="https://stellausoh.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">Medium</a></li>
            <li><a href="https://x.com/ARealLifeStar" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">X (Twitter)</a></li>
            <li><a href="mailto:stellausohh@gmail.com" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">Email</a></li>
            <li><a href="https://www.linkedin.com/in/stellausoh/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/StellaUsoh" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#88051E] dark:hover:text-[#FEF8C4] transition-colors">GitHub</a></li>
          </ul>
        </div>
      </motion.div>
    </Container>
  );
}
