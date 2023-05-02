import Section from "../components/Section"
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'

export default function Home() {
    return (
        <Section Titulo="Menu">
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
            <div className="alingicons">
                <div className="icons">
                    <NavLink to="/" className="icone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                        <h1>Sobre</h1>
                    </NavLink>
                    <NavLink to="/novo" className="icone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-xbox" viewBox="0 0 16 16">
                            <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                        </svg>
                        <h1>Game Pass</h1>
                    </NavLink>
                    <NavLink to="/Pedidos" className="icone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                        </svg>
                        <h1>Jogos</h1>
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://wallpaper4k.com.br/wp-content/uploads/2022/11/wallpapers-do-super-mario-em-4k-para-pc-e-celular-41.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="FORZA 7"
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
            </div>
        </Section>
    )
}