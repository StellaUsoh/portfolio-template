import { Layout } from "../components/Layout";
import { Providers } from "./providers";
import '../../styles/tailwind.css'



export const metadata = {
  title: {
    template: '%s - Angelina Jolie',
    default:
      'Angelina Jolie - Software developer and founder',
  },
  description:
    'I’m Angelina, a software engineer based in the Netherlands. I currently work at Spotify where I lead the development of innovative web-based products that empower individuals.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
