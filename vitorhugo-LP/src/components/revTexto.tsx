import arrow from '../assets/images/next.png'
import { useState } from "react"

interface propsRev {
    id: string
}

export const RevTexto = (props: propsRev) => {
    const [page, setPage] = useState(1);

    

    return(
        <>
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col cursor-default mb-15" style={{fontFamily: 'Merriweather'}}>
            <h1 className="text-[34pt] mt-15 p-10" style={{fontFamily: 'Alice'}}>Serviços</h1>
            <div className="flex md:w-[45vw] h-20 items-center justify-center text-[24pt] font-bold tracking-[1px] hover:tracking-[2px] duration-700">
                <h1  style={{fontFamily: 'Lato'}}>Revisão de Texto</h1>
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
            
            <div className={`flex max-w-[90vw] md:max-w-[45vw] flex-col items-center`}>
                
                <div className={`reveal ${page===1 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-60 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que é</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    A revisão textual vai além da correção gramatical.
                    Ela garante que o texto seja claro, coeso e fiel à voz do autor,
                    cuidando de aspectos como ortografia, pontuação, concordância e fluidez.
                    <br /><br /> O objetivo é que a leitura soe natural e envolvente, sem ruídos ou repetições,
                    valorizando o conteúdo e aprimorando sua apresentação.
                    </p>
                </div>

                <div className={`reveal ${page===2 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-80 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que faço</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">Durante a revisão, ajusto o texto quanto a:</p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li>Ortografia, gramática e pontuação;</li><br />
                    <li>regência e concordância verbal e nominal;</li><br />
                    <li>padronização e estilo (uso de maiúsculas, numerais, pontuações, aspas etc.);</li><br />
                    <li>consistência de informações e uniformidade linguística;</li><br />
                    <li>clareza, fluidez e coesão entre parágrafos e ideias.</li>
                    </ul>
                    <br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    Também indico sugestões de melhoria na estrutura e organização textual,
                    apontando trechos que possam ser reescritos ou aprimorados, sempre com o máximo respeito à voz autoral.
                    </p>
                </div>
                

                
                <div className={`${page===3 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-80 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que entrego</h3>
                    </div>
                    <p className="w-[85vw] xl:w-[40vw] text-justify">Ao final do processo, você recebe dois arquivos:</p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5">
                    <li><strong>Um PDF com todas as marcas de revisão</strong>, para que veja cada ajuste e compreenda as intervenções realizadas.</li><br />
                    <li><strong>Um arquivo em Word limpo</strong>, com todas as correções aplicadas e pronto para uso — ideal para envio, publicação ou impressão.</li>
                    </ul><br />
                    <p className="w-[85vw] xl:w-[40vw] text-justify self-center">
                    Dessa forma, você tem total transparência sobre o trabalho realizado e autonomia para decidir sobre cada alteração.
                    </p>
                </div>

                <div className={`${page===4 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-80 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Como funciona</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    Você envia o texto em formato Word por e-mail para que eu possa avaliar o material e elaborar um orçamento detalhado, com prazo e condições. <br /><br />
                    Após a aprovação, envio o contrato e combinamos a forma de pagamento. O trabalho é realizado com o controle de alterações ativado — nada é modificado diretamente no texto original. <br /><br />
                    Quando a revisão é concluída, envio os dois arquivos finais (com e sem marcas), para que você tenha a versão revisada pronta e uma cópia com todo o histórico das modificações. <br /><br />
                    Se houver trechos que demandem reescrita ou ajustes mais profundos, eles são discutidos diretamente com o autor, garantindo um processo colaborativo e respeitoso. <br /><br />
                    </p>
                </div>
                

                
                <div className={`${page===5 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    O orçamento é calculado com base na <strong>quantidade de caracteres com espaços</strong> do documento, o que assegura um cálculo justo e proporcional ao volume real de texto.
                    </p><br />
                    <p className="w-[85vw] md:w-[40vw] text-justify self-center">
                    Cada <strong>2.100 caracteres com espaços correspondem a 1 lauda. 💰 R$ 5,00 por lauda.</strong>
                    </p>
                </div>
            </div>
            </section>
    </>
    )
}