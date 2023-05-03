import Section from "../components/Section"

export default function Pedidos() {
    return (
        <Section Titulo="Jogos">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s2.glbimg.com/TFMTmLwTvITz1Uh3J-uQm0IPvRc=/0x0:1000x599/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/0/x/x21ZPHRFGdNm4OYMIuaw/sem-titulo-1-copia.png" className="d-block w-100" alt="IMAGEM 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2022/04/Fortnite.jpg?resize=954%2C537&ssl=1" className="d-block w-100" alt="IMAGEM 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sm.ign.com/ign_br/feature/i/igns-top-2/igns-top-25-nintendo-switch-games_92t4.jpg" className="d-block w-100" alt="IMAGEM 3" />
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
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://im.ziffdavisinternational.com/ign_br/screenshot/default/h322i2jcrukgb6pgi28a_pqng.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="FORZA 7"
                    />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">

                    <img
                        src="https://literaturaempauta.com.br/wp-content/uploads/2018/01/Breath-of-the-Wild-Capa-do-Jogo.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="AVENGERS"
                    />
                    <img
                        src="https://bdjogos.com.br/capas/04042018153543-Spider-Man-Playstation-4-capa-1.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="MARIO WORD"
                    />

                    <img
                        src="https://bdjogos.com.br/capas/23012018145905-God-of-War-Playstation-4-capa-1.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="GTA"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://i.pinimg.com/originals/d6/97/34/d69734166275297d36a06767a76108b3.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="ANIMES"
                    />

                    <img
                        src="https://i.pinimg.com/originals/11/68/89/116889de7a1d09316e376501f77a05b3.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="4K GAMES"
                    />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">

                    <img
                        src="https://meups.com.br/wp-content/uploads/2020/09/WALLPAPER_Avengers_8.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="AVENGERS"
                    />
                    <img
                        src="https://www.gottabemobile.com/wp-content/uploads/2017/06/Forza7HERO-1-hero-720x404.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="MARIO WORD"
                    />

                    <img
                        src="https://w.forfun.com/fetch/8b/8b75082978499d655d0eee8e70b3c156.jpeg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="GTA"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://i.pinimg.com/originals/d6/97/34/d69734166275297d36a06767a76108b3.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="ANIMES"
                    />

                    <img
                        src="https://i.pinimg.com/originals/11/68/89/116889de7a1d09316e376501f77a05b3.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="4K GAMES"
                    />
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://wallpaper4k.com.br/wp-content/uploads/2022/11/wallpapers-do-super-mario-em-4k-para-pc-e-celular-41.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="FORZA 7"
                    />
                </div>
            </div>
        </Section>
    )
}