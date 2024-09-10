import React from "react";
import './langages.css'; 
import france from './logo/france.png'; 
import royaume_uni from './logo/royaume-uni.png'; 

function Langage (){ 
    return(
        <div class="langage">
            <div class="title_langage">
                <h2>Langages</h2>
            </div>
            <div class="content_langage">
                <div class="content_box">
                    <img src={france} />
                    <h3>Français :</h3>
                    <p>Langue maternelle</p>
                </div>
                <div class="content_box">
                    <img src={royaume_uni} />
                    <h3>Anglais :</h3>
                    <p>Compétence Professionnel</p>
                </div>
            </div>
        </div>
    )
}

export default Langage; 