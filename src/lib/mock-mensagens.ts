import type { Contato } from '@/types'

export const mockMensagens: Contato[] = [
  {
    id: '1',
    nome: 'Maria Souza',
    email: 'maria.souza@example.com',
    telefone: '(75) 90000-0001',
    mensagem: 'Gostaria de agendar uma consulta para check-up cardiometabólico.',
    lido: false,
    respondido: false,
    created_at: '2026-08-28T10:30:00Z',
  },
  {
    id: '2',
    nome: 'João Almeida',
    email: 'joao.almeida@example.com',
    telefone: '(75) 90000-0002',
    mensagem: 'Vocês atendem por convênio? Preciso de uma avaliação cardiológica.',
    lido: true,
    respondido: false,
    created_at: '2026-08-25T15:10:00Z',
  },
  {
    id: '3',
    nome: 'Carla Pereira',
    email: 'carla.pereira@example.com',
    telefone: null,
    mensagem: 'Gostaria de saber mais sobre a abordagem de medicina integrativa.',
    lido: true,
    respondido: true,
    created_at: '2026-08-20T09:00:00Z',
  },
]
