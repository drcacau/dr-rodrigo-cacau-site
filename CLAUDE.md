# CLAUDE.md — Dr. Rodrigo Cacau · Medicina Integrada

> Documento de contexto para o Claude Code. Leia este arquivo inteiro antes de iniciar qualquer módulo.

---

## 1. Visão Geral do Projeto

**Nome do site:** Dr. Rodrigo Cacau — Medicina Integrada  
**Tipo:** Site institucional de consultório médico  
**Especialidade:** Cardiologia Clínica + Check-up Cardiometabólico + Medicina Integrativa  
**Localização:** Feira de Santana — BA (e região metropolitana)  
**Público-alvo:** Pacientes adultos da região buscando cardiologia com abordagem integrativa  
**Idioma:** Português (Brasil)  
**Tom:** Misto — profissional e humano. Credibilidade médica aliada a acolhimento. Nem frio/clínico puro, nem excessivamente informal.

---

## 2. Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Frontend | React + Vite + TypeScript |
| Estilo | Tailwind CSS + shadcn/ui |
| Backend | Supabase (Postgres + Auth + Edge Functions + Storage) |
| Deploy | Vercel |
| Versionamento | GitHub |

### Convenções de projeto
- Usar **TypeScript estrito** em todo o projeto (`strict: true` no tsconfig)
- Componentes em **PascalCase**, funções e hooks em **camelCase**
- Um componente por arquivo; máximo ~150 linhas por arquivo de componente
- Pastas: `components/`, `pages/`, `hooks/`, `lib/`, `types/`, `services/`
- Variáveis de ambiente via `.env.local` (nunca comitar); tipos declarados em `src/env.d.ts`
- Supabase client inicializado em `src/lib/supabase.ts` e importado de lá
- Usar **React Query (TanStack Query)** para todas as chamadas ao Supabase no frontend
- Formulários com **React Hook Form + Zod** para validação

---

## 3. Paleta de Design

Tom visual: profissional e humano. Base em azul escuro (cardiologia/confiança) combinado com off-white e um acento terroso/dourado (medicina integrativa/acolhimento).

```
--color-primary:     #1B3A5C   /* Azul escuro — confiança médica */
--color-accent:      #C4935A   /* Dourado terroso — medicina integrativa */
--color-surface:     #F8F6F2   /* Off-white — fundo principal */
--color-text:        #1A1A1A   /* Quase preto */
--color-text-muted:  #6B7280   /* Cinza médio para textos secundários */
--color-border:      #E5E0D8   /* Borda suave */
```

- Tipografia principal: **Inter** (Google Fonts)
- Tipografia de destaque/heading: **Playfair Display** (para títulos nobres)
- Border-radius padrão: `rounded-xl` (shadcn default)
- Sombras: suaves, nunca duras

---

## 4. Estrutura de Páginas e Módulos

O desenvolvimento é feito **módulo por módulo**. Cada módulo tem escopo bem definido — não avance para o próximo sem o atual estar completo e aprovado.

### Módulo 0 — Setup do Projeto *(fazer primeiro)*
- [ ] Inicializar projeto com `npm create vite@latest` (React + TypeScript)
- [ ] Configurar Tailwind CSS + shadcn/ui
- [ ] Configurar Supabase client (`src/lib/supabase.ts`)
- [ ] Configurar React Router DOM (rotas das 4 páginas + rotas do admin)
- [ ] Criar variáveis de ambiente (`.env.local` com `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`)
- [ ] Criar layout base: `RootLayout` com `Header`, `Footer` e `Outlet`
- [ ] Configurar deploy no Vercel conectado ao repositório GitHub

---

### Módulo 1 — Home (`/`)

**Objetivo:** Apresentar o Dr. Rodrigo e o consultório de forma impactante, gerar confiança imediata e direcionar o visitante para agendamento.

**Seções (em ordem vertical na página):**

