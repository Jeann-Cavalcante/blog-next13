import Header from '@/components/Header'
import './globals.css'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Tech',
  description: 'Blog Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={ `
       ${nunito.className}
        bg-gray-50 min-h-screen
        `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
