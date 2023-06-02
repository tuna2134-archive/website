import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tuna2134 official website',
  description: 'Now developing...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8715826596324259" crossOrigin="anonymous"></script>
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
