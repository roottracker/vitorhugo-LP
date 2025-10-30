import { useState } from "react"
import menuBtn from "../assets/images/menu.png"
import closeBtn from '../assets/images/close.png'

    interface NavBarProps {
      opcao1: string
      opcao2: string
      opcao3: string
      opcao4: string
    }

export const NavBar = (props : NavBarProps) => {
    const [btn, setBtn] = useState(false)
    return(
        <section className='z-999 fixed w-full'>
        <header className='flex w-full h-25 bg-[var(--amarelo-queimado)]'>
          <nav className='flex w-full flex-col md:flex-row justify-center items-center md:gap-50'>           
            <div className='hidden md:flex h-full w-[60%] md:w-[55rem] ml-10 justify-center items-center md:ml-0'>
              <h1>Vitor Hugo</h1>
            </div>
            {/* Nav Desktop */}
            <div className='hidden md:flex w-[50%] font-mono'>
              <ul className='flex gap-15'>
                <li><a href="#inicio">{props.opcao1}</a></li>
                <li><a>{props.opcao2}</a></li>
                <li><a>{props.opcao3}</a></li>
                <li><a>{props.opcao4}</a></li>
              </ul>
            </div>

            <div className='md:hidden flex h-full w-full justify-center items-center'>
              <button onClick={() => setBtn(!btn)}><img src={btn ? closeBtn : menuBtn} width={btn ? 20 : 30}/></button>
            </div>

            {/* Nav Mobile */}
          { btn && (
            <div className='absolute z-999 md:hidden w-full h-50 mt-70'>
              <div className=' bg-(--amarelo-queimado) p-10 inset-shadow-sm inset-shadow-900'>
                <ul className='flex gap-15 flex-col items-center'>
                <li><a>{props.opcao1}</a></li>
                <li><a>{props.opcao2}</a></li>
                <li><a>{props.opcao3}</a></li>
                <li><a>{props.opcao4}</a></li>
              </ul>
              </div>
            </div>
          )}
          </nav>
        </header>
        {/* Banner Abaixo*/}
      </section>
    )
}