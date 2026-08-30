import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { to: '/', label: 'Início' },
  { to: '/quem-somos', label: 'Quem Somos' },
  { to: '/cases', label: 'Cases de Sucesso' },
  { to: '/contato', label: 'Fale Conosco' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-heading text-lg font-semibold text-primary"
        >
          Dr. Rodrigo Cacau
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
