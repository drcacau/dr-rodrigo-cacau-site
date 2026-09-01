import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { ContatoForm } from '@/components/contato/ContatoForm'
import { AgendamentoEmbed } from '@/components/contato/AgendamentoEmbed'
import { InfoContato } from '@/components/contato/InfoContato'
import { getExameFrase } from '@/lib/exames'

export function ContatoPage() {
  const [searchParams] = useSearchParams()
  const exameFrase = getExameFrase(searchParams.get('exame'))
  const whatsappMensagem = exameFrase ? `Olá, gostaria de agendar ${exameFrase}` : undefined

  return (
    <>
      <Helmet>
        <title>Agende sua Consulta — Dr. Rodrigo Cacau</title>
        <meta
          name="description"
          content="Entre em contato pelo formulário, WhatsApp ou agende online com o Dr. Rodrigo Cacau em Feira de Santana."
        />
      </Helmet>

      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-4 text-center">
          <h1 className="text-4xl font-semibold text-primary">Fale Conosco</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Escolha o canal mais conveniente para você e agende sua consulta.
          </p>
        </div>
      </div>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-xl bg-secondary/40 p-6">
            <h2 className="text-lg font-medium text-primary">Envie uma mensagem</h2>
            <div className="mt-4">
              <ContatoForm />
            </div>
          </div>

          <div className="space-y-6">
            <InfoContato />
            <AgendamentoEmbed mensagem={whatsappMensagem} />
          </div>
        </div>
      </section>
    </>
  )
}
