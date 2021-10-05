import React from 'react';

function Header({ selected, setSelected }) {
    const handleClick = ({ target: { text } }) => {
        switch (text) {
            case 'About me':
                setSelected('about');
                break;
            case 'Portfolio':
                setSelected('portfolio');
                break;
            case 'Contact':
                setSelected('contact');
                break;
            case 'Resume':
                setSelected('resume');
                break;
        }
    }

    return(
        <header>
            <h1 className='name'><span>BoDee Angus</span></h1>
            <nav>
                <ul>
                    <li><a href='#about' onClick={handleClick}>About me</a></li>
                    <li><a href='#portfolio' onClick={handleClick}>Portfolio</a></li>
                    <li><a href='#contact' onClick={handleClick}>Contact</a></li>
                    <li><a href='#resume' onClick={handleClick}>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;