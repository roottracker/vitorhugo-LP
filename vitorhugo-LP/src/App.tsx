import './App.css'
import { NavBar } from './components/navBar'
import pfp from './assets/images/pfp.jpeg'
import pfpBack from './assets/images/background.jpg'


function App() {

  return (
    <>
      <NavBar opcao1='Inicio' opcao2='Quem Sou' opcao3='Trabalhos' opcao4='Contato'/>
     <main>
       <section id="inicio" className='w-full'>
        <div className='flex w-full h-170 drop-shadow-xl/10 bg-[linear-gradient(rgba(0,0,0,0.4),_rgba(0,0,0,0.4)),url(./assets/images/testeBanner.jpg)] bg-cover bg-top'>
          <div className='flex flex-col gap-5 w-full h-full justify-center items-center'>
            <p className='w-[250px] text-center text-[18pt] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button><a href=""><p className='bg-(--bege) w-35 p-2 rounded hover:bg-(--marrom) hover:scale-110 hover:text-white duration-500'>acessar</p></a></button>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full h-auto'>        
        {/* Apresentação da pessoa */}
        <div className='flex w-full h-[100vh] flex-col'>
          <div className='flex w-full h-full flex-col items-center md:flex-row md:gap-0'>
            <div className='flex w-full min-h-[500px] justify-center items-center bg-[url(./assets/images/background.jpg)] bg-cover bg-center bg-no-repeat relative md:w-[50vw] md:h-full'>
              <img 
                src={pfp} 
                alt="pfp" 
                className='w-[350px] rounded-xl hover:scale-[1.1] duration-500 md:w-[350px] ' 
              />
            </div>
            <div className='flex w-full h-full flex-col items-center justify-start md:mt-0 md:w-[50vw] shadow-[inset_0_0_50px_rgba(0,0,0,0.4)] bg-[var(--verde-claro)]'>
              <div className='flex w-full h-50 justify-center items-center md:h-'>
                <h1 className='font-mono text-[20pt]'>Quem Sou?</h1>
              </div>
              <p className='text-[14pt] w-[250px] text-center md:text-justify'>Olá! Como vai? Meu nome é Vitor e sou estudante de Letras, com ênfase em Língua Portuguesa. <br/><br/>
                Apaixonado por literatura, atuo como revisor de textos e acumulo experiência em diferentes áreas do universo editorial. <br/> <br/>
                Já trabalhei como coordenador editorial, editor comercial, assistente de livraria, bibliotecário, livreiro e vendedor interno.</p>
            </div>
          </div> 
        </div>
      </section>

      <section>

      </section>
      {/* <footer id='#Contato' className='flex w-full max-h-[400px] h-full'>
        <div>
          <h1>Contato</h1>
        </div>
        <div>
          <form action="">
            <input type="text" />
          </form>
        </div>
        <div></div>
      </footer> */}
     </main>
     
    </>
  )
}

export default App
