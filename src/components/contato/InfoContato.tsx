import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { EMAIL, ENDERECO, HORARIOS, INSTAGRAM_URL, TELEFONE, TIKTOK_URL } from '@/lib/contact-info'
import { InstagramIcon } from './InstagramIcon'
import { TikTokIcon } from './TikTokIcon'

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

      <div className="mt-6 border-t border-border pt-6">
        <p className="mb-3 text-sm font-medium text-foreground">Siga nas redes sociais</p>
        <div className="flex gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              background:
                'linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
            }}
            className="flex size-12 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-110"
          >
            <InstagramIcon className="size-6" />
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex size-12 items-center justify-center rounded-full bg-black shadow-md transition-transform hover:scale-110"
          >
            <TikTokIcon className="size-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
