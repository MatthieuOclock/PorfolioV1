import React from "react";
import './header.css'; 
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
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
                            <Link to="/projets" class="page"><li>Projets</li></Link>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="*" element={<CV />} />
                    <Route path="/projets" element={<Projets />} />
                </Routes>
            </Router>
        </div>
    )
} 

export default Header; 