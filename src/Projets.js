import './reset.css'; 
import './global.css'; 
import React from 'react';
import Presentations from './componants/presentation/Presentations.js'; 

function Projets(){
    return(
        <>
            <hr/>
            <main>
                <Presentations/>
            </main>
        </>
    ); 
}

export default Projets; 

