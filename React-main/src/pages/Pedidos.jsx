import Section from "../components/Section"

export default function Pedidos() {
    return (
        <Section Titulo="Jogos">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.b9.com.br/wp-content/uploads/2021/06/vavab9.jpg" className="d-block w-100" alt="IMAGEM 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1517290/capsule_616x353.jpg?t=1682430413" className="d-block w-100" alt="IMAGEM 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg" className="d-block w-100" alt="IMAGEM 3" />
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
        </Section>
    )
}