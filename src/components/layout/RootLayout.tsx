import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToHash } from './ScrollToHash'
import { WhatsAppButton } from '@/components/contato/WhatsAppButton'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton floating />
    </div>
  )
}
