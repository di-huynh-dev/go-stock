import Header from '@/src/components/dashboard/Header'
import Sidebar from '@/src/components/dashboard/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Go Stock',
  description: 'Easily invest in stocks and crypto in one GoStock platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        <div className="bg-[#F5F7F9] dark:bg-gray-900">{children}</div>
      </main>
    </div>
  )
}
