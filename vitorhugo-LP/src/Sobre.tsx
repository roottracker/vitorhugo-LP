import { useEffect } from "react"
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
        <NavBar opcao1="Voltar ao Inicio" op1href="/"/>
        <br /><br /><br /><main>
            <section className="reveal">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>

            <section>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>

            <section>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>

            <section>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>

        </main>
        </>
    )
}
export default Sobre