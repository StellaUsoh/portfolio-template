import { Container } from './Container'
import ThemeToggle from './ThemeToggle'

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container className="w-full">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="pointer-events-auto">
                </div>
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}