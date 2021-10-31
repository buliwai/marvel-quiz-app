import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    //si pas de passage sur le bouton pas de griffe
    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);

    useEffect(() => {
        //permet de superposer griffes
        refWolverine.current.classList.add("startingImg");
        //permet de retirer griffes avec un décompte
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000);

    }, [])
    //affichage griffes gauche
    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg") ;
    }
    //affichage griffes droites
    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }
    //vérification présence image et l'enlève
    const clearImg = () => {

        if(refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        } else if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }
    //création de la condition évènement bouton
    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg}  className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )
    return (
        <main ref={refWolverine} className="welcomePage">
            { displayBtn }
        </main>
    )
}

export default Landing
