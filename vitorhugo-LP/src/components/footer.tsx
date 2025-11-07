import linkedin from '../assets/images/linkedin.png'
import whatsapp from '../assets/images/whatsapp.png'
import footerImg from '../assets/images/FooterImg.png'

export const Footer = () => {
    return(
        <footer id='Contato' className='flex w-full h-auto flex-col items-center bg-[var(--bege)]'>
        <div className='w-full h-50 bg-cover bg-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' style={{ backgroundImage: `url(${footerImg})` }}>

        </div>
        <div className='flex w-full min-h-90 flex-col xl:flex-row items-center'>
          <div className='flex w-[50vw] flex-col justify-center items-center'>
          <h1 className='p-5 mt-10 font-bold text-[21pt] tracking-[5px] hover:tracking-[10px] duration-500' style={{ fontFamily: 'Alegreya SC, serif' }}>Contato</h1>
            <div className='flex justify-center items-center mt-8'>
              <h2 className='text-justify' style={{ fontFamily: 'Alegreya SC, serif' }}>Quer saber mais, pedir um orçamento ou conversar sobre o seu projeto? Fale comigo!</h2>
            </div>
            <div className='flex h-[20vh] flex-col justify-start items-center p-10'>
              <div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=editorvitorhugo@gmail.com" style={{ fontFamily: 'Alegreya SC, serif' }} className='underline text-[var(--marrom)]'  target="_blank" rel="noopener noreferrer">
                editorvitorhugo@gmail.com
                </a>  
              </div>
              <div className='flex flex-row gap-5 items-center mt-5'>     
                <button>
                  <a href="https://www.linkedin.com/in/vitorhugobatista/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" width={35}/>
                  </a>
                </button>

                <button>
                  <a href="https://wa.me/+5541996485933" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="" width={35}/>
                    </a>
                    </button>
              </div>         
            </div>
          </div>

          <div  className='w-full xl:w-[50vw] cursor-default' style={{ fontFamily: 'Alegreya SC, serif' }}>
            <div className={`flex w-full h-90 bg-cover bg-right justify-center items-center flex-col filter grayscale-50`}>
              <div  className='flex w-full justify-center mt-5'>
                <p className='text-[30pt] text-center text-black'>Horário de Atendimento</p>
              </div>
            <div className='flex w-full justify-center  flex-col'>
              <p   className='text-[26pt] text-center text-black'> De segunda a sexta das 09h às 18h</p>
              <p   className='text-[26pt] text-center text-black'>Sábado das 09h às 12h</p>
            </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full'>
          <div className='flex w-full'>
            <p className=' text-justify'>Revisor Vitor Hugo | 2025 © Todos os direitos reservados.</p>
          </div>
          
        </div>
      </footer>
    )
}