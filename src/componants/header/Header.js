import React from "react";
import './header.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from "../../Accueil";
import CV from "../../CV";

function Header() { 
    return(
        <div class="banner">
            <Router>
                <header>
                    <Link to="/" class="page">
                        <div class="name">
                            <h1>Matthieu</h1>
                            <h2 class="nom">ME-HONG-SHIT-LI</h2>    
                        </div>
                    </Link>
                    <nav>
                        <ul class="navigation">
                            <li><Link to="/" class="page">Acceuil</Link></li>
                            <li><Link to="/cv" class="page">CV</Link></li>
                            <li><Link to="./projet" class="page">Projets</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
            </Router>
        </div>
    )
} 

export default Header; 