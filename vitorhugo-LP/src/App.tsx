import './App.css'
import { NavBar } from './components/navBar'
import { Card } from './components/cards'
import { Portifólio } from './components/portifolio'
import { useEffect, useState } from 'react'
import { Footer } from './components/footer'
import pfp from './assets/images/pfp.jpeg'
import  d1 from './assets/images/depoimentos/1.jpeg'
import  d2 from './assets/images/depoimentos/2.jpeg'
import  d3 from './assets/images/depoimentos/3.jpeg'
import  d4 from './assets/images/depoimentos/4.jpeg'
import  d5 from './assets/images/depoimentos/5.jpeg'
import { Modal } from './components/modal'




function App() {
  const [showPage, setShowPage] = useState(1);
  const [bigImg, setBigImg] = useState("");
  const [showModal, setShowModal] = useState(false)

  const handleShowBtn = () => {
    if(showPage<4) setShowPage(showPage+1);
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  var text1 = "Cuido da clareza, coerência e correção do seu texto, aprimorando sua estrutura sem alterar sua voz. Cada palavra é revisada com atenção técnica e sensibilidade, garantindo fluidez e precisão."
  var text2 = "Adequo seu trabalho às normas exigidas (ABNT, APA ou outras), organizando citações, referências, margens e estrutura. Um cuidado essencial para que o conteúdo se apresente de forma profissional e padronizada."
  var text3 = "Ofereço uma análise aprofundada do seu texto literário, observando enredo, personagens, ritmo e estilo. A leitura crítica aponta caminhos de aprimoramento e fortalece o propósito da obra."
  var text4 = "Acompanho autores em seus processos de escrita e reescrita, ajudando a desenvolver projetos, estruturar narrativas e aperfeiçoar a voz autoral. Um trabalho de parceria, escuta e construção."
  return (
    <>
      <NavBar showName={true} navStatic={true} opcao1='Quem Sou Eu'op1href='#QuemSou' opcao2='Serviços' op2href='#Servicos' opcao3='Portfólio' op3href='#Portifolio' opcao4='Contato' op4href='#Contato'/>
     <main>
      <Modal img={bigImg} showImg={showModal} onClose={() => setShowModal(false)}/>
       <section className='w-full'>
        <div className='flex w-full h-170 bg-[linear-gradient(rgba(0,0,0,0.4),_rgba(0,0,0,0.4)),url(./assets/images/Banner.png)] bg-size-[1700px] bg-no-repeat bg-center'>
          <div className='flex flex-col gap-5 w-full h-full justify-center items-center'>
            <p className='w-full md:w-[550px] text-center text-[18pt] text-white' style={{ fontFamily: 'Alegreya SC, serif' }}>Ajudo autores, pesquisadores e profissionais a aperfeiçoar seus textos para que comuniquem com precisão e impacto.</p>
            <button><a href=""><p className='bg-(--bege) w-35 p-2 rounded hover:bg-(--marrom) hover:scale-110 hover:text-white duration-500'>acessar</p></a></button>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full h-auto'>        
        {/* Apresentação da pessoa */}
        <div id="QuemSou" className='flex w-full h-auto flex-col'>
          <div className='flex w-full h-auto flex-col items-center xl:flex-row '>
            <div className='flex w-full h-[100vh] justify-center bg-[var(--amarelo-queimado-claro)] items-center bg-cover bg-center bg-no-repeat relative xl:w-[50vw]'>
              <div className='flex  w-[50vw] mt-8 justify-center'>
                <img 
                src={pfp} 
                alt="pfp" 
                className='w-[370px] h-[380px] object-cover rounded-xl hover:scale-[1.03] duration-1000 md:w-[250px] ' 
              />
              </div>
            </div>
            <div className='flex w-full md:h-[100vh] flex-col items-center justify-start xl:w-[50vw] bg-[var(--amarelo-queimado-claro)] '>
              <div className='flex w-full h-50 justify-center items-center'>
                <h1 className='text-[20pt] font-semibold tracking-[5px] underline' style={{ fontFamily: 'Alegreya SC, serif' }}>Quem sou eu</h1>
              </div>
              <div className='text-shadow-sm'>
                <p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify' style={{ fontFamily: 'Alegreya SC, serif' }}>
                Desde cedo, encontrei nas palavras um espaço de <strong>encantamento</strong> e <strong>descoberta</strong>. 
                Essa paixão me levou a trilhar um caminho inteiro entre livros, editoras e revistas — 
                experiências que moldaram meu olhar para o texto e a linguagem.</p>
             <br /> <p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify' style={{ fontFamily: 'Alegreya SC, serif' }}>
              Sou revisor de textos e integrante da equipe editorial da Revista Cidades (Qualis A2). 
                Além disso, colaboro como revisor e redator para diversas editoras e revistas, unindo <strong>técnica</strong> e 
                <strong> sensibilidade</strong> para ajudar autores a transmitirem suas ideias com clareza, fluidez e propósito.</p>
              <br /><p className='text-[14pt] w-[90vw] md:w-[60vw] xl:w-[550px] text-center md:text-justify' style={{ fontFamily: 'Alegreya SC, serif' }}>
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
          <h1 className='f text-[21pt] font-semibold hover:scale-[1.1] duration-400 cursor-default' style={{ fontFamily: 'Alegreya SC, serif' }}>Serviços</h1>
        </div>

        <div className='flex w-full min-h-100 h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default'>
          <Card name='Revisão de Textos' img='' text={text1}/>
          <Card name='Formatação de Trabalhos Acadêmicos' img='' text={text2}/>
          <Card name='Leitura Crítica' img='' text={text3}/>
          <Card name='Orientação Literária' img='' text={text4}/>
        </div>

        <div className='flex w-full h-35 justify-center items-center'>
          <button className='w-30 h-10 border rounded-xl hover:bg-black hover:text-white duration-150'><a href="Sobre" style={{ fontFamily: 'Alegreya SC, serif' }}>Saiba Mais</a></button>
        </div>
      </section>

      <section className='flex w-full min-h-100 h-auto border flex-col items-center p-10'>
        <div className='flex w-full h-10 justify-center mb-15'>
          <h1 style={{fontFamily: 'Alegreya SC'}} className='text-[24pt] cursor-default uppercase font-bold hover:tracking-wider duration-200'>Depoimentos</h1>
        </div>
        <div className='flex w-[60vw] flex-row flex-wrap justify-center gap-15'>
          <div className='flex border'>
            <img src={d1} alt="" width={350} onClick={() => {setBigImg(d1); setShowModal(true)}} className='cursor-pointer'/>
          </div>
          <div className='flex border'>
            <img src={d2} alt="" width={350} onClick={() => {setBigImg(d2); setShowModal(true)}} className='cursor-pointer'/>
          </div>
          <div className='flex border'>
            <img src={d3} alt="" width={350} onClick={() => {setBigImg(d3); setShowModal(true)}} className='cursor-pointer'/>
          </div>
          <div className='flex border'>
            <img src={d5} alt="" width={350} onClick={() => {setBigImg(d5); setShowModal(true)}} className='cursor-pointer'/>
          </div>          
          <div className='flex'>
            <img src={d4} alt="" onClick={() => {setBigImg(d4); setShowModal(true)}}  className='md:w-180 cursor-pointer'/>
          </div>
          
        </div>
      </section>

      <section id='Portifolio' className='flex w-full h-auto flex-col items-center'>
        <div className='flex w-full justify-center mb-10'>
          <h1 className='text-[24pt] cursor-default uppercase font-bold hover:tracking-wider duration-200' style={{ fontFamily: 'Alegreya SC, serif' }}>Portfólio</h1>
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