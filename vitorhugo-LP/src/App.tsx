import './App.css'
import { NavBar } from './components/navBar'
import pfp from './assets/images/pfp.jpeg'
import { Card } from './components/cards'
import gmail from './assets/images/gmail.png'
import linkedin from './assets/images/linkedin.png'
import whatsapp from './assets/images/whatsapp.png'



function App() {

  var text1 = "Cuido da clareza, coerência e correção do seu texto, aprimorando sua estrutura sem alterar sua voz. Cada palavra é revisada com atenção técnica e sensibilidade, garantindo fluidez e precisão."
  var text2 = "Adequo seu trabalho às normas exigidas (ABNT, APA ou outras), organizando citações, referências, margens e estrutura. Um cuidado essencial para que o conteúdo se apresente de forma profissional e padronizada."
  var text3 = "Ofereço uma análise aprofundada do seu texto literário, observando enredo, personagens, ritmo e estilo. A leitura crítica aponta caminhos de aprimoramento e fortalece o propósito da obra."
  var text4 = "Acompanho autores em seus processos de escrita e reescrita, ajudando a desenvolver projetos, estruturar narrativas e aperfeiçoar a voz autoral. Um trabalho de parceria, escuta e construção."
  return (
    <>
      <NavBar opcao1='Quem Sou' opcao2='Serviços' opcao3='Portifólio' opcao4='Contato'/>
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
        <div className='flex w-full justify-center p-20'>
          <h1 className='font-mono text-[21pt] font-semibold tracking-wide hover:tracking-wider duration-400 cursor-default'>Serviços</h1>
        </div>

        <div className='flex w-full min-h-100 h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default'>
          <Card name='Revisão de Textos' img='' text={text1}/>
          <Card name='Formatação de Trabalhos Acadêmicos' img='' text={text2}/>
          <Card name='Leitura Crítica' img='' text={text3}/>
          <Card name='Orientação Literária' img='' text={text4}/>
        </div>

        <div className='flex w-full h-50 justify-center items-center'>
          <button className='w-30 h-10 border rounded-xl hover:bg-black hover:text-white duration-150'><a href="/">Saiba Mais</a></button>
        </div>
      </section>

      <footer id='#Contato' className='flex w-full h-auto flex-col items-center bg-[var(--bege)]'>
        <h1 className='p-5 mt-10 font-bold text-[21pt] tracking-[5px] hover:tracking-[10px] duration-500'>Contato</h1>
        <div className='flex justify-center items-center mt-8'>
          <h2 className='text-center'>Quer saber mais, pedir um orçamento ou conversar sobre o seu projeto? Fale comigo!</h2>
        </div>
        <div className='flex w-full h-[20vh] flex-col justify-start items-center p-10'>
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=editorvitorhugo@gmail.com" className='underline text-[var(--marrom)]'>
            editorvitorhugo@gmail.com
            </a>  
          </div>
          <div className='flex flex-row gap-5 items-center mt-5'>     
            <button>
              <a href="">
                <img src={linkedin} alt="" width={35}/>
              </a>
            </button>

            <button>
              <a href="">
                <img src={whatsapp} alt="" width={35}/>
                </a>
                </button>
            
          </div>
          
        </div>
        <div className='flex flex-row w-full'>
          <div className='flex w-full'>
            <p className=' text-justify'>Revisor Vitor Hugo | 2025 © Todos os direitos reservados.</p>
          </div>
          <div>

          </div>
        </div>
      </footer>
     </main>
     
    </>
  )
}

export default App