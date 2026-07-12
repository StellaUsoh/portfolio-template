import { Layout } from "../components/Layout";
import { Providers } from "./providers";
import '../../styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Stella Usoh',
    default: 'Stella Usoh - Product Manager',
  },
  description:
    'I\'m Stella, Hi, I'm Stella.

I help teams turn problems into products people actually use. I do this as a product manager.

For about 4 years, I've worked with startups, founders, and organizations across Edtech, Ecommerce, and Proptech; shipping products and getting things built.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='black'/><text x='50' y='54' font-family='Arial, Helvetica, sans-serif' font-size='42' font-weight='700' fill='white' text-anchor='middle' dominant-baseline='middle'>SU</text></svg>"
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}