import { Button } from '@/components/ui/button'
import type { CaseTipo } from '@/types'

export type CasesFilterValue = CaseTipo | 'todos'

interface CasesFilterProps {
  value: CasesFilterValue
  onChange: (value: CasesFilterValue) => void
}

const options: { value: CasesFilterValue; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'texto', label: 'Texto' },
  { value: 'video', label: 'Vídeo' },
]

export function CasesFilter({ value, onChange }: CasesFilterProps) {
  return (
    <div className="flex justify-center gap-2">
      {options.map((option) => (
        <Button
          key={option.value}
          variant={value === option.value ? 'default' : 'outline'}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
