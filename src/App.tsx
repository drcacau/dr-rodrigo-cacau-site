import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { QuemSomosPage } from '@/pages/QuemSomosPage'
import { CasesPage } from '@/pages/CasesPage'
import { ContatoPage } from '@/pages/ContatoPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const AdminLayout = lazy(() =>
  import('@/components/admin/AdminLayout').then((m) => ({ default: m.AdminLayout })),
)
const ProtectedRoute = lazy(() =>
  import('@/components/admin/ProtectedRoute').then((m) => ({ default: m.ProtectedRoute })),
)
const AdminLoginPage = lazy(() =>
  import('@/pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })),
)
const AdminDashboardPage = lazy(() =>
  import('@/pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })),
)
const AdminCasesPage = lazy(() =>
  import('@/pages/admin/AdminCasesPage').then((m) => ({ default: m.AdminCasesPage })),
)
const AdminMensagensPage = lazy(() =>
  import('@/pages/admin/AdminMensagensPage').then((m) => ({ default: m.AdminMensagensPage })),
)

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
      Carregando...
    </div>
  )
}

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

      <Route
        path="admin/login"
        element={
          <Suspense fallback={<AdminFallback />}>
            <AdminLoginPage />
          </Suspense>
        }
      />

      <Route
        element={
          <Suspense fallback={<AdminFallback />}>
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          </Suspense>
        }
      >
        <Route path="admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="admin/cases" element={<AdminCasesPage />} />
        <Route path="admin/mensagens" element={<AdminMensagensPage />} />
      </Route>
    </Routes>
  )
}

export default App
