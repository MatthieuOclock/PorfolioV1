import React from "react";
import './info.css'; 
import Linkeding_icon from './logo/Linkeding_icon.png';

function Info(){ 
    return(
        <div>
            <div class="content">
                <div>
                    <p>
                        Jeune développeur web full-stack passionné, titulaire d'une bi-lience en informatique et en 
                        EEA, avec expertise en accessibilité. Je me spécialise dans la création de produits accessibles. 
                    </p>
                </div>
            </div>
            <div>
                <ul class="contact">
                    <li><i class="fa-solid fa-location-dot"></i><p>Paris</p></li>
                    <li><i class="fa-solid fa-phone"></i><p>+ 33 (0)7 52 55 60 85</p></li>
                    <li><i class="fa-solid fa-envelope"></i><p>mslmatth@gmail.com</p></li>
                    <li>
                        <a href="https://www.linkedin.com/in/matthieumsl"><img src={Linkeding_icon} /></a>
                        <a href="https://www.linkedin.com/in/matthieumsl"><p>www.linkedin.com/in/mattieumsl</p></a>
                    </li>
                    <li><a href="https://linktr.ee/matthieumsl">linktr.ee/mattieumsl</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Info; 