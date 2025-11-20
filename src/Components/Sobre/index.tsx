import styled from "styled-components";

import fotoPsicologa from "./assets/psicologa.jpg"

import { RiGraduationCapLine } from "react-icons/ri";
import { PiMedal } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa";

const SecaoSobre = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 7rem 4rem 0;

    img {
        width: 75%;
        height: 80%;
        border-radius: 20px;
    }
`
const SecaoSobreImagem = styled.div``

const SecaoSobretexto = styled.div`

    h1 {
        font-size: 3rem;
        margin-top: 1.5rem;
    }

    div {
        margin-top: 1rem;

        p {
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            margin-top: 1.4rem;
        }
    }
`
const SecaoSobretextoParagrafo = styled.p`
    margin-top: 1.5rem;
    font-size: 1.3rem;
    color: #808080ff;

    
`


export default function Sobre() {
    return (
        <SecaoSobre id="sobre">

            <SecaoSobreImagem>
                <img src={fotoPsicologa} alt="" />
            </SecaoSobreImagem>
            <SecaoSobretexto>
                <h1>Sobre Mim</h1>
                <SecaoSobretextoParagrafo>Olá! Sou psicóloga clínica com mais de 10 anos de experiência no atendimento de crianças, adolescentes, adultos e casais. Minha abordagem é humanizada e baseada em evidências científicas, com foco no acolhimento e no desenvolvimento do autoconhecimento.</SecaoSobretextoParagrafo>
                <SecaoSobretextoParagrafo>Acredito que cada pessoa possui recursos internos para superar seus desafios, e meu papel é facilitar esse processo de descoberta e transformação em um ambiente seguro e livre de julgamentos.</SecaoSobretextoParagrafo>
                <div>
                    <p><RiGraduationCapLine className="sobre-icone"/>Graduação em Psicologia - CRP 06/123456</p>
                    <p><PiMedal className="sobre-icone"/>Especialização em Terapia Cognitivo-Comportamental</p>
                    <p><FaRegCalendar className="sobre-icone"/>10+ anos de experiência clínica</p>
                </div>

            </SecaoSobretexto>
        </SecaoSobre>
    )
}