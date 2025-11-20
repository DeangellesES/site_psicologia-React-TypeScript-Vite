import styled from "styled-components";

import terapiaUm from "./assets/idoso-terapia.jpg"
import terapiaDois from "./assets/casal-terapia.jpg"
import terapiatres from "./assets/adolescente-terapia.jpg"
import terapiaQuatro from "./assets/profissional-terapia.jpg"
import terapiaCinco from "./assets/meditacao-terapia.jpg"
import terapiaseis from "./assets/online-terapia.jpg"
import terapiaSete from "./assets/depressao-terapia.jpg"
import terapiaOito from "./assets/bornout.jpg"
import terapiaNove from "./assets/luto-terapia.jpg"
import terapiaDez from "./assets/familia-terapia.jpg"
import terapiaOnze from "./assets/espelho.jpg"
import terapiaDoze from "./assets/trauma.jpg"

import { FaRegHeart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { LuBrain, LuHouse } from "react-icons/lu";
import { PiWaves } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SecaoServicos = styled.section`
    padding: 4rem 1rem 0 1rem;

    h1 {
        text-align: center;
        font-size: 3rem;
        color: #272727ff;
    }
`
const SecaoServicosParagrafo = styled.p`
    text-align: center;
    font-size: 1.3rem;
    color: #272727ff;
    margin-top: 1rem;
`
const SecaoServicosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
`
const SecaoServicosContainerCaixa = styled.div`
    width: 31%;
    position: relative;
    border-radius: 15px;
`

const SecaoServicosContainerCaixaImagem = styled.div`
    position: relative;
    height: 70%;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80%; 
        background: linear-gradient(to top, white, transparent);
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0 0;
        object-fit: cover;
        position: relative;
        z-index: 0;
        // object-position: 20px 20px;
        transition: all .5s ease;
        
    }
`
const SecaoServicosContainerCaixaTexto = styled.div`
    margin-top: 0 !important;
    padding: 0 1rem;
    position: relative;
    z-index: 1;

    h3 {
        color: #272727ff;
        margin: 0 0 .4rem 0;
    }

    p {
        color: #1f1e1eff;
    }
`

export default function Servicos() {
    return (
        <SecaoServicos id="servicos">
            <h1>Serviços Oferecidos</h1>
            <SecaoServicosParagrafo>Abordagem humanista e acolhedora, adaptada às suas necessidades</SecaoServicosParagrafo>
            <SecaoServicosContainer>
                <SecaoServicosContainerCaixa>

                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaUm} alt="" />
                        <FaRegHeart className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia Individual</h3>
                        <p>Acompanhamento personalizado para questões emocionais, autoconhecimento e desenvolvimento pessoal.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaDois} alt="" />
                        <SlPeople className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia de Casal</h3>
                        <p>Fortalecimento de vínculos e resolução de conflitos para relacionamentos mais saudáveis e harmoniosos.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiatres} alt="" />
                        <LuBrain className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia para Adolescentes</h3>
                        <p>Apoio especializado na fase de desenvolvimento, autoestima, ansiedade e questões emocionais.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaQuatro} alt="" />
                        <GoLightBulb className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Orientação Profissional</h3>
                        <p>Desenvolvimento de carreira, gestão de estresse e equilíbrio entre vida pessoal e trabalho.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaCinco} alt="" />
                        <PiWaves className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia para Ansiedade</h3>
                        <p>Técnicas especializadas para gerenciar ansiedade, ataques de pânico e preocupações excessivas.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaseis} alt="" />
                        <BsStars className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia Online</h3>
                        <p>Atendimento psicológico no conforto da sua casa, com total privacidade e flexibilidade de horários.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaSete} alt="" />
                        <FaRegHeart className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Tratamento de Depressão</h3>
                        <p>Acompanhamento especializado para superar a depressão, recuperar a motivação e qualidade de vida.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaOito} alt="" />
                        <MdOutlineShield className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia para Burnout</h3>
                        <p>Recuperação do esgotamento profissional, estabelecimento de limites saudáveis e prevenção de recaídas.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem"> 
                        <img src={terapiaNove} alt="" />
                        <FaRegSmile className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Processo de Luto</h3>
                        <p>Suporte compassivo para elaboração do luto e perdas, respeitando seu tempo e processo único.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaDez} alt="" />
                        <LuHouse className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia Familiar</h3>
                        <p>Mediação de conflitos familiares, melhora da comunicação e fortalecimento dos laços entre membros.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaOnze} alt="" />
                        <CgProfile className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Autoestima e Autoconfiança</h3>
                        <p>Desenvolvimento da autoimagem positiva, autoconfiança e empoderamento pessoal.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

                <SecaoServicosContainerCaixa>
                    <SecaoServicosContainerCaixaImagem className="servicos-imagem">
                        <img src={terapiaDoze} alt="" />
                        <MdOutlineShield className="servicos-icone" />
                    </SecaoServicosContainerCaixaImagem>

                    <SecaoServicosContainerCaixaTexto>
                        <h3>Terapia para Traumas</h3>
                        <p>Tratamento especializado com técnicas como EMDR para processar traumas e experiências difíceis.</p>
                    </SecaoServicosContainerCaixaTexto>

                </SecaoServicosContainerCaixa>

            </SecaoServicosContainer>
        </SecaoServicos>
    )
}