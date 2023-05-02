import Section from "../components/Section"
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'

export default function Novo() {
    return (
        <Section Titulo="Game Pass">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/ab/b5/da/abb5da0da058a36e9f4cb43d88914272.jpg" className="d-block w-100" alt="IMAGEM 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://t2.tudocdn.net/223397?w=1920" className="d-block w-100" alt="IMAGEM 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EC5WfQ7X4AAymLE.jpg" className="d-block w-100" alt="IMAGEM 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="https://img.olx.com.br/images/62/622333636803338.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">ULTIMATE</h5>
                        <h5>R$ 44,99/mês</h5>
                        <p className="card-text">Jogue centenas de jogos de alta qualidade no console, PC e nuvem<br />
                            Novos jogos adicionados a todo o momento<br />
                            Títulos do Xbox Game Studios disponíveis no mesmo dia do lançamento<br />
                            Descontos e ofertas exclusivos para membros<br />
                            Vantagens gratuitas, incluindo conteúdo no jogo e ofertas de parceiros<br />
                            Desbloqueie os benefícios da Riot Games<br />
                            <h4>TAMBÉM INCLUI:<br />
                                (UM VALOR DE R$ 34,99/ MÊS)</h4>
                            O Xbox Live Gold inclui Deals with Gold, Games with Gold, múltiplos jogadores para console<br />
                            Uma biblioteca dos principais títulos da Electronic Arts no console e no PC, recompensas exclusivas e conteúdo somente para membros</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://cdn.cdkeys.com/500x706/media/catalog/product/3/-/3-month-xbox-game-pass-pc_1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">PC </h5>
                        <h5>R$ 29,99/mês</h5>
                        <p className="card-text">Jogue centenas de jogos de alta qualidade no PC <br />
                            Novos jogos adicionados a todo o momento<br />
                            Títulos do Xbox Game Studios disponíveis no mesmo dia do lançamento<br />
                            Descontos e ofertas para membros<br />
                            Desbloqueie os benefícios da Riot Games.
                            <h4>TAMBÉM INCLUI:</h4>
                            Uma biblioteca dos principais títulos da Electronic Arts no PC, prêmios exclusivos e conteúdo exclusivo para membros</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://assets.xboxservices.com/assets/85/ef/85ef8a9f-e1d3-4ffb-86bb-fca7edb25874.jpg?n=XGP_Image-0_Boxshot-Standard_XGP-Catalog_720x1080.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CONSOLE</h5>
                        <h5>R$ 29,99/mês</h5>
                        <p className="card-text">Jogue centenas de jogos de alta qualidade no console <br />
                            Novos jogos adicionados a todo o momento<br />
                            Títulos do Xbox Game Studios disponíveis no mesmo dia do lançamento<br />
                            Descontos e ofertas para membros<br />
                            Desbloqueie os benefícios da Riot Games</p>                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="" className="rounded me-2" alt="..." />
                        <strong className="me-auto">Xbox Game Pass Ultimate</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Benefícios extra para membros do Xbox Game Pass Ultimate.
                </div>
            </div>
        </Section>
    )
}