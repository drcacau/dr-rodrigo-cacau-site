import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Case } from '@/types'

interface CaseCardProps {
  caso: Case
}

export function CaseCard({ caso }: CaseCardProps) {
  return (
    <Card>
      <CardContent>
        <Quote className="size-6 text-accent" />
        <p className="mt-4 text-sm text-foreground">"{caso.depoimento}"</p>
        <p className="mt-4 text-sm font-medium text-primary">{caso.paciente}</p>
        <p className="text-xs text-muted-foreground">{caso.condicao}</p>
      </CardContent>
    </Card>
  )
}
