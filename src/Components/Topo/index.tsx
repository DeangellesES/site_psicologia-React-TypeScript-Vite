import styled from "styled-components";
import fundoTopo from "./assets/sofas-planta.jpg"

const SecaoTopo = styled.section`
    background-image: url(${fundoTopo});
    background-size: 100%;
    background-position: center;
    height: 100vh; 
`
const SecaoTopoContainer = styled.div`
    background-color: #ffffffd0;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
            font-size: 5rem;
            width : 50%;
        }  

    span {
        color: #845aadff;
    }

    p {
        font-size: 1.8rem;
        width : 60%;
        margin-bottom: 3rem;
        color: #4b4a4aff;
    } 
        
    a {
        padding: .9rem 1.9rem;
        border-radius: 10px;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        width: fit-content;
    }   
`

const SecaoTopoBotoes = styled.div`
    display: flex;
`

const SecaoTopoBtnUm = styled.a`
    background-color: #845aadff;
    color: #fff;
    display: inline;

    &:hover {
        background-color: #8b6aacff;
    }
`
const SecaoTopoBtnDois = styled.a`
    background-color: #fff;
    margin-left: 1rem;
    color: #000;

    &:hover {
        background-color: #845aadff;
        color: #fff;
    }
`

export default function Topo() {
    return (
        <SecaoTopo>
            <SecaoTopoContainer>
                <h1>Cuidando da sua <span>saúde mental</span></h1>
                <p>Atendimento psicológico humanizado e acolhedor para adultos, adolescentes e casais. Juntos, vamos construir um caminho para o seu bem-estar emocional.</p>
                <SecaoTopoBotoes>
                    <SecaoTopoBtnUm href="">Agendar Consulta</SecaoTopoBtnUm>
                    <SecaoTopoBtnDois href="">Conhecer Serviços</SecaoTopoBtnDois>
                </SecaoTopoBotoes>

            </SecaoTopoContainer>

        </SecaoTopo>
    )
}