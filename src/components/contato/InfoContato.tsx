import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { EMAIL, ENDERECO, HORARIOS, TELEFONE } from '@/lib/contact-info'

export function InfoContato() {
  return (
    <div className="rounded-xl bg-background p-6 ring-1 ring-border">
      <h3 className="text-lg font-medium text-primary">Informações de Contato</h3>

      <ul className="mt-4 space-y-4">
        <li className="flex gap-3">
          <MapPin className="size-5 shrink-0 text-accent" />
          <span className="text-sm text-muted-foreground">{ENDERECO}</span>
        </li>
        <li className="flex gap-3">
          <Phone className="size-5 shrink-0 text-accent" />
          <span className="text-sm text-muted-foreground">{TELEFONE}</span>
        </li>
        <li className="flex gap-3">
          <Mail className="size-5 shrink-0 text-accent" />
          <span className="text-sm text-muted-foreground">{EMAIL}</span>
        </li>
        <li className="flex gap-3">
          <Clock className="size-5 shrink-0 text-accent" />
          <ul className="text-sm text-muted-foreground">
            {HORARIOS.map((h) => (
              <li key={h.dia}>
                <span className="font-medium text-foreground">{h.dia}:</span> {h.horario}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
