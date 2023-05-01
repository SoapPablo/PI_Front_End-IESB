import { NavLink } from "react-router-dom";
import Section from "../components/Section"
import './Login.css'

export default function Login() {
    return (
        <Section Titulo="Login">
            <div className="main">
                <div className="inputs">
                    <form>
                        <div>
                            <input type="text" id="login" placeholder="Login" />
                        </div>
                        <div>
                            <input type="password" placeholder="Senha" />
                        </div>
                    </form>
                </div>
                <div className="insc">
                    <a><NavLink to="Cadastro">Inscreva-se</NavLink></a>
                </div>
                <div className="botao">
                    <button type="submit">Entrar</button>
                </div>
                <div className="alternativa">
                    <a><NavLink to="RecSenha">Esqueci a senha</NavLink></a>
                    <a href="Ajuda">Ajuda</a>
                </div>
            </div>
        </Section >
    )
}