import React from 'react';
import PortfolioCard from '../PortfolioCard';

function Portfolio() {
    const work = [
        {
            name: 'CooKit',
            link: 'https://cookit-book.herokuapp.com/',
            github: 'https://github.com/jbped/cookit',
            imgSource: 'cookit.png'
        },
        {
            name: 'GoalGetter',
            link: 'https://goal-getters-app.herokuapp.com/',
            github: 'https://github.com/EastonShaum/Goal-Getter',
            imgSource: 'goal-getter.png'
        },
        {
            name: 'TechBlog',
            link: 'https://peaceful-hamlet-37856.herokuapp.com/',
            github: 'https://github.com/NYX1122/tech-blog',
            imgSource: 'tech-blog.jpeg'
        },
        {
            name: 'Team Profile Generator',
            link: 'https://github.com/NYX1122/team-profile-generator',
            github: 'https://github.com/NYX1122/team-profile-generator',
            imgSource: 'team-profile-generator.jpg'
        },
        {
            name: 'Budget Tracker',
            link: 'https://still-shelf-61275.herokuapp.com/',
            github: 'https://github.com/NYX1122/budget-tracker',
            imgSource: 'budget-tracker.jpg'
        },
        {
            name: 'Weather Dashboard',
            link: 'https://nyx1122.github.io/weather-dashboard/',
            github: 'https://github.com/NYX1122/weather-dashboard',
            imgSource: 'weather-dashboard.jpg'
        }
    ];

    return (
        <div className='card-container'>
            {work.map((site, i) => (
                <PortfolioCard
                    name={site.name}
                    link={site.link}
                    github={site.github}
                    imgSource={site.imgSource}
                    order={`card-${i}`}
                >
                </PortfolioCard>
            ))}
        </div>
    );
}

export default Portfolio;