import arrow from '../assets/images/next.png'
import { useState } from "react";

interface propsLei {
    id: string
}

export const LeituraCritica = (props: propsLei) => {

    const [page, setPage] = useState(1);

    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col cursor-default mb-15" style={{fontFamily: 'Merriweather'}}>
            <div className="flex w-full h-20 items-center justify-center text-[24pt] font-bold hover:tracking-[1px] duration-1000">
                <h1 style={{fontFamily: 'Lato'}}>Leitura Crítica</h1>
            </div>

            <div className="hidden md:flex w-[90vw] md:w-[45vw] bg-[var(--amarelo-queimado)] justify-center p-5 border-l border-t border-r rounded-t-[15px]">
                <ul className="flex w-[40vw] md:w-[90vw] justify-center flex-wrap md:flex-row gap-5">
                    <li onClick={() => setPage(1)} className={`${page===1 ? 'bg-[var(--amarelo-queimado)] border' : 'bg-[var(--amarelo)]'} rounded-[10px] p-2 cursor-pointer hover:border hover:border-dotted text-[10pt]`}>O que é</li>
                    <li onClick={() => setPage(2)} className={`${page===2 ? 'bg-[var(--amarelo-queimado)] border' : 'bg-[var(--amarelo)]'} rounded-[10px] p-2 cursor-pointer hover:border hover:border-dotted text-[10pt]`}>O que faço</li>
                    <li onClick={() => setPage(3)} className={`${page===3 ? 'bg-[var(--amarelo-queimado)] border' : 'bg-[var(--amarelo)]'} rounded-[10px] p-2 cursor-pointer hover:border hover:border-dotted text-[10pt]`}>O que entrego</li>
                    <li onClick={() => setPage(4)} className={`${page===4 ? 'bg-[var(--amarelo-queimado)] border' : 'bg-[var(--amarelo)]'} rounded-[10px] p-2 cursor-pointer hover:border hover:border-dotted text-[10pt]`}>Como funciona</li>
                    <li onClick={() => setPage(5)} className={`${page===5 ? 'bg-[var(--amarelo-queimado)] border' : 'bg-[var(--amarelo)]'} rounded-[10px] p-2 cursor-pointer hover:border hover:border-dotted text-[10pt]`}>Valor de investimento</li>
                </ul>
            </div>

            <div className="flex md:hidden w-[90vw] md:w-[45vw] bg-[var(--amarelo-queimado)] justify-center p-5 border-l border-t border-r rounded-t-[15px]">
                <button onClick={() => page>1 ? setPage(page-1) : setPage(page)}><img src={arrow} alt="arrow" width={20} className={`${page===1 ? 'hidden' : 'static'} scale-x-[-1]`}/></button>
                <h2>{page===1 ? 'O que é' : page===2 ? 'O que faço' : page===3 ? 'O que entrego' : page===4 ? 'Como funciona' : 'Valor de investimento'}</h2>
                <button onClick={() => page<5 ? setPage(page+1) : setPage(page)}><img src={arrow} alt="arrow" width={20} className={`${page===5 ? 'hidden' : 'static'}`}/></button>
            </div>

            <div className="flex w-[90vw] md:w-[45vw] flex-col items-center">
                
                <div className={`${page===1 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">O que é</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    A leitura crítica é uma análise atenta e detalhada do seu texto literário.
                     Mais do que uma revisão técnica, ela busca compreender a estrutura, 
                     o ritmo, os personagens e o propósito da narrativa, oferecendo um olhar externo e 
                     especializado sobre a obra. O objetivo é ajudar o autor a reconhecer o potencial do texto 
                     e a aprimorar pontos que possam ser desenvolvidos com mais força e coerência.
                    </p>
                </div>

                <div className={`${page===2 ? 'flex' : 'hidden'} w-full min-h-45 flex-col items-center  border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que faço</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                        Realizo uma leitura completa e cuidadosa da obra, observando:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-justify h-auto justify-center mt-5">
                        <li>construção narrativa, enredo e coerência interna;</li><br />
                        <li>desenvolvimento de personagens e diálogos;</li><br />
                        <li>ritmo, tom e estilo do texto;</li><br />
                        <li>estrutura de capítulos, clímax e desfecho;</li><br />
                        <li>consistência da voz autoral e adequação ao público.</li>
                    </ul>
                    <br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    Com base nessa análise, elaboro um parecer técnico e sensível, 
                    apontando os principais pontos fortes e as possibilidades de aprimoramento 
                    — sempre com respeito ao estilo e às intenções do autor.
                    </p>
                </div>
                

                
                <div className={`${page===3 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que entrego</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    Você recebe um <strong>parecer completo em PDF</strong>, com comentários gerais e observações pontuais sobre o texto. 
                    O material inclui sugestões de reestruturação, notas de leitura e recomendações práticas para o desenvolvimento da narrativa. <br />
                    Se desejar, é possível incluir uma <strong>reunião de devolutiva on-line</strong>, para conversarmos sobre o parecer e tirar dúvidas sobre os próximos passos do processo de escrita.
                    </p>
                </div>

                <div className={`${page===4 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Como funciona</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O autor envia o texto por e-mail (em Word ou PDF) e recebe um orçamento detalhado com prazos e condições. Após a aprovação, envio o contrato e iniciamos o processo de leitura. <br />
                    Durante a análise, não realizo correções diretas no texto, mas apresento observações e orientações em um relatório técnico e interpretativo. Todo o processo é feito de forma confidencial e personalizada, considerando o gênero, o estilo e o estágio de desenvolvimento da obra
                    </p>
                </div>
                
                <div className={`${page===5 ? 'flex' : 'hidden'} w-full flex-col items-center border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O valor da leitura crítica varia conforme o tamanho e a complexidade do texto.
                    </p><br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    💰 <strong>A partir de R$ 150,00 para textos curtos</strong> (contos, crônicas ou capítulos). <br />
                    Orçamentos personalizados são realizados para <strong>romances, coletâneas e obras completas.</strong>
                    </p>
                </div>
                
            </div>
            </section>
    )
}