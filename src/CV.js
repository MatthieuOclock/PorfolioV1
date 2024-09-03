import './reset.css'; 
import './global.css'; 
import React from 'react';
import Info from './componants/info/Info';
import Competence from './componants/competence/Competence';
import Formations from './componants/formations/Formations';
import Projets from './componants/projets/Projets';
import Experience from './componants/experience/Experience';
import Langage from './componants/langages/Langages';

function CV() { 
    return (
        <>
            <hr/>
            <main>
            <Info/>
            <hr/>
            <Competence/>
            <hr/>
            <Formations/>
            <hr/>
            <Projets/>
            <hr/>
            <Experience/>
            <hr/>
            <Langage/>
            </main>
        </>
    ); 
}

export default CV; 
