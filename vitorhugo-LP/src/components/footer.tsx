import linkedin from '../assets/images/linkedin.png'
import whatsapp from '../assets/images/whatsapp.png'

export const Footer = () => {
    return(
        <footer id='Contato' className='flex w-full h-auto flex-col items-center bg-[var(--bege)]'>
        <h1 className='p-5 mt-10 font-bold text-[21pt] tracking-[5px] hover:tracking-[10px] duration-500'>Contato</h1>
        <div className='flex w-[80vw] justify-center items-center mt-8'>
          <h2 className='text-justify'>Quer saber mais, pedir um orçamento ou conversar sobre o seu projeto? Fale comigo!</h2>
        </div>
        <div className='flex w-full h-[20vh] flex-col justify-start items-center p-10'>
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=editorvitorhugo@gmail.com" className='underline text-[var(--marrom)]'  target="_blank" rel="noopener noreferrer">
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
        <div className='flex flex-row w-full'>
          <div className='flex w-full'>
            <p className=' text-justify'>Revisor Vitor Hugo | 2025 © Todos os direitos reservados.</p>
          </div>
          <div>

          </div>
        </div>
      </footer>
    )
}