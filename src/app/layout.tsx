import Header from '@/components/Header'
import './globals.css'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'
import { getPosts } from '@/utils/getPosts'
import PopularPosts from '@/components/PopularPosts'
import Categories from '@/components/Categories'
import { usePathname } from 'next/navigation'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: "Blog Tech",
  description: "Blog Tech",
  icons: { icon: { url: "/favicon.svg", type: "image/svg" }, shortcut: { url: "/favicon.svg", type: "image/svg" }, },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const data = await getPosts();
 
  return (
    <html lang="pt-br">

      <body
        className={`
       ${nunito.className}
        bg-gray-50
        `}
      >
        <div className="relative min-h-screen">
          <Header />
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-y-6 p-2 mt-8 justify-between">
            {children}

            <div className="pb-20 flex flex-col gap-y-8">
              <PopularPosts data={data} />
              <Categories data={data} />
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
