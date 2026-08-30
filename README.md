# Dr. Rodrigo Cacau — Medicina Integrada

Site institucional do Dr. Rodrigo Cacau (Cardiologia Clínica, Check-up Cardiometabólico e Medicina Integrativa — Feira de Santana, BA).

## Stack

- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (Postgres + Auth + Edge Functions + Storage)
- React Router DOM
- TanStack Query
- React Hook Form + Zod

## Desenvolvimento

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` e preencha as credenciais do Supabase:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — lint (oxlint)
- `npm run preview` — preview do build de produção