1. **Hero**
   - Headline principal: ex. *"Cuide do seu coração com quem une ciência e cuidado humano"*
   - Subheadline curto sobre a abordagem integrativa
   - Botão CTA primário: "Agendar consulta" → âncora para Fale Conosco ou link de agendamento
   - Foto do Dr. Rodrigo (ou imagem de fundo do consultório)

2. **Diferenciais / Sobre em destaque**
   - 3–4 cards com ícones: Cardiologia Clínica, Check-up Cardiometabólico, Medicina Integrativa, Atendimento Humanizado

3. **Prévia de Cases de Sucesso**
   - Carrossel ou grid com 2–3 depoimentos em destaque (textos curtos)
   - Botão "Ver todos os cases" → `/cases`

4. **CTA Final**
   - Bloco de chamada com fundo colorido: *"Pronto para cuidar do seu coração?"*
   - Botão "Fale Conosco" → `/contato`

**Componentes a criar:**
- `HeroSection`
- `DiferenciaisGrid`
- `CasesPreview`
- `CTABanner`

---

### Módulo 2 — Quem Somos (`/quem-somos`)

**Objetivo:** Humanizar o Dr. Rodrigo, apresentar sua filosofia, especialização e o espaço físico do consultório.

**Seções:**

1. **Biografia**
   - Foto profissional do Dr. Rodrigo
   - Texto sobre formação médica, especializações em cardiologia e medicina integrativa
   - Filosofia de atendimento: *"tratar o paciente como um todo"*
   - CRM e credenciais visíveis

2. **Nossa Abordagem**
   - Explicação breve da medicina integrativa aplicada à cardiologia
   - Como funciona na prática: consulta, exames, acompanhamento

3. **O Consultório**
   - Fotos da estrutura física (galeria ou slider)
   - Endereço: Feira de Santana — BA
   - Mapa embarcado (Google Maps embed)
   - Horários de funcionamento

**Componentes a criar:**
- `BiografiaSection`
   - `AbordagemSection`
- `ConsultorioGaleria`
- `MapaEndereco`

---

### Módulo 3 — Cases de Sucesso (`/cases`)

**Objetivo:** Construir prova social com depoimentos reais (anônimos ou autorizados) e vídeos de pacientes.

**Funcionalidades:**
- Grid de cards com depoimentos em texto (iniciais do paciente, idade, condição tratada — sem identificação completa)
- Embed de vídeos de depoimento (YouTube/Vimeo) para casos autorizados
- Filtro por tipo: "Texto" / "Vídeo" / "Todos"
- Paginação ou infinite scroll

**Fonte dos dados:** Tabela `cases` no Supabase (gerenciada pelo painel admin)

**Componentes a criar:**
- `CasesGrid`
- `CaseCard` (variante texto)
- `CaseCardVideo` (variante vídeo com embed)
- `CasesFilter`

---

### Módulo 4 — Fale Conosco (`/contato`)

**Objetivo:** Oferecer múltiplos canais de contato e agendamento de consulta.

**Canais disponíveis (todos na mesma página):**

1. **Formulário de contato**
   - Campos: Nome, E-mail, Telefone, Mensagem
   - Envio via Supabase Edge Function (salva na tabela `contatos` + envia e-mail de notificação)
   - Validação com Zod + React Hook Form
   - Feedback de sucesso/erro com toast (shadcn/ui)

2. **WhatsApp**
   - Botão flutuante fixo em todas as páginas (canto inferior direito)
   - Botão destacado na página de contato
   - Link com mensagem pré-preenchida: `https://wa.me/55XXXXXXXXXXX?text=Olá, gostaria de agendar uma consulta`

3. **Agendamento online**
   - Embed ou link para ferramenta de agendamento (ex: Doctoralia, Calendly — a definir)
   - Seção com instruções de como funciona o agendamento

4. **Informações de contato**
   - Endereço completo, telefone, e-mail do consultório
   - Horário de atendimento

**Componentes a criar:**
- `ContatoForm`
- `WhatsAppButton` (global, fixo em `RootLayout`)
- `AgendamentoEmbed`
- `InfoContato`

---

### Módulo 5 — Painel Administrativo (`/admin`)

