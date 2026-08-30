export const ENDERECO =
  'Av. Governador João Durval Carneiro, nº 3803 — Edifício Charmant Hotel & Business, sala 312, 3º Andar, Bairro Caseb, Feira de Santana - BA, CEP 44.051-605'
export const TELEFONE = '(75) 99949-0478'
export const EMAIL = 'rec.drcacau@gmail.com'

export const WHATSAPP_NUMBER = '5575999490478'
export const WHATSAPP_MENSAGEM_PADRAO = 'Olá, gostaria de agendar uma consulta'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM_PADRAO,
)}`

export const HORARIOS = [
  { dia: 'Segunda a sexta', horario: '08h às 18h' },
  { dia: 'Sábado', horario: '08h às 12h' },
  { dia: 'Domingo', horario: 'Fechado' },
]
