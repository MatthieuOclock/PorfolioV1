import React from "react";
import './header.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from "../../Accueil";
import CV from "../../CV";
import Projets from "../../Projets"; 

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
                            <Link to="/" class="page"><li>Acceuil</li></Link>
                            <Link to="/cv" class="page"><li>CV</li></Link>
                            <Link to="/projets" class="page"><li>Projets</li></Link>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/projets" element={<Projets />} />
                </Routes>
            </Router>
        </div>
    )
} 

export default Header; 