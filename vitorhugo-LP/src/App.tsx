import { useState } from 'react'
import './App.css'
import testeBanner from './assets/images/testeBanner.jpg'
import menuBtn from "./assets/images/menu.png"
import closeBtn from './assets/images/close.png'

function App() {

  const [btn,setBtn] = useState(false);
  
  return (
    <>
      <section className='w-full'>
        <header className='flex w-full h-30 bg-(--amarelo-queimado)'>
          <nav className='flex w-full flex-col md:flex-row justify-center items-center md:gap-50'>           
            <div className='hidden md:flex h-full w-[60%] md:w-[55rem] ml-10 justify-center items-center md:ml-0'>
              <h1>Vitor Hugo</h1>
            </div>
            {/* Nav Desktop */}
            <div className='hidden md:flex w-[50%]'>
              <ul className='flex gap-15'>
                <li><a>opcao 1</a></li>
                <li><a>Opcao 2</a></li>
                <li><a>Opcao 3</a></li>
                <li><a>Opcao 4</a></li>
              </ul>
            </div>

            <div className='md:hidden flex h-full w-full justify-center items-center'>
              <button onClick={() => setBtn(!btn)}><img src={btn ? closeBtn : menuBtn} width={btn ? 20 : 30}/></button>
            </div>

            {/* Nav Mobile */}
          { btn && (
            <div className='absolute z-999 md:hidden w-full h-50 mt-70'>
              <div className=' bg-(--amarelo-queimado-escuro) p-10 inset-shadow-sm inset-shadow-900'>
                <ul className='flex gap-15 flex-col items-center'>
                <li><a>opcao 1</a></li>
                <li><a>Opcao 2</a></li>
                <li><a>Opcao 3</a></li>
                <li><a>Opcao 4</a></li>
              </ul>
              </div>
            </div>
          )}
          </nav>
        </header>
        {/* Banner Abaixo*/}
        <div className='flex w-full max-h-180 drop-shadow-xl/10'>
          <img src={testeBanner} alt="imgTeste" className='relative w-full object-cover object-top-right contrast-50' />
        </div>
      </section>
    </>
  )
}

export default App
