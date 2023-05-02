import { NavLink, useNavigate } from "react-router-dom";
import './Header.css'

export default function Header(props) {
  const navigate = useNavigate()

  function handleClick(event) {
    props.onLogout()
    navigate("/Login")

  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className="logo" src="https://see.fontimg.com/api/renderfont4/2vzW/eyJyIjoiZnMiLCJoIjoxNzEsInciOjI2MjUsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UmF6b3IgMTkxMQ/razor-1911.png" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Pedidos" className="nav-link">Jogos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/novo" className="nav-link">Game Pass</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/sobre/${props.usuarioID}`} className="nav-link">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <button onClick={handleClick} className="nav-link">Sair</button>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </nav>
    </header>
  )
}