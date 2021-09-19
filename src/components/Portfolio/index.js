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
        },
        {
            name: 'Team Profile Generator',
            link: 'https://github.com/NYX1122/team-profile-generator',
            imgSource: 'team-profile-generator.jpg'
        },
        {
            name: 'Employee Tracker',
            link: 'https://github.com/NYX1122/employee-tracker',
            imgSource: 'employee-tracker.jpg'
        },
        {
            name: 'Budget Tracker',
            link: 'https://still-shelf-61275.herokuapp.com/',
            imgSource: 'budget-tracker.jpg'
        },
        {
            name: 'Weather Dashboard',
            link: 'https://nyx1122.github.io/weather-dashboard/',
            imgSource: 'weather-dashboard.jpg'
        }
    ];

    return (
        <div className='card-container'>
            {work.map((site, i) => (
                <PortfolioCard
                    name={site.name}
                    link={site.link}
                    imgSource={site.imgSource}
                    order={`card-${i}`}
                >
                </PortfolioCard>
            ))}
        </div>
    );
}

export default Portfolio;