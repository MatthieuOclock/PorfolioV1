import React from "react";
import './competence.css'; 
import C_icon from './logo/C_icon.png'; 
import Css_icon from './logo/Css_icon.png'; 
import Git_icon from './logo/Git_icon.png'; 
import Html_icon from './logo/Html_icon.png'; 
import Java_icon from './logo/Java_icon.png'; 
import Js_icon from './logo/Js_icon.png'; 
import Nodejs_icon from './logo/Nodejs_icon.png'; 
import Ocmal_icon from './logo/Ocaml_icon.png'; 
import Php_icon from './logo/Php_icon.png'; 
import Progresql_icon from './logo/Progresql_icon.png'; 
import Pyhton_icon from './logo/Pyhton_icon.png'; 
import React_icon from './logo/React_icon.png';
import Shell_icon from './logo/Shell_icon.png';

function Competence() { 
    return (
        <div class="competence">
            <div class="title_competences">
                <h1>Compétences</h1>
            </div>
            <ul className="liste_competences">
                <li><img src={Pyhton_icon} /> <p>Pyhton</p></li>
                <li><img src={Js_icon} /> <p>Javascript</p></li>
                <li><img src={React_icon} /> <p>React</p></li>
                <li><img src={Html_icon} /> <p>Html</p></li>
                <li><img src={Css_icon} /> <p>Css</p></li>
                <li><i class="fa-brands fa-sass"></i> <p>Sass</p></li>
                <li><img src={Ocmal_icon} /> OCaml</li>
                <li><i class="fa-solid fa-database"></i> <p>SQL</p></li>
                <li><img src={Progresql_icon} /> PostgreSQL</li>
                <li><img src={Nodejs_icon} /> <p>Node.js</p></li>
                <li><img src={Php_icon} /> <p>PHP</p></li>
                <li><img src={C_icon} /> <p>C</p></li>
                <li><img src={Shell_icon} /> Shell</li>
                <li><img src={Git_icon} /> <p>Git</p></li>
                <li>Arduino</li>
                <li>VHDL</li>
                <li>Scilab</li>
            </ul>
        </div>
    )
}

export default Competence; 