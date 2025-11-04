interface propsLei {
    id: string
}

export const LeituraCritica = (props: propsLei) => {
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col font-mono cursor-default">
            <div className="flex w-full h-20 border items-center justify-center text-[24pt] font-mono font-bold hover:tracking-[1px] duration-1000">
                <h1>Leitura Crítica</h1>
            </div>

            <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que é</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
                    A leitura crítica é uma análise atenta e detalhada do seu texto literário.
                     Mais do que uma revisão técnica, ela busca compreender a estrutura, 
                     o ritmo, os personagens e o propósito da narrativa, oferecendo um olhar externo e 
                     especializado sobre a obra. O objetivo é ajudar o autor a reconhecer o potencial do texto 
                     e a aprimorar pontos que possam ser desenvolvidos com mais força e coerência.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que faço</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
                        Realizo uma leitura completa e cuidadosa da obra, observando:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li>construção narrativa, enredo e coerência interna;</li><br />
                    <li>desenvolvimento de personagens e diálogos;</li><br />
                    <li>ritmo, tom e estilo do texto;</li><br />
                    <li>estrutura de capítulos, clímax e desfecho;</li><br />
                    <li>consistência da voz autoral e adequação ao público.</li>
                    </ul>
                    <br />
                    <p className="w-[90vw] md:w-[40vw] text-justify self-center">
                    Com base nessa análise, elaboro um parecer técnico e sensível, 
                    apontando os principais pontos fortes e as possibilidades de aprimoramento 
                    — sempre com respeito ao estilo e às intenções do autor.
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col xl:flex-row">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que entrego</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify">
                    Você recebe um <strong>parecer completo em PDF</strong>, com comentários gerais e observações pontuais sobre o texto. 
                    O material inclui sugestões de reestruturação, notas de leitura e recomendações práticas para o desenvolvimento da narrativa. <br />
                    Se desejar, é possível incluir uma <strong>reunião de devolutiva on-line</strong>, para conversarmos sobre o parecer e tirar dúvidas sobre os próximos passos do processo de escrita.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Como funciona</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify self-center">
                    O autor envia o texto por e-mail (em Word ou PDF) e recebe um orçamento detalhado com prazos e condições. Após a aprovação, envio o contrato e iniciamos o processo de leitura. <br />
                    Durante a análise, não realizo correções diretas no texto, mas apresento observações e orientações em um relatório técnico e interpretativo. Todo o processo é feito de forma confidencial e personalizada, considerando o gênero, o estilo e o estágio de desenvolvimento da obra
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    O valor da leitura crítica varia conforme o tamanho e a complexidade do texto.
                    </p><br />
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    💰 <strong>A partir de R$ 150,00 para textos curtos</strong> (contos, crônicas ou capítulos). <br />
                    Orçamentos personalizados são realizados para <strong>romances, coletâneas e obras completas.</strong>
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