**Objetivo:** Permitir que o Dr. Rodrigo gerencie o conteúdo do site sem precisar de programador.

**Autenticação:** Supabase Auth (e-mail + senha, sem registro público — apenas contas criadas manualmente no Supabase Dashboard)

**Funcionalidades:**

1. **Login** (`/admin/login`)
   - Formulário de login protegido
   - Redirect para `/admin/dashboard` após autenticação
   - Redirect para `/admin/login` se não autenticado (React Router loader ou middleware)

2. **Dashboard** (`/admin/dashboard`)
   - Visão geral: total de cases, total de mensagens recebidas, atalhos

3. **Gerenciar Cases** (`/admin/cases`)
   - Listar todos os cases (tabela com busca)
   - Criar novo case (modal ou página dedicada)
   - Editar case existente
   - Excluir case (soft delete: campo `ativo`)
   - Upload de foto do paciente (Supabase Storage)
   - Campo para URL de vídeo (YouTube/Vimeo)

4. **Mensagens recebidas** (`/admin/mensagens`)
   - Listar mensagens do formulário de contato
   - Marcar como lida/respondida
   - Visualizar detalhes

5. **Configurações** (`/admin/configuracoes`) *(opcional para versão inicial)*
   - Editar informações de contato (telefone, WhatsApp, endereço)
   - Editar horários de funcionamento

**Componentes a criar:**
- `AdminLayout` (sidebar + header separados do RootLayout público)
- `ProtectedRoute` (HOC ou loader que verifica sessão Supabase)
- `CasesTable`, `CaseForm`
- `MensagensTable`

---

## 5. Schema do Banco de Dados (Supabase/Postgres)

### Tabela: `cases`
```sql
create table cases (
  id          uuid primary key default gen_random_uuid(),
  tipo        text not null check (tipo in ('texto', 'video')),
  paciente    text,          -- iniciais ou pseudônimo (ex: "M.S., 58 anos")
  condicao    text,          -- ex: "Hipertensão arterial"
  depoimento  text,          -- texto do depoimento
  video_url   text,          -- URL YouTube/Vimeo (nullable se tipo='texto')
  foto_url    text,          -- URL do Supabase Storage (nullable)
  destaque    boolean default false,  -- aparece na Home
  ativo       boolean default true,   -- soft delete
  ordem       integer default 0,      -- ordenação manual
  created_at  timestamptz default now()
);

-- RLS: leitura pública apenas para cases ativos; escrita somente autenticados
alter table cases enable row level security;

create policy "cases_public_read"
  on cases for select using (ativo = true);

create policy "cases_admin_all"
  on cases for all using (auth.role() = 'authenticated');
```

### Tabela: `contatos`
```sql
create table contatos (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  email       text not null,
  telefone    text,
  mensagem    text not null,
  lido        boolean default false,
  respondido  boolean default false,
  created_at  timestamptz default now()
);

-- RLS: apenas admin lê; inserção pública (via Edge Function com service key)
alter table contatos enable row level security;

create policy "contatos_admin_read"
  on contatos for select using (auth.role() = 'authenticated');

-- Inserção feita pela Edge Function com service_role key (sem política pública)
```

### Supabase Storage
- Bucket: `cases-fotos` (público para leitura)
- Upload feito apenas por usuários autenticados

---

## 6. Edge Functions

### `send-contact-email`
- **Trigger:** POST pelo formulário de contato no frontend
- **Ação:** Insere registro na tabela `contatos` + envia e-mail de notificação para o Dr. Rodrigo
- **Serviço de e-mail:** Resend (ou SendGrid) — configurar `RESEND_API_KEY` nas env vars do Supabase
- **Localização:** `supabase/functions/send-contact-email/index.ts`

---

## 7. SEO e Performance

- Usar `react-helmet-async` para meta tags dinâmicas por página
- Cada página deve ter `<title>` e `<meta name="description">` únicos
- Foco em SEO local: *"cardiologista Feira de Santana"*, *"medicina integrativa Feira de Santana BA"*
- Imagens otimizadas: usar WebP, lazy loading nativo (`loading="lazy"`)
- Lighthouse score alvo: Performance ≥ 90, Accessibility ≥ 90

