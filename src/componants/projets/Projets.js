import React from "react";
import './projets.css'; 
import Css_icon from './logo/Css_icon.png'; 
import Github_icon from './logo/Github_icon.png'; 
import Html_icon from './logo/Html_icon.png'; 
import js_icon from './logo/Js_icon.png'; 
import Nodejs_icon from './logo/Nodejs_icon.png'; 

function Projets() { 
    return(
        <div className="projets">
            <div className="title_projets">
                <h2>Projets</h2>
            </div>
            <div className="content_projets">
                <div className="projet">
                    <h3>Template Quote Generator</h3>
                    <div className="content_projet"> 
                        <p>Développement d'une page permettant d'afficher aléatoirement une citation. Réalisé avec :</p>
                        <ul className="langages_projets">
                            <li><img src={Html_icon} /> <p>HTML</p></li>
                            <li><img src={Css_icon} /> <p>Css</p></li>
                            <li><img src={js_icon} /> <p>JavaScript</p></li>
                        </ul>
                        <a href="https://github.com/MatthieuOclock/template-quote-generator"><img src={Github_icon} /></a>
                    </div>
                </div>
                <div className="projet">
                    <h3>Maraîcher</h3>
                    <div className="content_projet">
                        <p>Développement complet d'un site web pour un e-commerce maraîcher. Réalisé avec :</p>
                        <ul className="langages_projets">
                            <li><img src={Nodejs_icon} /> <p>Node.js</p></li>
                            <li>Express</li>
                        </ul>
                        <a href="https://github.com/MatthieuOclock/Maraicher"><img src={Github_icon}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets; 