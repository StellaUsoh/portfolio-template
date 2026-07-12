import Link from 'next/link'
import { Container } from './Container'
import ThemeToggle from './ThemeToggle'

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="flex justify-between items-center">
            <div className="pointer-events-auto">
              <Link
                href="/"
                className="text-sm font-medium text-zinc-800 hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-400 transition-colors"
              >
                Stella Usoh
              </Link>
            </div>

            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
