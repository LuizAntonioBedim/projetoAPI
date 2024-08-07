import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Estrelas from './pages/Estrelas'
import Contato from './pages/Contato'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/estrelas" element={<Estrelas />} ></Route>
                <Route path="/contato" element={<Contato />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes