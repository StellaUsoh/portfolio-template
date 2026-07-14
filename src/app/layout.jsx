import { Layout } from "../components/Layout";
import { Providers } from "./providers";
import '../../styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Stella Usoh',
    default: 'Stella Usoh | Product Manager',
  },
  description: 'Stella Usoh is a Product Manager based in Nigeria with 4 years of experience building digital products across SaaS, Fintech, Edtech, Proptech, and Climatetech.',
  keywords: ['Stella Usoh', 'Product Manager', 'Product Owner', 'Project Manager', 'Product Manager Nigeria', 'Product Manager in Nigeria', 'Product Manager Lagos Nigeria', 'Product Manager Abuja Nigeria', 'SaaS Fintech Edtech Proptech Climatetech Product Manager', 'Mid-level Product Manager Nigeria', 'Product Tinkerer', 'digital products Nigeria'],
  authors: [{ name: 'Stella Usoh', url: 'https://stellausoh.xyz' }],
  creator: 'Stella Usoh',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://stellausoh.xyz',
    siteName: 'Stella Usoh',
    title: 'Stella Usoh | Product Manager',
    description: 'Stella Usoh is a Product Manager based in Nigeria with 4 years of experience building digital products across SaaS, Fintech, Edtech, Proptech, and Climatetech.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stella Usoh | Product Manager',
    description: 'Stella Usoh is a Product Manager based in Nigeria with 4 years of experience building digital products across SaaS, Fintech, Edtech, Proptech, and Climatetech.',
    creator: '@ARealLifeStar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://stellausoh.xyz',
  },
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
      <body className="flex h-full bg-white dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
