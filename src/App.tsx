import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { QuemSomosPage } from '@/pages/QuemSomosPage'
import { CasesPage } from '@/pages/CasesPage'
import { ContatoPage } from '@/pages/ContatoPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminCasesPage } from '@/pages/admin/AdminCasesPage'
import { AdminMensagensPage } from '@/pages/admin/AdminMensagensPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="quem-somos" element={<QuemSomosPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="admin/login" element={<AdminLoginPage />} />
      <Route path="admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="admin/cases" element={<AdminCasesPage />} />
      <Route path="admin/mensagens" element={<AdminMensagensPage />} />
    </Routes>
  )
}

export default App
