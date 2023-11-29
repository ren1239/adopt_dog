import React from 'react';
import './Navbar.css';

function Navbar (){
    return(
        <nav className='nav-list'>
            <ul >
                <li > <a href = '/'>Home</a></li>
                <li> <a href = '/dogs'>Dogs</a></li>
                <li> <a href = '/cats'>Cats</a></li>
                <li> <a href = '/about'>About</a></li>
                <li> <a href = '/contact'>Contact</a></li>
                <li> <a href = '/donate'>Donate</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;