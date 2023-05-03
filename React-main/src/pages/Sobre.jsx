import { useParams } from "react-router-dom"
import Section from "../components/Section"

export default function Sobre() {
    const { id } = useParams()

    return (
        <Section Titulo="Página Sobre">
            <p>usuário {id}</p>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.esports.net/br/wp-content/uploads/sites/3/2023/02/melhores-jogos-de-nintendo-switch-2023.jpg" className="d-block w-100" alt="IMAGEM 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2022/01/melhores-jogos-de-tiro-pc-celular.jpg" className="d-block w-100" alt="IMAGEM 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://meups.com.br/wp-content/uploads/2018/11/Jogos-inesqueciveis-do-PS4-900x503.jpg" className="d-block w-100" alt="IMAGEM 3" />
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
            <div className="textsobre">
                <h1>Razor 1911</h1>
                <h5>A Razor 1911 é uma loja de jogos que oferece uma ampla variedade de jogos para os entusiastas de videogames de todas as idades. Com uma ampla seleção de títulos de última geração, a loja é um destino ideal para quem busca os jogos mais populares e atualizados.

                    Desde sua fundação, a Razor 1911 tem se destacado por sua qualidade, confiabilidade e excelência no atendimento ao cliente. Os funcionários da loja são especialistas em jogos e estão sempre prontos para ajudar os clientes a escolherem o jogo perfeito para suas necessidades. Além disso, a loja oferece serviços de reparo de consoles e computadores, bem como assistência técnica para os jogadores que precisam de ajuda para solucionar problemas com seus equipamentos.

                    A seleção de jogos na Razor 1911 é incomparável. A loja oferece uma ampla variedade de títulos de todos os gêneros, incluindo ação, aventura, simulação, esporte, estratégia e muito mais. Com lançamentos semanais e atualizações regulares, a loja garante que os clientes tenham acesso aos jogos mais recentes e populares.

                    Além disso, a Razor 1911 oferece uma experiência de compra on-line rápida e fácil. Os clientes podem navegar pela loja virtual e encontrar seus jogos favoritos em poucos cliques. A loja oferece diversas opções de pagamento, incluindo cartão de crédito e PayPal, para maior comodidade dos clientes.

                    A Razor 1911 também é conhecida por suas promoções e descontos exclusivos. A loja frequentemente oferece ofertas especiais em seus jogos, além de brindes e prêmios para os clientes mais leais.

                    Em resumo, a Razor 1911 é a loja de jogos perfeita para os jogadores mais exigentes. Com sua seleção de jogos de alta qualidade, atendimento ao cliente excepcional e serviços de reparo e assistência técnica, a loja oferece uma experiência completa para os fãs de videogames. Se você está procurando o melhor em jogos, a Razor 1911 é o lugar certo para você!</h5>
            </div>
        </Section>
    )
}