import React from 'react';

function PortfolioCard({ name, link, github, imgSource, order }) {
    return (
        <div className='portfolio-card-link'>
            <div className='portfolio-card' order={order}>
                <h4>{name}</h4>
                <div className='container'>
                    <img src={require(`../../assets/images/${imgSource}`).default} alt='website thumbnail'></img>
                    <div className='link-buttons'>
                        <a className='deployed' href={link} target='_blank' rel='noreferrer'><button className="deployed">Deployed</button></a>
                        <a className='github' href={github} target='_blank' rel='noreferrer'><button className="github">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;