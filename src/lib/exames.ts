import {
  Activity,
  CalendarClock,
  Gauge,
  HeartPulse,
  Moon,
  Scale,
  Watch,
  type LucideIcon,
} from 'lucide-react'

export interface Exame {
  icon: LucideIcon
  title: string
  description: string
  frase: string
}

export const EXAMES: Exame[] = [
  {
    icon: Activity,
    title: 'Teste Ergométrico',
    description: 'Avaliação da resposta cardíaca ao esforço físico.',
    frase: 'um teste ergométrico',
  },
  {
    icon: HeartPulse,
    title: 'Eletrocardiograma (ECG)',
    description: 'Registro da atividade elétrica do coração.',
    frase: 'um eletrocardiograma (ECG)',
  },
  {
    icon: Gauge,
    title: 'MAPA',
    description: 'Monitorização ambulatorial da pressão arterial por 24 horas.',
    frase: 'um MAPA',
  },
  {
    icon: CalendarClock,
    title: 'MRPA',
    description: 'Monitorização residencial da pressão arterial ao longo de dias.',
    frase: 'um MRPA',
  },
  {
    icon: Watch,
    title: 'Holter',
    description: 'Monitorização contínua do ritmo cardíaco por 24 horas.',
    frase: 'um Holter',
  },
  {
    icon: Moon,
    title: 'Polissonografia',
    description: 'Avaliação do sono para diagnóstico de distúrbios como a apneia.',
    frase: 'uma polissonografia',
  },
  {
    icon: Scale,
    title: 'Bioimpedância',
    description: 'Análise da composição corporal (gordura, massa magra e água).',
    frase: 'uma bioimpedância',
  },
]

export function getExameFrase(title: string | null): string | null {
  if (!title) return null
  const exame = EXAMES.find((e) => e.title === title)
  return exame ? exame.frase : `um(a) ${title}`
}
