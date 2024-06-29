import { GameProps } from "@/utils/types/Game"
import { GameCard } from "@/Components/GameCard"

//Components
import { Container } from "@/Components/Container"
import { Search } from "@/Components/Search"

async function getData(title: string) {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
    return res.json()
  } catch (e) {
    return null
  }
}

export default async function PagSearch({
  params: { title }
}: {
  params: { title: string }
}
) {
  const games: GameProps[] = await getData(title)

  return (
    <main className="w-full text-black">
      <Container>
        <Search />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que Achamos...
        </h1>

        {!games && (
          <p>Esse jogo não foi encontrado!...</p>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4">
          {games && games.map((item) => (
            <h1><GameCard key={item.id} data={item} /></h1>
          ))}
        </section>
      </Container>
    </main>
  )
}