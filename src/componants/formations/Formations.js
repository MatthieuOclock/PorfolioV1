import React from "react";
import './formations.css'; 

function Formations() { 
    return(
        <div className="formations">
            <div className="title_formations">
                <h2>Formations</h2>
            </div>
            <div className="content_formations">
            <div className="timeline complete">
                    <div class="timeline-status"></div>
                    <div class="timeline-content">
                        <h3>2018-2021</h3>
                        <p>Licence en Electronique, Electrotechnique et Automatique</p>
                    </div>
                </div>
                <div className="timeline complete">
                    <div class="timeline-status"></div>
                    <div class="timeline-content">
                        <h3>Université Côte d'Azur</h3>
                        <p>2021-2023</p>
                        <p>Licence en informatique</p>
                    </div>
                </div>
                <div className="timeline">
                    <div class="timeline-status"></div>
                    <div class="timeline-content">
                        <h3>O'clock</h3>
                        <p>SEP 2023-SEP 2024</p> 
                        <p>Développeur Web et Web Mobile, option Accessibilité</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formations; 