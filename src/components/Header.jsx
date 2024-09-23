import { Container } from './Container'
import ThemeToggle from './ThemeToggle'


export function Header() {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
      >
        <div
          className="top-0 z-10 h-16 pt-6"
        >
          <Container
            className="w-full"
          >
            <div className="">
              <div className="flex justify-between items-center">
              <div className="pointer-events-auto">
                <a href="https://www.buildingbloques.com" target='_blank' className="hover:text-gray-400 font-semibold text-gray-900 dark:text-gray-100">
                  Buy template
                </a>
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
