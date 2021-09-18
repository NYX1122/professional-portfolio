import React from 'react';

function Header() {
    return(
        <header>
            <h1 className='name'><span>BoDee Angus</span></h1>
            <nav>
                <ul>
                    <li><a href='#about'>About me</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#resume'>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;