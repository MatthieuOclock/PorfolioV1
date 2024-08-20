import React from "react";
import './langages.css'; 
import france from './logo/france.png'; 
import royaume_uni from './logo/royaume-uni.png'; 

function Langage (){ 
    return(
        <div className="langage">
            <div className="title_langage">
                <h2>Langages</h2>
            </div>
            <div className="content_langage">
                <div className="content_box">
                    <img src={france} />
                    <h3>Français :</h3>
                    <p>Langue maternelle</p>
                </div>
                <div className="content_box">
                    <img src={royaume_uni} />
                    <h3>Anglais :</h3>
                    <p>Compétence Professionnel</p>
                </div>
            </div>
        </div>
    )
}

export default Langage; 