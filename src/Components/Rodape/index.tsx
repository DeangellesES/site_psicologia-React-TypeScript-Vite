import styled from "styled-components";

import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone , FiClock , FiFacebook , FiLinkedin  } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const SecaoRodape = styled.footer`
    padding: 2rem 1.5rem;
`
const SecaoRodapeCima = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    border-bottom: 1px solid #969595ff;
    padding-bottom: 2rem;
`

const SecaoRodapeCimaUm = styled.div`
    display: flex;
    flex-direction: column;   
    gap: .8rem;

    h1 {
        font-size: 1.6rem;
    }

    p {
        color: #6d6d6dff;
    }
`
const SecaoRodapeCimaUmUltimo = styled.p`
    color: #845aadff !important;
    font-weight: bold;
`

const SecaoRodapeCimaDois = styled.div`


    p {
        font-size: 1.3rem;
        font-weight: bold;
        color: #272727ff;
    }

`
const SecaoRodapeCimaDoisLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    a {
        text-decoration: none;
        color: #6d6d6dff;

        &:hover {
            color: #845aadff;
        }
    }
`
const SecaoRodapeCimaTres = styled.div`

    h3 {
        font-size: 1.4rem;
        font-weight: bold;
        color: #272727ff;
    }

    p {
        margin-top: 1rem; 
        color: #6d6d6dff;
        display: flex;
        align-items: center;
        gap: .5rem;
        flex-wrap: wrap;
        // width: 60%;   
    }
`
const SecaoRodapeCimaQuatro = styled.div`


    h3 {
        font-size: 1.4rem;
        font-weight: bold;
        color: #272727ff;
    }

    p {
        margin-top: 1rem;
        color: #6d6d6dff;
        font-size: 1.1rem;
    }
`

const SecaoRodapeBaixo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    p {
        color: #6d6d6dff;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`

export default function Rodape() {
    return (
        <SecaoRodape>
            <SecaoRodapeCima>
                <SecaoRodapeCimaUm>
                    <h1>Psicologia & Bem-Estar</h1>
                    <p>Cuidando da sua saúde mental com profissionalismo, empatia e dedicação.</p>
                    <SecaoRodapeCimaUmUltimo>CRP 06/123456</SecaoRodapeCimaUmUltimo>
                </SecaoRodapeCimaUm>

                <SecaoRodapeCimaDois>
                    <p>Links Rápidos</p>
                    <SecaoRodapeCimaDoisLinks>
                        <a href="">Início</a>
                        <a href="">Serviços</a>
                        <a href="">Sobre</a>
                        <a href="">Contato</a>
                    </SecaoRodapeCimaDoisLinks>
                </SecaoRodapeCimaDois>

                <SecaoRodapeCimaTres>
                    <h3>Contato</h3>
                    <p><IoLocationOutline className="rodape-icone"/>Av. Paulista, 1000 - São Paulo, SP</p>
                    <p><FiPhone className="rodape-icone"/> (11) 98765-4321</p>
                    <p><MdOutlineEmail className="rodape-icone"/> contato@psicologo.com</p>
                    <p><FiClock className="rodape-icone"/> Seg - Sex: 8h às 20h <br/>Sáb: 9h às 14h</p>
                </SecaoRodapeCimaTres>

                <SecaoRodapeCimaQuatro>
                    <h3>Redes Sociais</h3>
                    <p>Siga-nos nas redes sociais e fique por dentro de dicas e conteúdos sobre saúde mental.</p>
                    <div>
                        <FaInstagram className="rodape-icone-sociais-instagram"/>
                        <FiFacebook className="rodape-icone-sociais"/>
                        <FiLinkedin className="rodape-icone-sociais"/>
                    </div>
                </SecaoRodapeCimaQuatro>
            </SecaoRodapeCima>

            <SecaoRodapeBaixo>
                <p>© 2025 Psicologia & Bem-Estar. Todos os direitos reservados.</p>
                <div>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                </div>
            </SecaoRodapeBaixo>
        </SecaoRodape>
    )
}