import { useState } from "react"
import menuBtn from "../assets/images/menu.png"
import closeBtn from '../assets/images/close.png'

    interface NavBarProps {
      opcao1?: string
      op1href?: string
      opcao2?: string
      op2href?: string  
      opcao3?: string  
      op3href?: string
      opcao4?: string
      op4href?: string
      showName: boolean
      navStatic: boolean
    }

export const NavBar = (props : NavBarProps) => {
    const [btn, setBtn] = useState(false)

    return(
        <section className={`z-999 ${props.navStatic ? 'fixed' : 'static'} w-full`}>
        <header className='flex w-full h-15 bg-[var(--amarelo-queimado)]'>
          <nav className='flex w-full flex-col md:flex-row justify-center items-center md:gap-20'>           
            {
              props.showName && (
                <div className='hidden xl:flex h-full w-[50vw] justify-center items-center'>
                  <a href="/"><h1 className="font-bold text-[21pt]" style={{ fontFamily: 'Merriweather' }}>Revisor Vitor Hugo</h1></a>
                </div>
              )
            }
            {/* Nav Desktop */}
            <div className='hidden md:flex w-[90vw] justify-center'  style={{ fontFamily: 'Merriweather' }}>
              <ul className='flex gap-15 text-[14pt]'>
                <li><a href={props.op1href} className="hover:underline transition-2">{props.opcao1}</a></li>
                <li><a href={props.op2href} className="hover:underline transition-2">{props.opcao2}</a></li>
                <li><a href={props.op3href} className="hover:underline transition-2">{props.opcao3}</a></li>
                <li><a href={props.op4href} className="hover:underline transition-2">{props.opcao4}</a></li>
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
                <li><a href={props.op1href} onClick={() => setBtn(!btn)}>{props.opcao1}</a></li>
                <li><a href={props.op2href} onClick={() => setBtn(!btn)}>{props.opcao2}</a></li>
                <li><a href={props.op3href} onClick={() => setBtn(!btn)}>{props.opcao3}</a></li>
                <li><a href={props.op4href} onClick={() => setBtn(!btn)}>{props.opcao4}</a></li>
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