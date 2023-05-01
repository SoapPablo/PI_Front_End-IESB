import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import RecuperaSenha from './pages/RecuperaSenha'
import Principal from './components/Principal'
import Erro404 from './pages/Erro404'
import Ajuda from './pages/Ajuda'
import './App.css'

export default function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <>
        <Route path="/" element={<Principal />}>
          <Route index element={<Login />}/>
          <Route path="Cadastro" element={<Cadastro />}/>
          <Route path="RecSenha" element={<RecuperaSenha />}/>
          <Route path="Ajuda" element={<Ajuda />}/>
          </Route>
        </>
        :
      <Route path="*" element={<Erro404 />}/>

      </Routes>
    </BrowserRouter>
  </>
    
  )
}
