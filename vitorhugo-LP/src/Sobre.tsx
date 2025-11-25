import { useEffect } from "react"
import { RevTexto } from "./components/revTexto"
import { FormTrabAca } from "./components/formTrabAca"
import { LeituraCritica } from "./components/leituraCritica"
import { OrientacaoLiteraria } from "./components/orientacaoLiteraria"
import { Footer } from "./components/footer"
import { NavBar } from "./components/navBar"


function Sobre(){
      useEffect(() => {
      const elements = document.querySelectorAll('.reveal')
    
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            entry.target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      })
    
      elements.forEach(el => {
        // 👇 Aqui o JS aplica as classes iniciais
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
        observer.observe(el)
      })
    }, [])
    
    return(
        <>
        <NavBar 
        showName={true} 
        navStatic={true}  
        opcao1="Revisão de Texto" 
        op1href="#Revisao" 
        opcao2="Formatação de trabalhos acadêmicos" 
        op2href="#Formatacao" 
        opcao3="Leitura Crítica" 
        op3href="#Leitura" 
        opcao4="Orientação Literária"
        op4href="#Orientacao"/>
        <main className="">
           <RevTexto  id="Revisao"/>
           <FormTrabAca id="Formatacao"/>
           <LeituraCritica id="Leitura"/>
           <OrientacaoLiteraria id="Orientacao"/>
            <div className="flex w-full flex-col items-center  xl:p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Formas de pagamento</h3>
                    </div>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center ml-5">
                    <li>À vista, via <strong>PIX</strong> ou <strong>transferência bancária</strong>, com desconto.</li><br />
                    <li><strong>50% na assinatura do contrato e 50% na entrega.</strong></li><br />
                    <li>Ou em até <strong>3x sem juros no cartão.</strong></li><br />
                    </ul>
                </div>
           <Footer/>
           </main>
        </>
    )
}
export default Sobre