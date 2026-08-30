export const ENDERECO = '[Endereço do consultório] — Feira de Santana - BA'
export const TELEFONE = '(75) 0000-0000'
export const EMAIL = 'contato@drrodrigocacau.com.br'

// Placeholder — substituir pelo número real com DDI+DDD (ex: 5575999999999)
export const WHATSAPP_NUMBER = '5575000000000'
export const WHATSAPP_MENSAGEM_PADRAO = 'Olá, gostaria de agendar uma consulta'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM_PADRAO,
)}`

export const HORARIOS = [
  { dia: 'Segunda a sexta', horario: '08h às 18h' },
  { dia: 'Sábado', horario: '08h às 12h' },
  { dia: 'Domingo', horario: 'Fechado' },
]
