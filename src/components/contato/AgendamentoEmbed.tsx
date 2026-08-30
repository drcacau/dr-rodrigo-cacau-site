import { CalendarClock } from 'lucide-react'
import { WhatsAppButton } from './WhatsAppButton'

export function AgendamentoEmbed() {
  return (
    <div className="rounded-xl bg-background p-6 ring-1 ring-border">
      <div className="flex items-center gap-3">
        <CalendarClock className="size-6 text-accent" />
        <h3 className="text-lg font-medium text-primary">Agendamento Online</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        A ferramenta de agendamento online (Doctoralia ou Calendly) será integrada em breve.
        Por enquanto, agende sua consulta diretamente pelo WhatsApp — respondemos o mais rápido
        possível.
      </p>
      <div className="mt-4">
        <WhatsAppButton />
      </div>
    </div>
  )
}
