interface propsRev {
    id: string
}

export const RevTexto = (props: propsRev) => {
    return(
        <section id={props.id} className="reveal flex w-full h-auto items-center flex-col font-mono cursor-default">
            <div className="flex w-full mt-15 h-20 border items-center justify-center text-[24pt] font-mono font-bold hover:tracking-[1px] duration-1000">
                <h1>Revisão de Texto</h1>
            </div>

            <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que é</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">
                    A revisão textual vai além da correção gramatical.
                    Ela garante que o texto seja claro, coeso e fiel à voz do autor,
                    cuidando de aspectos como ortografia, pontuação, concordância e fluidez.
                    <br /><br /> O objetivo é que a leitura soe natural e envolvente, sem ruídos ou repetições,
                    valorizando o conteúdo e aprimorando sua apresentação.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que faço</h3>
                    </div>
                    <p className="w-[90vw] md:w-[40vw] text-justify">Durante a revisão, ajusto o texto quanto a:</p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li>Ortografia, gramática e pontuação;</li><br />
                    <li>regência e concordância verbal e nominal;</li><br />
                    <li>padronização e estilo (uso de maiúsculas, numerais, pontuações, aspas etc.);</li><br />
                    <li>consistência de informações e uniformidade linguística;</li><br />
                    <li>clareza, fluidez e coesão entre parágrafos e ideias.</li>
                    </ul>
                    <br />
                    <p className="w-[90vw] md:w-[40vw] text-justify self-center">
                    Também indico sugestões de melhoria na estrutura e organização textual,
                    apontando trechos que possam ser reescritos ou aprimorados, sempre com o máximo respeito à voz autoral.
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col xl:flex-row">
                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">O que entrego</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify">Ao final do processo, você recebe dois arquivos:</p>
                    <ul className="flex list-disc list-inside flex-col text-left h-auto justify-center mt-5 ml-5">
                    <li><strong>Um PDF com todas as marcas de revisão</strong>, para que veja cada ajuste e compreenda as intervenções realizadas.</li><br />
                    <li><strong>Um arquivo em Word limpo</strong>, com todas as correções aplicadas e pronto para uso — ideal para envio, publicação ou impressão.</li>
                    </ul><br />
                    <p className="w-[90vw] xl:w-[40vw] text-justify self-center">
                    Dessa forma, você tem total transparência sobre o trabalho realizado e autonomia para decidir sobre cada alteração.
                    </p>
                </div>

                <div className="flex w-full min-h-80 flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Como funciona</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[40vw] text-justify self-center">
                    Você envia o texto em formato Word por e-mail para que eu possa avaliar o material e elaborar um orçamento detalhado, com prazo e condições. <br /><br />
                    Após a aprovação, envio o contrato e combinamos a forma de pagamento. O trabalho é realizado com o controle de alterações ativado — nada é modificado diretamente no texto original. <br /><br />
                    Quando a revisão é concluída, envio os dois arquivos finais (com e sem marcas), para que você tenha a versão revisada pronta e uma cópia com todo o histórico das modificações. <br /><br />
                    Se houver trechos que demandem reescrita ou ajustes mais profundos, eles são discutidos diretamente com o autor, garantindo um processo colaborativo e respeitoso. <br /><br />
                    </p>
                </div>
                </div>

                <div className="flex w-full flex-col">
                <div className="flex w-full flex-col items-center border p-5">
                    <div className="flex w-full items-center justify-center">
                    <h3 className="pb-15 font-mono text-[21pt]">Valor de investimento</h3>
                    </div>
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    O orçamento é calculado com base na <strong>quantidade de caracteres com espaços</strong> do documento, o que assegura um cálculo justo e proporcional ao volume real de texto.
                    </p><br />
                    <p className="w-[90vw] xl:w-[30vw] text-justify self-center">
                    Cada <strong>2.100 caracteres com espaços correspondem a 1 lauda. 💰 R$ 5,00 por lauda.</strong>
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