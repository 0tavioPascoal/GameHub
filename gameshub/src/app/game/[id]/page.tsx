import { GameProps } from "@/utils/types/Game"
import { redirect } from "next/navigation"
import Image from 'next/image'
import { Container } from "@/Components/Container"
import { Label } from "@/Components/Label"
import { GameCard } from "@/Components/GameCard"

async function getDataID(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {cache: 'no-store'})
    return res.json()
  } catch (e) {
    throw new Error("Failed to fetch data")
  }
}

async function getGameDay() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: 'no-store'})
    return res.json()
  } catch (e) {
    throw new Error("Failed to fetch data")
  }
}

export default async function GameDetails({
  params: { id }
}: {
  params: { id: string }
}) {

  const dataID: GameProps = await getDataID(id)
  const dataGameDay:GameProps = await getGameDay()

  console.log(dataID)

  if (!dataID) {
    redirect('/')
  }
  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-80"
          alt="Imagem detalhe do jogo"
          src={dataID.image_url}
          fill={true}
          priority={true}
          quality={100}
          sizes='(max-widht: 768px) 100vw, (max-widht: 1200px) 33vw'
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{dataID.title}</h1>
        <p>{dataID.description}</p>


        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {dataID.platforms.map((i) => (
            <Label name={i} key={i} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {dataID.categories.map((i) => (
            <Label name={i} key={i} />
          ))}
        </div>

        <p className="py-4"><strong>Data do Lançamento:</strong>{dataID.release}</p>
      </Container>

          <h2 className="font-bold text-lg mt-7 mb-2">Jogo Recomendado:</h2>
          <div className="flex">
            <div className="flex-grow">
              <GameCard data={dataGameDay}/>
            </div>
          </div>

    </main>
  )
}