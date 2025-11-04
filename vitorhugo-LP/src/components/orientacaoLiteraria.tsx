interface propsOri {
    id: string
}

export const OrientacaoLiteraria = (props : propsOri) => {
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col font-mono cursor-default">
            <div className="flex w-full h-20 border items-center justify-center text-[24pt] font-mono font-bold hover:tracking-[1px] duration-1000">
                <h1>Orientação literária</h1>
            </div>

            <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que é</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
                    A orientação literária é um acompanhamento dedicado ao desenvolvimento da sua obra. 
                    Mais do que revisar, trata-se de apoiar autores em cada etapa do processo criativo, oferecendo insights,
                    sugestões e estratégias para aprimorar narrativa, personagens, ritmo e estrutura, 
                    sempre respeitando sua voz e estilo.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que faço</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
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
                    <p className="w-[90vw] md:w-[40vw] text-justify self-center">
                    O trabalho é colaborativo, com atenção ao seu projeto e às suas metas, seja para literatura, 
                    contos, crônicas ou projetos mais longos, como romances e coletâneas.
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col xl:flex-row">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que entrego</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify">
                    Você recebe um acompanhamento personalizado, que pode incluir:
                    </p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li><strong>relatórios ou notas de orientação</strong>, com análises e sugestões detalhadas;</li><br />
                    <li><strong>reuniões online ou por vídeo</strong>, para discussão de ideias e ajustes;</li><br />
                    <li><strong>planos de ação</strong>, com recomendações práticas para o desenvolvimento contínuo do texto.</li><br />
                    </ul>
                    <p className="w-[90vw] xl:w-[40vw] text-justify">
                    Todo o material produzido serve como guia para que você avance de forma organizada e consistente na sua escrita.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Como funciona</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify self-center">
                    O autor envia seu texto ou projeto inicial por e-mail e recebe um orçamento com prazos e condições. Após a aprovação, iniciamos o acompanhamento de acordo com o cronograma definido, com sessões regulares de orientação e feedback. <br />
                    O serviço é totalmente personalizado, considerando o gênero, estilo e estágio da obra, garantindo que cada recomendação seja útil e prática.
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    O valor da orientação literária é calculado conforme a <strong>complexidade do projeto</strong> e a quantidade de sessões de acompanhamento.
                    </p><br />
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    💰 <strong>Pacotes a partir de R$ 200,00</strong>, para orientação inicial e análise de projetos curtos. Orçamentos personalizados são fornecidos para projetos maiores ou acompanhamento contínuo.
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