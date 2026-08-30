import { PlayCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Case } from '@/types'

interface CaseCardVideoProps {
  caso: Case
}

export function CaseCardVideo({ caso }: CaseCardVideoProps) {
  return (
    <Card>
      <div className="flex aspect-video items-center justify-center bg-secondary">
        {caso.video_url ? (
          <iframe
            title={`Depoimento em vídeo de ${caso.paciente ?? 'paciente'}`}
            src={caso.video_url}
            className="size-full border-0"
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <PlayCircle className="size-12 text-primary/40" strokeWidth={1.25} />
        )}
      </div>
      <CardContent>
        <p className="text-sm font-medium text-primary">{caso.paciente}</p>
        <p className="text-xs text-muted-foreground">{caso.condicao}</p>
      </CardContent>
    </Card>
  )
}
