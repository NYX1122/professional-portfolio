import React from 'react';

function PortfolioCard({ name, link, imgSource, order }) {
    return (
        <a className='portfolio-card-link' href={link} target='_blank'>
            <div className='portfolio-card' order={order}>
                <h4>{name}</h4>
                <img src={require(`../../assets/images/${imgSource}`).default}></img>
            </div>
        </a>
    );
}

export default PortfolioCard;