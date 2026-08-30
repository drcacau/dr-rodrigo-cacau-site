-- Módulo 6 — seed inicial de cases (mesmos dados que estavam mockados no frontend)

insert into cases (tipo, paciente, condicao, depoimento, video_url, destaque, ativo, ordem, created_at)
values
  ('texto', 'M.S., 58 anos', 'Hipertensão arterial',
   'Com o acompanhamento do Dr. Rodrigo, consegui controlar minha pressão sem abrir mão da minha rotina.',
   null, true, true, 1, '2026-06-01T12:00:00Z'),
  ('video', 'J.A., 47 anos', 'Check-up cardiometabólico',
   'Depoimento em vídeo sobre a mudança de hábitos após o check-up.',
   null, true, true, 2, '2026-05-20T12:00:00Z'),
  ('texto', 'R.P., 63 anos', 'Pós-operatório cardíaco',
   'Atendimento humano, atencioso e extremamente competente. Recomendo de olhos fechados.',
   null, true, true, 3, '2026-05-10T12:00:00Z'),
  ('texto', 'A.C., 52 anos', 'Colesterol elevado',
   'A abordagem integrativa mudou minha relação com a alimentação. Meus exames melhoraram muito.',
   null, false, true, 4, '2026-04-28T12:00:00Z'),
  ('video', 'F.O., 61 anos', 'Arritmia cardíaca',
   'Depoimento em vídeo sobre o diagnóstico e tratamento da arritmia.',
   null, false, true, 5, '2026-04-15T12:00:00Z'),
  ('texto', 'L.F., 39 anos', 'Prevenção cardiovascular',
   'Comecei o acompanhamento por prevenção e hoje tenho muito mais consciência sobre minha saúde.',
   null, false, true, 6, '2026-03-30T12:00:00Z'),
  ('texto', 'V.M., 55 anos', 'Diabetes tipo 2',
   'O olhar cardiometabólico ajudou a controlar minha glicemia e minha pressão ao mesmo tempo.',
   null, false, true, 7, '2026-03-12T12:00:00Z'),
  ('video', 'S.T., 44 anos', 'Ansiedade e palpitações',
   'Depoimento em vídeo sobre o cuidado integrado entre coração e bem-estar emocional.',
   null, false, true, 8, '2026-02-22T12:00:00Z')
on conflict do nothing;
