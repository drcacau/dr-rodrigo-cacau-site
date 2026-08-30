import { Clock, MapPin } from 'lucide-react'
import { ENDERECO, HORARIOS } from '@/lib/contact-info'

export function MapaEndereco() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-primary">Onde Estamos</h2>

          <div className="mt-6 flex gap-3">
            <MapPin className="size-5 shrink-0 text-accent" />
            <p className="text-muted-foreground">{ENDERECO}</p>
          </div>

          <div className="mt-4 flex gap-3">
            <Clock className="size-5 shrink-0 text-accent" />
            <ul className="text-muted-foreground">
              {HORARIOS.map((h) => (
                <li key={h.dia}>
                  <span className="font-medium text-foreground">{h.dia}:</span> {h.horario}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl ring-1 ring-border">
          <iframe
            title="Localização do consultório em Feira de Santana - BA"
            src="https://www.google.com/maps?q=Feira+de+Santana,BA&output=embed"
            className="h-full min-h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
