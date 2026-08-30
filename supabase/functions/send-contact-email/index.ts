import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactPayload {
  nome: string
  email: string
  telefone?: string
  mensagem: string
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = (await req.json()) as ContactPayload

    if (!payload.nome || !payload.email || !payload.mensagem) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { error: dbError } = await supabase.from('contatos').insert({
      nome: payload.nome,
      email: payload.email,
      telefone: payload.telefone ?? null,
      mensagem: payload.mensagem,
    })

    if (dbError) {
      console.error('Erro ao salvar contato:', dbError)
      return new Response(JSON.stringify({ error: 'Falha ao salvar a mensagem.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL')

    if (resendApiKey && notificationEmail) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Site Dr. Rodrigo Cacau <onboarding@resend.dev>',
            to: notificationEmail,
            subject: `Nova mensagem de ${payload.nome}`,
            html: `
              <p><strong>Nome:</strong> ${payload.nome}</p>
              <p><strong>E-mail:</strong> ${payload.email}</p>
              <p><strong>Telefone:</strong> ${payload.telefone ?? 'não informado'}</p>
              <p><strong>Mensagem:</strong></p>
              <p>${payload.mensagem}</p>
            `,
          }),
        })
      } catch (emailError) {
        // A mensagem já foi salva; falha no e-mail não deve quebrar o fluxo do usuário.
        console.error('Erro ao enviar e-mail de notificação:', emailError)
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erro inesperado:', error)
    return new Response(JSON.stringify({ error: 'Erro inesperado.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
