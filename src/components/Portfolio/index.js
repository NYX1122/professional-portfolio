import React from 'react';
import PortfolioCard from '../PortfolioCard';

function Portfolio() {
    const work = [
        {
            name: 'GoalGetter',
            link: 'https://goal-getters-app.herokuapp.com/',
            imgSource: 'goal-getter.png'
        },
        {
            name: 'TechBlog',
            link: 'https://peaceful-hamlet-37856.herokuapp.com/',
            imgSource: 'tech-blog.jpeg'
        }
    ];

    return (
        <div className='card-container'>
            {work.map((site, i) => (
                <PortfolioCard
                    name={site.name}
                    link={site.link}
                    imgSource={site.imgSource}
                >
                </PortfolioCard>
            ))}
        </div>
    );
}

export default Portfolio;