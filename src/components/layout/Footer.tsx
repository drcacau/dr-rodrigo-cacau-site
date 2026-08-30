export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <p>
          © {year} Dr. Rodrigo Cacau — Medicina Integrada. Feira de Santana - BA.
        </p>
      </div>
    </footer>
  )
}
