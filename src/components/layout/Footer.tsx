export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-8 text-sm text-muted-foreground">
        <img src="/logo.png" alt="" className="size-8 rounded-md" />
        <p>© {year} Dr. Rodrigo Cacau — Medicina Integrada. Feira de Santana - BA.</p>
      </div>
    </footer>
  )
}
