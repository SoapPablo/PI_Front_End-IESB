import { NavLink } from "react-router-dom";
import Section from "../components/Section"
import './Cadastro.css'

export default function Cadastro() {
    return (
        <Section Titulo="Cadastro">
            <div className="inputs">
                <form><div>
                    <input type="text" placeholder="E-mail" />
                </div>
                    <div>
                        <input type="text" id="pais" placeholder="País" maxlength="3" />
                        <input type="tel" id="celular" placeholder="(00) 0 0000-0000" maxlength="11" />
                    </div>
                    <div>
                        <input type="password" placeholder="Senha" />
                    </div>
                    <div>
                        <input type="password" placeholder="Confirma senha" />
                    </div>
                    <div>
                        <input type="text" placeholder="CPF" maxlength="11" />
                    </div>
                </form>
            </div>
            <div className="botao">
                <button type="submit">Cadastrar</button>
            </div>
            <div className="alternativa">
                <a><NavLink to="/">Voltar</NavLink></a>
            </div>
        </Section>
    )
}