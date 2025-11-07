import arrow from '../assets/images/next.png'
import { useState } from "react";

interface propsOri {
    id: string
}

export const OrientacaoLiteraria = (props : propsOri) => {

    const [page, setPage] = useState(1);
    
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col cursor-default mb-15" style={{fontFamily: 'Merriweather'}}>
            <div className="flex w-full h-20 items-center justify-center text-[24pt] font-bold hover:tracking-[1px] duration-1000">
                <h1 style={{fontFamily: 'Lato'}}>Orientação literária</h1>
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
                    A orientação literária é um acompanhamento dedicado ao desenvolvimento da sua obra. 
                    Mais do que revisar, trata-se de apoiar autores em cada etapa do processo criativo, oferecendo insights,
                    sugestões e estratégias para aprimorar narrativa, personagens, ritmo e estrutura, 
                    sempre respeitando sua voz e estilo.
                    </p>
                </div>

                <div className={`${page===2 ? 'flex' : 'hidden'} w-full min-h-45 flex-col items-center  border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que faço</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                        Durante o processo de orientação, atuo como parceiro de escrita, ajudando a:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                        <li>estruturar e organizar ideias e capítulos;</li><br />
                        <li>desenvolver personagens, diálogos e enredos;</li><br />
                        <li>fortalecer a voz autoral e o estilo do texto;</li><br />
                        <li>planejar revisões e próximos passos na produção da obra;</li><br />
                        <li>identificar pontos de melhoria, lacunas narrativas e oportunidades de impacto.</li>
                    </ul>
                    <br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O trabalho é colaborativo, com atenção ao seu projeto e às suas metas, seja para literatura, 
                    contos, crônicas ou projetos mais longos, como romances e coletâneas.
                    </p>
                </div>
                

             
                <div className={`${page===3 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que entrego</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    Você recebe um acompanhamento personalizado, que pode incluir:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li><strong>relatórios ou notas de orientação</strong>, com análises e sugestões detalhadas;</li><br />
                    <li><strong>reuniões online ou por vídeo</strong>, para discussão de ideias e ajustes;</li><br />
                    <li><strong>planos de ação</strong>, com recomendações práticas para o desenvolvimento contínuo do texto.</li><br />
                    </ul>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    Todo o material produzido serve como guia para que você avance de forma organizada e consistente na sua escrita.
                    </p>
                </div>

                <div className={`${page===4 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Como funciona</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O autor envia seu texto ou projeto inicial por e-mail e recebe um orçamento com prazos e condições. Após a aprovação, iniciamos o acompanhamento de acordo com o cronograma definido, com sessões regulares de orientação e feedback. <br />
                    O serviço é totalmente personalizado, considerando o gênero, estilo e estágio da obra, garantindo que cada recomendação seja útil e prática.
                    </p>
                </div>
                
                <div className={`${page===5 ? 'flex' : 'hidden'} w-full flex-col items-center border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O valor da orientação literária é calculado conforme a <strong>complexidade do projeto</strong> e a quantidade de sessões de acompanhamento.
                    </p><br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    💰 <strong>Pacotes a partir de R$ 200,00</strong>, para orientação inicial e análise de projetos curtos. Orçamentos personalizados são fornecidos para projetos maiores ou acompanhamento contínuo.
                    </p>
                </div>
                
            </div>
            </section>
    )
}