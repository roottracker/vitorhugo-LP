import trevortImg from '../assets/images/portifolio/trevort-e-o-medalhao.jpg'
import aPalavraImg from '../assets/images/portifolio/a-palavra-me-curou.jpg'
import avaliacaoImg from '../assets/images/portifolio/avaliacao-de-impacto-das-acoes-em-saude.jpg'
import crimeImg from '../assets/images/portifolio/crime-organizado-e-garimpo-ilegal.jpg'
import debaixoImg from '../assets/images/portifolio/debaixo-do-sol.jpg'
import entreDimensoesIm from '../assets/images/portifolio/entre-dimensoes.jpg'
import hermeneuticaImg from '../assets/images/portifolio/hermeneutica-maconica.jpg'
import mosaicoImg from '../assets/images/portifolio/mosaico-de-sabores.jpg'
import oEcoDeDeusImg from '../assets/images/portifolio/o-eco-de-deus.jpg'
import fenomenologiaIm from '../assets/images/portifolio/a-fenomenologia-da-emocao-na-aprendizagem.jpg'
import oficiaisIm from '../assets/images/portifolio/oficiais-de-justica.jpg'
import  pensaoAliImg from '../assets/images/portifolio/pensao-alimenticia-para-filhos-com-autismo.jpg'
import  psicoloiaImg from '../assets/images/portifolio/psicologia-positiva-e-a-busca-do-impossivel.jpg'
import revista1524Img  from '../assets/images/portifolio/Revista Cidades-v15-n24-2023.jpg'
import revista1523Img from '../assets/images/portifolio/Revista-Cidades-v15-n23-2022.jpg'
import revista1525Img from '../assets/images/portifolio/Revistas Cidades-v15-n25-2023.jpg'
import revista1626Img from '../assets/images/portifolio/Revistas Cidades-v16-n26-2024.jpg'
import umViajanteImg from '../assets/images/portifolio/se-um-viajante-numa-noite-de-poesia.jpg'
import xicaraImg from '../assets/images/portifolio/uma-xicara-de-chave.jpg'

import { CardPorti } from './cardsPorti'

interface portiProps{
    showMore: number;
}

export const Portifólio = (props : portiProps) => {

    return(
        <>        
       <div className='flex max-w-[85vw] min-h-100 h-auto h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default'>
          <CardPorti className='reveal' img={trevortImg} name='Trevort e o medalhão do Dragão' autor='J. C. Barth'/>
          <CardPorti className='reveal' img={aPalavraImg} name='A Palavra Me Curou' autor='Shana Mattos'/>
          <CardPorti className='reveal' img={debaixoImg} name='Debaixo do Sol' autor='Rodolfo Palu'/>
        </div>
        <div className={`${props.showMore>=2 ? 'flex' : 'hidden'} max-w-[85vw] min-h-100 mt-5 h-auto h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default`}>
          <CardPorti className='reveal' img={oEcoDeDeusImg} name='O eco de Deus' autor='Damásio Feliciano'/>
          <CardPorti className='reveal' img={umViajanteImg} name='Se um viajante numa noite de poesia' autor='Tristão Macedo'/>
          <CardPorti className='reveal' img={xicaraImg} name='Uma xícara de chave' autor='Vanessa Lunghini'/>
        </div>
        <div className={`${props.showMore>=3 ? 'flex' : 'hidden'} max-w-[85vw] min-h-100 mt-5 h-auto h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default`}>
          <CardPorti className='reveal' img={fenomenologiaIm} name='A Fenomenologia da emoção na aprendizagem: subjetividade, corpo e percepção na experiência/vivência cognitiva' autor='João Enzio Gomes'/>
          <CardPorti className='reveal' img={avaliacaoImg} name='Avaliações em saúde: métodos de análises econômicas' autor='André Guimarães de Mattos Rodrigues'/>
          <CardPorti className='reveal' img={entreDimensoesIm} name='Entre dimensões: diálogos com o invisível' autor='Vânia Vilela'/>
        </div>
        <div className={`${props.showMore===4 ? 'flex' : 'hidden'} md:max-w-[95vw] xl:max-w-[55vw] min-h-100 mt-5 h-auto h-auto flex-col justify-center items-center flex-wrap md:flex-row gap-5 cursor-default`}>
          <CardPorti className='reveal' img={mosaicoImg} name='Mosaico de sabores: receitas árabes, gregas, italianas e mexicanas' autor='Thaisa Collet dos Santos'/>
          <CardPorti className='reveal' img={psicoloiaImg} name='A busca do impossível: uma abordagem à luz da Psicologia Positiva' autor='Aroldo Rodrigues'/>
          <CardPorti className='reveal' img={crimeImg} name='Crime organizado e garimpo ilegal: A Influência das organizações criminosas no garimpo Ilegal no Brasil' autor='Flávia Penna Guedes Pereira'/>
          <CardPorti className='reveal' img={hermeneuticaImg} name='Hermenêutica Maçônica: reminiscências e inquietações de um buscador' autor='José Julberto Meira Júnior'/>
          <CardPorti className='reveal' img={oficiaisIm} name='Oficiais de justiça: Associações, contos e crimes' autor='Matilde de Paula Soares'/>
          <CardPorti className='reveal' img={pensaoAliImg} name='Pensão alimentícia para filhos com autismo' autor='Giovana Auricchio Cardoso'/>
          <CardPorti className='reveal' img={revista1626Img} name='Revistas Cidades v. 16 n. 26 (2024)' autor=''/>
          <CardPorti className='reveal' img={revista1525Img} name='Revista Cidades v. 15 n. 25 (2023)' autor=''/>
          <CardPorti className='reveal' img={revista1524Img} name='Revista Cidades v. 15 n. 24 (2023)' autor=''/>
          <CardPorti className='reveal' img={revista1523Img} name='Revista Cidades v. 15 n. 23 (2022)' autor=''/>
        </div>
        </>
    )
}