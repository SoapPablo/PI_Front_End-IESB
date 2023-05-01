import { NavLink } from "react-router-dom"
import Section from "../components/Section"
import './RecuperaSenha.css'

export default function RecuperaSenha() {
    return (
        <Section Titulo="RecuperaSenha">
            <div class="botao">
                <form>
                    <input id="reMail" type="text" placeholder="Email / Celular" />
                </form>
                <p>Um E-mail/SMS de redefinição se senha será enviado</p>
                <button id="Enviar" type="submit">Enviar</button>
            </div>
            <div class="alternativa">
                <a><NavLink to="/">Voltar</NavLink></a>
            </div>
        </Section>
    )
}