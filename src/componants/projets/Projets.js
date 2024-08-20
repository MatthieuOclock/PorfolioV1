import React from "react";
import './projets.css'; 

function Projets() { 
    return(
        <div className="projets">
            <div className="title_projets">
                <h2>Projets</h2>
            </div>
            <div className="content_projets">
                <div className="projet">
                    <h3>Template Quote Generator</h3>
                    <p>Développement d'une page permettant d'afficher aléatoirement une citation. Réalisé avec :</p>
                    <ul className="langages_projets">
                        <li>HTML</li>
                        <li>Css</li>
                        <li>JavaScript</li>
                    </ul>
                    <a href="https://github.com/MatthieuOclock/template-quote-generator">https://github.com/MatthieuOclock/template-quote-generator</a>
                </div>
                <div className="projet">
                    <h3>Maraîcher</h3>
                    <p>Développement complet d'un site web pour un e-commerce maraîcher. Réalisé avec :</p>
                    <ul className="langages_projets">
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                    <a href="https://github.com/MatthieuOclock/Maraicher">https://github.com/MatthieuOclock/Maraicher</a>
                </div>
            </div>
        </div>
    )
}

export default Projets; 