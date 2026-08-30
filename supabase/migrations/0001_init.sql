-- Módulo 6 — schema inicial (cases, contatos, storage)

create table if not exists cases (
  id          uuid primary key default gen_random_uuid(),
  tipo        text not null check (tipo in ('texto', 'video')),
  paciente    text,
  condicao    text,
  depoimento  text,
  video_url   text,
  foto_url    text,
  destaque    boolean default false,
  ativo       boolean default true,
  ordem       integer default 0,
  created_at  timestamptz default now()
);

alter table cases enable row level security;

drop policy if exists "cases_public_read" on cases;
create policy "cases_public_read"
  on cases for select using (ativo = true);

drop policy if exists "cases_admin_all" on cases;
create policy "cases_admin_all"
  on cases for all using (auth.role() = 'authenticated');

create table if not exists contatos (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  email       text not null,
  telefone    text,
  mensagem    text not null,
  lido        boolean default false,
  respondido  boolean default false,
  created_at  timestamptz default now()
);

alter table contatos enable row level security;

drop policy if exists "contatos_admin_read" on contatos;
create policy "contatos_admin_read"
  on contatos for select using (auth.role() = 'authenticated');

drop policy if exists "contatos_admin_update" on contatos;
create policy "contatos_admin_update"
  on contatos for update using (auth.role() = 'authenticated');

-- Inserção pública feita via Edge Function com service_role key (sem política pública de insert)

-- Storage: bucket para fotos dos cases
insert into storage.buckets (id, name, public)
values ('cases-fotos', 'cases-fotos', true)
on conflict (id) do nothing;

drop policy if exists "cases_fotos_public_read" on storage.objects;
create policy "cases_fotos_public_read"
  on storage.objects for select
  using (bucket_id = 'cases-fotos');

drop policy if exists "cases_fotos_admin_insert" on storage.objects;
create policy "cases_fotos_admin_insert"
  on storage.objects for insert
  with check (bucket_id = 'cases-fotos' and auth.role() = 'authenticated');

drop policy if exists "cases_fotos_admin_update" on storage.objects;
create policy "cases_fotos_admin_update"
  on storage.objects for update
  using (bucket_id = 'cases-fotos' and auth.role() = 'authenticated');

drop policy if exists "cases_fotos_admin_delete" on storage.objects;
create policy "cases_fotos_admin_delete"
  on storage.objects for delete
  using (bucket_id = 'cases-fotos' and auth.role() = 'authenticated');
