import arrow from '../assets/images/next.png'
import { useState } from "react";

interface propsForm {
    id: string
}

export const FormTrabAca = (props : propsForm) => {
    const [page, setPage] = useState(1);
        
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col cursor-default mb-15" style={{fontFamily: 'Merriweather'}}>
            <div className="flex w-[90vw] h-20 items-center justify-center text-center text-[24pt] font-bold hover:tracking-[1px] duration-1000">
                <h1 style={{fontFamily: 'Lato'}}>Formatação de trabalhos acadêmicos</h1>
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
                <div className={`reveal ${page===1 ? 'flex' : 'hidden'} w-[90vw] md:w-[45vw] min-h-40 flex-col items-center p-5 border rounded-b-[15px]`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">O que é</h3>
                    </div>
                    <p className="w-[85vw] md:w-[40vw] text-justify">
                    A formatação acadêmica garante que o seu trabalho siga as normas exigidas pela instituição ou publicação,
                     como ABNT, APA ou outras. Esse cuidado técnico é essencial para que o texto apresente profissionalismo, 
                     organização e credibilidade, facilitando a leitura e a avaliação.  
                    </p>
                </div>

                <div className={`${page===2 ? 'flex' : 'hidden'} w-full min-h-45 flex-col items-center  border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                        <h3 className="pb-5 text-[14pt]">O que faço</h3>
                    </div>
                    <p className="w-[80vw] md:w-[40vw] text-justify">
                        Realizo a adequação completa do documento de acordo com o padrão solicitado, ajustando:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                        <li>margens, espaçamento, fonte e tamanho do texto;</li><br />
                        <li>numeração de páginas, sumário e títulos;</li><br />
                        <li>citações diretas, indiretas e notas de rodapé;</li><br />
                        <li>referências bibliográficas e lista de anexos;</li><br />
                        <li>elementos pré e pós-textuais (folha de rosto, resumo, palavras-chave, etc.).</li>
                    </ul>
                    <br />
                    <p className="w-[90vw] md:w-[40vw] text-justify self-center">
                    Também verifico se o trabalho está de acordo com as exigências da instituição ou edital,
                     garantindo uniformidade e coerência visual em todas as seções.
                    </p>
                </div>
                

                <div className={`${page===3 ? 'flex' : 'hidden'} w-full min-h-45 flex-col items-center border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">O que entrego</h3>
                    </div>
                    <p className="w-[80vw] md:w-[40vw] text-justify">
                        Você recebe o arquivo formatado em Word e, se desejar, um PDF final pronto para envio ou impressão. 
                        O documento é entregue revisado quanto ao formato, com todos os elementos padronizados conforme as normas indicadas.</p>
                </div>

                <div className={`${page===4 ? 'flex' : 'hidden'} w-full min-h-45 flex-col items-center border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Como funciona</h3>
                    </div>
                    <p className="w-[80vw] md:w-[40vw] text-justify self-center">
                    Envie seu trabalho por e-mail, junto com as normas ou modelo exigido pela instituição (caso possua). 
                    A partir disso, elaboro um orçamento com prazo e condições. <br />
                    Após a aprovação, envio o contrato, e o pagamento é realizado conforme a forma escolhida. 
                    Durante o processo, mantenho contato para esclarecer dúvidas e garantir que o resultado final esteja exatamente como você precisa.
                    </p>
                </div>
                

                
                <div className={`${page===5 ? 'flex' : 'hidden'} w-full flex-col items-center border rounded-b-[15px] p-5`}>
                    <div className="hidden md:flex w-full items-center justify-center">
                    <h3 className="pb-5 text-[14pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[80vw] md:w-[40vw] text-justify self-center">
                    O valor é calculado conforme o tamanho e a complexidade do trabalho.
                    </p><br />
                    <p className="w-[80vw] md:w-[40vw] text-justify self-center">
                    <strong>💰 A partir de R$ 3,00 por página formatada. </strong>
                    </p>
                </div>
                
            </div>
            </section>
    )
}