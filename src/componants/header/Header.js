import React from "react";
import './header.css'; 

function Header() { 
    return(
        <div class="banner">
            <header>
                <div class="name">
                    <h1>Matthieu</h1>
                    <h2 class="nom">ME-HONG-SHIT-LI</h2>    
                </div>
                <nav>
                    <ul class="navigation">
                        <li>Information</li>
                        <li>Compétences</li>
                        <li>Formation</li>
                        <li>Projets</li>
                        <li>Expérience Professionnelle</li>
                        <li>Langues</li>
                        <li>Intéréts</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header; 