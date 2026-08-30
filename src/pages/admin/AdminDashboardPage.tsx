import { Link } from 'react-router-dom'
import { MessageSquare, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockCases } from '@/lib/mock-cases'
import { mockMensagens } from '@/lib/mock-mensagens'

export function AdminDashboardPage() {
  const totalCases = mockCases.filter((c) => c.ativo).length
  const totalMensagens = mockMensagens.length
  const naoLidas = mockMensagens.filter((m) => !m.lido).length

  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Visão geral do conteúdo do site.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link to="/admin/cases">
          <Card className="transition-shadow hover:shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-accent" />
                <CardTitle>Cases ativos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-primary">{totalCases}</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/mensagens">
          <Card className="transition-shadow hover:shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="size-6 text-accent" />
                <CardTitle>Mensagens recebidas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-primary">{totalMensagens}</p>
              {naoLidas > 0 && (
                <p className="mt-1 text-sm text-muted-foreground">{naoLidas} não lida(s)</p>
              )}
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
