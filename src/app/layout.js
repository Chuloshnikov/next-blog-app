import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-w-screen bg-white overflow-x-hidden text-"#000000" ${inter.className}`}>
        <div
        className='max-w-container mx-auto bg-accentBg xs:px-[40px] xl:px-[80px] xs:max-w-[500px] lgl:max-w-[768x] xl:max-w-[1024px] 2xl:max-w-[1366px]'
        >
          {children}
        </div>
      </body>
    </html>
  )
}
