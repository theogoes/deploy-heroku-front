import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function HeaderNav({clearUserID}) {

    const n = useNavigate()

    function clear(){
        clearUserID()
        localStorage.clear()
        n('/')
    }

    return (
        <header>
            <nav>
                <a href='/feed'>
                <div className='headlogo'>
                    <p>P</p>
                    <p>a</p>
                    <p>r</p>
                    <p>t</p>
                    <p>y</p>
                    <p>F</p>
                    
                </div>
                </a>
                    <p id='sair' onClick={clear}> Sair</p>
            </nav>
        </header>
    )

}

