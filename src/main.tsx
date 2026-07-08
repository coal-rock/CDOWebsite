import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'

import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Members from './pages/Members.tsx';
import Competition from "./pages/Competition.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/members' element={<Members/>}/>
                <Route path='/competition' element={<Competition/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
