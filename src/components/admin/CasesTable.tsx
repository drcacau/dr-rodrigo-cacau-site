import { Pencil, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Case } from '@/types'

interface CasesTableProps {
  cases: Case[]
  onEdit: (caso: Case) => void
  onToggleAtivo: (caso: Case) => void
}

export function CasesTable({ cases, onEdit, onToggleAtivo }: CasesTableProps) {
  if (cases.length === 0) {
    return <p className="py-10 text-center text-muted-foreground">Nenhum case encontrado.</p>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Paciente</TableHead>
          <TableHead>Condição</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Destaque</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cases.map((caso) => (
          <TableRow key={caso.id}>
            <TableCell className="font-medium text-foreground">{caso.paciente}</TableCell>
            <TableCell className="text-muted-foreground">{caso.condicao}</TableCell>
            <TableCell className="capitalize text-muted-foreground">{caso.tipo}</TableCell>
            <TableCell>{caso.destaque ? <Badge>Destaque</Badge> : '—'}</TableCell>
            <TableCell>
              <Badge variant={caso.ativo ? 'default' : 'outline'}>
                {caso.ativo ? 'Ativo' : 'Inativo'}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon-sm" onClick={() => onEdit(caso)} aria-label="Editar">
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => onToggleAtivo(caso)}
                aria-label={caso.ativo ? 'Desativar' : 'Reativar'}
              >
                <Trash2 className="size-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
