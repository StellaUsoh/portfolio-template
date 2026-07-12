import { Header } from './Header'

export function Layout({ children }) {
  return (
    <div className="relative flex w-full flex-col min-h-screen">
      <Header />
      <main className="flex-auto">{children}</main>
    </div>
  )
}