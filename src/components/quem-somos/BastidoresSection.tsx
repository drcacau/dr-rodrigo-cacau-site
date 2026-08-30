const videos = [
  { id: 'kjNnz_h-z68', titulo: 'Bastidores de atendimentos' },
  { id: 'Lh1t8GBLY9M', titulo: 'Um pouco do nosso dia a dia' },
]

export function BastidoresSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">
          Conheça Nosso Dia a Dia
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Bastidores do consultório e do atendimento do Dr. Rodrigo Cacau.
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
          {videos.map((video) => (
            <div key={video.id}>
              <div className="aspect-9/16 overflow-hidden rounded-xl ring-1 ring-border">
                <iframe
                  title={video.titulo}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="size-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">{video.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
