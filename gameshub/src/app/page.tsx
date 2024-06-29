//imports
import Link from 'next/link'
import Image from 'next/image'
import {BsArrowRightCircle} from 'react-icons/bs'

//Components
import { Container } from "@/Components/Container";
import { Search } from '@/Components/Search'
import { GameList } from '@/Components/GameList';

//types
import { GameProps } from '@/utils/types/Game'


async function getGamesHub(){
  try{
     const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: { revalidate: 300}})
     return res.json()
  } catch(e){
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const GamesHub: GameProps = await getGamesHub()

  return (
    <main className="w-full">
      <Container>
        <Search/>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você...
        </h1>
        <Link href={`/game/${GamesHub.id}`}>
          <section className='w-full bg-black rounded-lg'>
          <div className='w-full max-h-96 h-96 relative rounded-lg'>
            <div className='absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2'>
              <p className='font-bold text-xl text-white'>{GamesHub.title}</p>
              <BsArrowRightCircle size={24} color='#FFF'/>
            </div>
          <Image
          src={GamesHub.image_url}
          alt={GamesHub.title}
          priority={true}
          quality={100}
          fill={true}
          className='max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 '
            sizes='(max-widht: 768px) 100vw, (max-widht: 1200px) 33vw'
          />
          </div>
          </section>
        </Link>

        <h2 className='text-lg font-bold mt-8 mb-5'>
          Jogos Para Conhecer
        </h2>
        <GameList/>
      </Container>
    </main>

  )
}
