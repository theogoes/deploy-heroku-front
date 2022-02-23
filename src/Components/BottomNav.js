import React from 'react'
import {AiFillHome, AiOutlineSearch, AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function BottomNav() {
    return (
        <footer>
            <nav>
                <Link to={"/"}>
                     <AiOutlineSearch className='BottomIcon'/>
                </Link>
                <Link to={"/feed"}>
                    <AiFillHome className='BottomIcon'/>
                </Link>
                <Link to={"/party"}>
                    <AiFillPlusCircle className='BottomIcon'/>
                </Link>    
            </nav>
            <a href='/party'>
            <div className='butt'>
            <button class="kc_fab_main_btn">+</button>
            </div>
            </a>
        </footer>
    )
}


