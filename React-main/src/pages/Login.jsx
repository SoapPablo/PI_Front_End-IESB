import { useNavigate } from "react-router-dom"
import Section from "../components/Section"
import '../App.css'

export default function Login(props) {
    const navigate = useNavigate()

    function handleClick(event) {
        props.onLogin()
        navigate("/")
    }
    return (
        <Section Titulo="Login" >

            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form className="alinhado">
                        <div classNAme="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>


                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Email or username</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>


                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">

                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>


                        <button onClick={handleClick} className="botão">Entrar</button>
                    </form>
                </div>
            </div>
        </Section>
    )
}