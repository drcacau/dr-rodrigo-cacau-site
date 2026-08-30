import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Contato } from '@/types'

interface MensagensTableProps {
  mensagens: Contato[]
  onSelect: (mensagem: Contato) => void
}

export function MensagensTable({ mensagens, onSelect }: MensagensTableProps) {
  if (mensagens.length === 0) {
    return <p className="py-10 text-center text-muted-foreground">Nenhuma mensagem recebida.</p>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Mensagem</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mensagens.map((mensagem) => (
          <TableRow
            key={mensagem.id}
            className="cursor-pointer"
            onClick={() => onSelect(mensagem)}
          >
            <TableCell className={mensagem.lido ? 'text-foreground' : 'font-semibold text-primary'}>
              {mensagem.nome}
            </TableCell>
            <TableCell className="text-muted-foreground">{mensagem.email}</TableCell>
            <TableCell className="max-w-64 truncate text-muted-foreground">
              {mensagem.mensagem}
            </TableCell>
            <TableCell className="space-x-1">
              {!mensagem.lido && <Badge variant="outline">Não lida</Badge>}
              {mensagem.respondido && <Badge>Respondida</Badge>}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {new Date(mensagem.created_at).toLocaleDateString('pt-BR')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
