import { NavLink } from "react-router-dom"
import Section from "../components/Section"
import './Ajuda.css'

export default function Ajuda() {
    return (
        <Section Titulo="Ajuda">
            <div className="divAjuda">
                <h1>Entre em contato conosco</h1>
                <p>E-mail: razor.entertainment@razor.com.br</p>
                <p>Fone/Whatsapp: "+55 11 4002-8922"</p>
            </div>
            <div className="alternativa">
                <a><NavLink to="/">Voltar</NavLink></a>
            </div>
        </Section>
    )
}