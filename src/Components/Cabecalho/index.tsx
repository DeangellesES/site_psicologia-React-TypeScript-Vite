import styled from "styled-components";

import { useEffect, useState } from "react";

const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    position: fixed;
    width: 100%;

    h1 {
        font-size: 1.5rem;
        color: #313131ff;
    }

    nav {
        display: flex;
        gap: 1rem;
        align-items: center;

        a {
            color: #474747ff;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;

            &:hover {
                color: #845aadff;
            }
        }

    }
`
const CabecalhoBtn = styled.a`
    background-color: #845aadff;
    padding: .7rem .8rem;
    border-radius: 10px;
    color: #fff !important;

    &:hover {
        background-color: #8d68b3ff;
    }
`

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Cabecalho className={scrolled ? "header scrolled" : "header"}>
            <h1>Psicologia & Bem-Estar</h1>
            <nav>
                <a href="">Início</a>
                <a href="#servicos">Serviços</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
                <CabecalhoBtn href="">Agendar Consulta</CabecalhoBtn>
            </nav>
        </Cabecalho>
    )
}