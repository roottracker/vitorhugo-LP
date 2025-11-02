import { useState } from "react"
import menuBtn from "../assets/images/menu.png"
import closeBtn from '../assets/images/close.png'

    interface NavBarProps {
      opcao1: string
      op1href: string
      opcao2?: string  
      opcao3?: string  
      opcao4?: string
    }

export const NavBar = (props : NavBarProps) => {
    const [btn, setBtn] = useState(false)
    return(
        <section className='z-999 fixed w-full'>
        <header className='flex w-full h-15 bg-[var(--amarelo-queimado)]'>
          <nav className='flex w-full flex-col md:flex-row justify-center items-center md:gap-20'>           
            <div className='hidden xl:flex h-full w-[50vw] justify-center items-center'>
              <a href="/"><h1>Vitor Hugo</h1></a>
            </div>
            {/* Nav Desktop */}
            <div className='hidden md:flex w-[50vw] font-mono justify-center'>
              <ul className='flex gap-15 text-[14pt]'>
                <li><a href={props.op1href} className="hover:underline transition-2">{props.opcao1}</a></li>
                <li><a href="#Servicos" className="hover:underline transition-2">{props.opcao2}</a></li>
                <li><a href="#Portifolio" className="hover:underline transition-2">{props.opcao3}</a></li>
                <li><a href="#Contato" className="hover:underline transition-2">{props.opcao4}</a></li>
              </ul>
            </div>

            <div className='md:hidden flex h-full w-full justify-center items-center'>
              <button onClick={() => setBtn(!btn)}><img src={btn ? closeBtn : menuBtn} width={btn ? 20 : 30}/></button>
            </div>

            {/* Nav Mobile */}
          { btn && (
            <div className='absolute z-999 md:hidden w-full h-50 mt-60'>
              <div className=' bg-(--amarelo-queimado) p-10 inset-shadow-sm inset-shadow-900'>
                <ul className='flex gap-15 flex-col items-center'>
                <li><a href={props.op1href}>{props.opcao1}</a></li>
                <li><a href="#Servicos">{props.opcao2}</a></li>
                <li><a href="#Portifolio">{props.opcao3}</a></li>
                <li><a href="#Contato">{props.opcao4}</a></li>
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