### Meta tags por página (exemplos)
| Página | Title | Description |
|---|---|---|
| Home | Dr. Rodrigo Cacau — Cardiologista em Feira de Santana | Cardiologia clínica e medicina integrativa em Feira de Santana - BA. Agende sua consulta. |
| Quem Somos | Sobre o Dr. Rodrigo Cacau — Medicina Integrativa | Conheça a trajetória e a abordagem integrativa do Dr. Rodrigo Cacau, cardiologista em Feira de Santana. |
| Cases | Cases de Sucesso — Dr. Rodrigo Cacau | Depoimentos de pacientes que transformaram sua saúde cardiovascular com medicina integrativa. |
| Contato | Agende sua Consulta — Dr. Rodrigo Cacau | Entre em contato pelo formulário, WhatsApp ou agende online com o Dr. Rodrigo Cacau em Feira de Santana. |

---

## 8. Estrutura de Pastas

```
src/
├── components/
│   ├── ui/              # shadcn/ui (não editar manualmente)
│   ├── layout/          # Header, Footer, RootLayout, AdminLayout
│   ├── home/            # HeroSection, DiferenciaisGrid, CasesPreview, CTABanner
│   ├── quem-somos/      # BiografiaSection, AbordagemSection, ConsultorioGaleria, MapaEndereco
│   ├── cases/           # CasesGrid, CaseCard, CaseCardVideo, CasesFilter
│   ├── contato/         # ContatoForm, AgendamentoEmbed, InfoContato, WhatsAppButton
│   └── admin/           # AdminLayout, ProtectedRoute, CasesTable, CaseForm, MensagensTable
├── pages/
│   ├── HomePage.tsx
│   ├── QuemSomosPage.tsx
│   ├── CasesPage.tsx
│   ├── ContatoPage.tsx
│   └── admin/
│       ├── AdminLoginPage.tsx
│       ├── AdminDashboardPage.tsx
│       ├── AdminCasesPage.tsx
│       └── AdminMensagensPage.tsx
├── hooks/
│   ├── useCases.ts
│   ├── useContatos.ts
│   └── useAuth.ts
├── lib/
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # cn() e helpers
├── services/
│   └── contactService.ts
├── types/
│   └── index.ts         # tipos: Case, Contato, etc.
└── main.tsx
```

---

## 9. Ordem de Desenvolvimento (Módulos)

Desenvolver **nesta sequência**, um módulo por vez, aguardando aprovação antes de avançar:

1. **Módulo 0** — Setup e configuração base
2. **Módulo 1** — Home (com conteúdo placeholder)
3. **Módulo 2** — Quem Somos
4. **Módulo 3** — Cases de Sucesso (frontend com dados mockados)
5. **Módulo 4** — Fale Conosco (formulário + WhatsApp + agendamento)
6. **Módulo 5** — Painel Admin (auth + CRUD de cases + visualizar mensagens)
7. **Módulo 6** *(final)* — Integração real: conectar Cases e Contato ao Supabase, Edge Function de e-mail, deploy final

---

## 10. Regras para o Claude Code

- **Nunca** avance para o próximo módulo sem instrução explícita.
- Ao iniciar cada módulo, listar os arquivos que serão criados/modificados.
- Preferir componentes pequenos e reutilizáveis em vez de arquivos monolíticos.
- Todo componente novo deve ter tipagem TypeScript completa (sem `any`).
- Usar shadcn/ui sempre que existir um componente adequado (Button, Card, Dialog, Form, Input, Toast, etc.) — não reinventar.
- Imagens e assets ficam em `public/` ou no Supabase Storage; nunca embarcados em base64 no código.
- Comentários em código: apenas quando a lógica não é óbvia. Não comentar o que já é autoexplicativo.
- Commits em português, descritivos, no formato: `feat: adiciona HeroSection na Home` / `fix: corrige validação do formulário de contato`.
