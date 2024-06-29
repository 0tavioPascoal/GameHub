import { GameProps } from "@/utils/types/Game"
import { GameCard } from "./GameCard"

async function getListGames(){
try{
  const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next: { revalidate: 300}})
  return res.json()
} catch(e){
 throw new Error('Failed to fetch data')
}
}

export async function GameList(){
  const game: GameProps[] = await getListGames()
  return(
    <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4">
      {game.map( (item) => (
        <h1><GameCard key={item.id} data={item}/></h1>
      ))}
    </section>
  )
}