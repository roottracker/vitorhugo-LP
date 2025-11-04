interface propsForm {
    id: string
}

export const FormTrabAca = (props : propsForm) => {
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col font-mono cursor-default">
            <div className="flex w-full h-20 border items-center justify-center text-[24pt] font-mono font-bold hover:tracking-[1px] duration-1000">
                <h1>Formatação de trabalhos acadêmicos</h1>
            </div>

            <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que é</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
                    A formatação acadêmica garante que o seu trabalho siga as normas exigidas pela instituição ou publicação,
                     como ABNT, APA ou outras. Esse cuidado técnico é essencial para que o texto apresente profissionalismo, 
                     organização e credibilidade, facilitando a leitura e a avaliação.  
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que faço</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
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
                </div>

                <div className="flex w-full flex-col xl:flex-row">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que entrego</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify">
                        Você recebe o arquivo formatado em Word e, se desejar, um PDF final pronto para envio ou impressão. 
                        O documento é entregue revisado quanto ao formato, com todos os elementos padronizados conforme as normas indicadas.</p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Como funciona</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify self-center">
                    Envie seu trabalho por e-mail, junto com as normas ou modelo exigido pela instituição (caso possua). 
                    A partir disso, elaboro um orçamento com prazo e condições. <br />
                    Após a aprovação, envio o contrato, e o pagamento é realizado conforme a forma escolhida. 
                    Durante o processo, mantenho contato para esclarecer dúvidas e garantir que o resultado final esteja exatamente como você precisa.
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    O valor é calculado conforme o tamanho e a complexidade do trabalho.
                    </p><br />
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    <strong>💰 A partir de R$ 3,00 por página formatada. </strong>
                    </p>
                </div>

                <div className="flex w-full flex-col items-center border xl:p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Formas de pagamento</h3>
                    </div>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center ml-5">
                    <li>À vista, via <strong>PIX</strong> ou <strong>transferência bancária</strong>, com desconto.</li><br />
                    <li><strong>50% na assinatura do contrato e 50% na entrega.</strong></li><br />
                    <li>Ou em até <strong>3x sem juros no cartão.</strong></li><br />
                    </ul>
                </div>
                </div>
            </div>
            </section>
    )
}