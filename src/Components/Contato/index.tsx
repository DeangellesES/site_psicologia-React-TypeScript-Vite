import styled from "styled-components";

import { FiPhone, FiLinkedin } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

const SecaoContato = styled.section`
    padding: 0 4rem 4rem 4rem;

    h1 {
        text-align: center;
        font-size: 3.5rem;
    }

`
const SecaoContatoParagrafo = styled.p`
    text-align: center;
    font-size: 1.5rem;
    color: #808080ff;
    margin-bottom: 4rem;
`
const SecaoContatoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    form {
        display: flex;
        flex-direction: column;
        border: 1px solid #cecdcdff;
        border-radius: 15px;
        padding: 2rem;

        label {
            margin: 1rem 0 .5rem 0;
            color: #1f1f1fff;
        }

        input {
            padding: .6rem;
            border-radius: 5px;
            border: 1px solid #cecdcdff;
        }
        
        textarea {
            height: 160px;
            padding: .6rem;
            border-radius: 5px;
            border: 1px solid #cecdcdff;
        }

        button {
            padding: 1rem;
            background-color: #845aadff;
            border: none;
            border-radius: 10px;
            margin-top: 1rem;
            color: #fff;
            font-size: 1.1rem;
            cursor: pointer;

            &:hover {
                background-color: #8865aaff;
            }
        }
    }
`
const SecaoContatoCaixa = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-top: 1rem;
    padding: 1rem .5rem;
    border-radius: 5px;

    p {
        font-size: 1.3rem;
        margin-bottom: .2rem;
    }

    &:hover {
        background-color: #e7e7e7ff;
    }
`
const SecaoContatoSociais = styled.div`
    margin: 2rem 0;

    h3 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        color: #3a3a3aff;
    }
`
const SecaoContatoMapa = styled.div`
    width: 95%;
    padding: 1rem;
    border: 1px solid #999999ff;
    border-radius: 10px;

    h2 {
        color: #3a3a3aff;
    }

    iframe {
        width: 100%;
        margin-top: 1rem;
        height: 36  0px;
    }
`

export default function Contato() {
    return (
        <SecaoContato id="contato">
            <h1>Entre em Contato</h1>
            <SecaoContatoParagrafo>Estou aqui para ajudar você. Agende sua consulta ou tire suas dúvidas</SecaoContatoParagrafo>
            <SecaoContatoContainer>
                <div>
                    <form action="">
                        <label htmlFor="">Nome Completo</label>
                        <input type="text" placeholder="Seu nome" />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="seu@email.com" />

                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="(11) 99898-6161" />

                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id="" placeholder="Como posso ajudar você"></textarea>

                        <button>Enviar Mensagem</button>

                    </form>
                </div>
                <div>
                    <SecaoContatoCaixa>
                        <FiPhone className="contato-icones" />
                        <div>
                            <p>Telefone</p>
                            <p>(11) 9898-6161</p>
                        </div>
                    </SecaoContatoCaixa>

                    <SecaoContatoCaixa>
                        <MdOutlineEmail className="contato-icones" />
                        <div>
                            <p>Email</p>
                            <p>contato@psicologia.com</p>
                        </div>

                    </SecaoContatoCaixa>

                    <SecaoContatoCaixa>
                        <IoLocationOutline className="contato-icones" />
                        <div>
                            <p>Endereço</p>
                            <p>Av. Paulista, 1000 - São Paulo, SP</p>
                        </div>
                    </SecaoContatoCaixa>

                    <SecaoContatoSociais>
                        <h3>Redes Sociais</h3>
                        <FaInstagram className="contato-icones-socias" />
                        <LuFacebook className="contato-icones-socias" />
                        <FiLinkedin className="contato-icones-socias" />
                    </SecaoContatoSociais>

                    <SecaoContatoMapa>
                        <h2>Localização</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.202965338221!2d-46.65793196916505!3d-23.561152873427133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1763415835523!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></iframe>
                    </SecaoContatoMapa>

                </div>
            </SecaoContatoContainer>

        </SecaoContato>
    )
}