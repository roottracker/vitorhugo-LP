import './App.css'
import { NavBar } from './components/navBar'
import pfp from './assets/images/pfp.jpeg'
import { Card } from './components/cards'
import { Portifólio } from './components/portifolio'
import { useState } from 'react'
import { Footer } from './components/footer'




function App() {
  const [showPage, setShowPage] = useState(1);

  const handleShowBtn = () => {
    if(showPage<4) setShowPage(showPage+1);
  }

  var text1 = "Cuido da clareza, coerência e correção do seu texto, aprimorando sua estrutura sem alterar sua voz. Cada palavra é revisada com atenção técnica e sensibilidade, garantindo fluidez e precisão."
  var text2 = "Adequo seu trabalho às normas exigidas (ABNT, APA ou outras), organizando citações, referências, margens e estrutura. Um cuidado essencial para que o conteúdo se apresente de forma profissional e padronizada."
  var text3 = "Ofereço uma análise aprofundada do seu texto literário, observando enredo, personagens, ritmo e estilo. A leitura crítica aponta caminhos de aprimoramento e fortalece o propósito da obra."
  var text4 = "Acompanho autores em seus processos de escrita e reescrita, ajudando a desenvolver projetos, estruturar narrativas e aperfeiçoar a voz autoral. Um trabalho de parceria, escuta e construção."
  return (
    <>
      <NavBar showName={true} navStatic={true} opcao1='Quem Sou'op1href='#QuemSou' opcao2='Serviços' op2href='#Servicos' opcao3='Portifólio' op3href='#Portifolio' opcao4='Contato' op4href='#Contato'/>
     <main>
       <section className='w-full'>
        <div className='flex w-full h-170 drop-shadow-xl/10 bg-[linear-gradient(rgba(0,0,0,0.4),_rgba(0,0,0,0.4)),url(./assets/images/Banner.png)] bg-size-[1700px] bg-no-repeat bg-center'>
          <div className='flex flex-col gap-5 w-full h-full justify-center items-center'>
            <p className='w-full md:w-[550px] text-center text-[18pt] text-white'>Ajudo autores, pesquisadores e profissionais a aperfeiçoar seus textos para que comuniquem com precisão e impacto.</p>
            <button><a href=""><p className='bg-(--bege) w-35 p-2 rounded hover:bg-(--marrom) hover:scale-110 hover:text-white duration-500'>acessar</p></a></button>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full h-auto'>        
        {/* Apresentação da pessoa */}
        <div id="QuemSou" className='flex w-full h-auto flex-col'>
          <div className='flex w-full h-auto flex-col items-center xl:flex-row '>
            <div className='flex w-full h-[100vh] justify-center items-center bg-[url(./assets/images/background.jpg)] bg-cover bg-center bg-no-repeat relative xl:w-[50vw]'>
              <img 
                src={pfp} 
                alt="pfp" 
                className='w-[250px] rounded-xl hover:scale-[1.1] duration-500 md:w-[350px] ' 
              />
            </div>
            <div className='flex w-full md:h-[100vh] flex-col items-center justify-start xl:w-[50vw] shadow-[inset_0_0_50px_rgba(0,0,0,0.4)] bg-[var(--verde-claro)] '>
              <div className='flex w-full h-50 justify-center items-center'>
                <h1 className='font-mono text-[20pt] font-semibold tracking-[5px] underline'>Quem Sou?</h1>
              </div>
              <div className='text-shadow-sm'>
                <p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify font-mono'>
                Desde cedo, encontrei nas palavras um espaço de <strong>encantamento</strong> e <strong>descoberta</strong>. 
                Essa paixão me levou a trilhar um caminho inteiro entre livros, editoras e revistas — 
                experiências que moldaram meu olhar para o texto e a linguagem.</p>
             <br /> <p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify font-mono'>
              Sou revisor de textos e integrante da equipe editorial da Revista Cidades (Qualis A2). 
                Além disso, colaboro como revisor e redator para diversas editoras e revistas, unindo <strong>técnica</strong> e 
                <strong> sensibilidade</strong> para ajudar autores a transmitirem suas ideias com clareza, fluidez e propósito.</p>
              <br /><p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify font-mono'>
                Mais do que corrigir, acredito que revisar é acompanhar o texto em seu processo de amadurecimento, 
                respeitando sua voz e cuidando para que cada palavra cumpra seu papel.
                </p>
              </div>
                        
            </div>
          </div> 
        </div>
      </section>

      <section id="Servicos" className='flex w-full h-auto flex-col'>
        <div className='flex w-full justify-center mt-10 mb-5'>
          <h1 className='font-mono text-[21pt] font-semibold tracking-wide hover:tracking-wider duration-400 cursor-default'>Serviços</h1>
        </div>

        <div className='flex w-full min-h-100 h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default'>
          <Card name='Revisão de Textos' img='' text={text1}/>
          <Card name='Formatação de Trabalhos Acadêmicos' img='' text={text2}/>
          <Card name='Leitura Crítica' img='' text={text3}/>
          <Card name='Orientação Literária' img='' text={text4}/>
        </div>

        <div className='flex w-full h-35 justify-center items-center'>
          <button className='w-30 h-10 border rounded-xl hover:bg-black hover:text-white duration-150'><a href="Sobre">Saiba Mais</a></button>
        </div>
      </section>

      <section id='Portifolio' className='flex w-full h-auto flex-col items-center'>
        <div className='flex w-full justify-center mb-10'>
          <h1 className='text-[24pt] font-mono cursor-default uppercase font-bold hover:tracking-wider duration-200'>Portifólio</h1>
        </div>
        <Portifólio showMore={showPage}/>
        <div className='flex w-full h-30 justify-center items-center'>
          <button onClick={handleShowBtn} className={`${showPage<4 ? '' : 'hidden'} border h-15 w-40 rounded-xl hover:bg-black hover:text-white duration-200`}>
            {showPage<3 ? 'Ver Mais' : 'Ver Todos'}
          </button>
        </div>
      </section>

      <Footer/>
     </main>
     
    </>
  )
}

export default App