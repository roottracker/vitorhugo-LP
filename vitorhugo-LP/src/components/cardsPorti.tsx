import { useEffect } from "react";

interface cardProps {
    name: string;
    autor: string;
    img: string;
    className?: string
}



export const CardPorti = (props: cardProps) => {

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
        <div className={`flex w-[270px] h-[480px] ${props.className} justify-center items-center flex-col border hover:scale-102 duration-200`}>
            <div className={`flex mt-2 w-[250px] h-[400px] flex-col justify-center items-center border p-5 rounded-xl bg-auto bg-center bg-no-repeat`} style={{ backgroundImage: `url(${props.img})` }}>
            </div>

            <div className="flex w-full h-30 flex-col justify-center items-center">
              <div className="flex w-full justify-center">
                <h1 className="text-center font-bold">{props.name}</h1>
            </div>

            <div className="flex items-center">
                <p className="text-center">{props.autor}</p>
            </div> 
            </div>
        </div>
        </>
    )
}