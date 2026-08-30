import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, LogOut, MessageSquare, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/cases', label: 'Cases', icon: Sparkles },
  { to: '/admin/mensagens', label: 'Mensagens', icon: MessageSquare },
]

export function AdminLayout() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-secondary/40">
      <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-background p-4 sm:flex">
        <span className="font-heading text-lg font-semibold text-primary">Painel Admin</span>

        <nav className="mt-8 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`
              }
            >
              <link.icon className="size-4" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button variant="ghost" className="mt-auto justify-start gap-2" onClick={handleSignOut}>
          <LogOut className="size-4" />
          Sair
        </Button>
      </aside>

      <div className="flex-1">
        <header className="border-b border-border bg-background px-6 py-4 sm:hidden">
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-semibold text-primary">Painel Admin</span>
            <Button variant="ghost" size="icon" onClick={handleSignOut} aria-label="Sair">
              <LogOut className="size-4" />
            </Button>
          </div>
          <nav className="mt-3 flex gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
