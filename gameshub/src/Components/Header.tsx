import Link from 'next/link'
import {LiaGamepadSolid} from 'react-icons/lia'

export function Header(){
  return(
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-lg mx-auto flex justify-center itens-center h-28 sm:justify-between ">
          <nav className='flex justify-center items-center gap-4'>
            <Link className='font-bold text-2xl pl-1' href='/'>
              <span className='text-blue-700'>Games</span>Hub
            </Link>

            <Link href='/'>
              Games
            </Link>

            <Link href='/profile'>
              Perfil
            </Link>
          </nav>

          <div className='hidden sm:flex justify-center items-center '>
            <Link href='/profile'>
            <LiaGamepadSolid 
            size={34}
            color='#475569'
            />
              </Link>
          </div>
      </div>
    </header>
  )
}