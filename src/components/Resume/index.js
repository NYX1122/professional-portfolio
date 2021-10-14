import React from 'react';
import ResumeCategory from '../ResumeCategory';

function Resume() {
    const categories = [
        // 'Education',
        // 'Career',
        // 'Skills',
        // 'Accomplishments',
        // 'References'
        {
            title: 'Education',
            items: [
                {
                    header: 'University of Utah - Online',
                    headerTwo: 'Full-stack Web Development Bootcamp',
                    time: '04/2021 - 10/2021',
                    description: 'Learned a plethora of languages, skills, and tools utilized to perform MERN full stack web development.'
                },
                {
                    header: 'Utah State University - Vernal Campus',
                    headerTwo: 'General Studies',
                    time: 'Spring and Fall semesters of 2020',
                    description: 'General studies to begin my secondary education.'
                },
                {
                    header: 'Uintah High School - Vernal, Utah',
                    headerTwo: 'High School Diploma',
                    time: '2015 - 2019',
                    description: 'Learned a broad range of different subjects, including, but not limited to, general studies, child-development, economics, basic accounting, 3D rendering with Blender, and basic Javascript.'
                }
            ]
        },
        {
            title: 'Experience',
            items: [
                {
                    header: 'Angus Upholstery - Lapoint, Utah',
                    headerTwo: 'Laborer',
                    time: '08/2017 - 02/2018',
                    description: 'Carried heavy furniture, performed manual labor to take upholstery apart, and took care of shop maintenance.'
                },
                {
                    header: 'J Brothers Trucking and Excavation - Lapoint, Utah',
                    headerTwo: 'Laborer',
                    time: 'Summer of 2018',
                    description: 'Raked gravel to level grade at a construction site, and operated a skid steer to transport sand and gravel.'
                },
                {
                    header: 'McDonald\'s - Vernal, Utah',
                    headerTwo: 'Crew Worker',
                    time: '12/2018 - 05/2019',
                    description: 'Carried out an assortment of different resopnsibilities including cleaning, taking orders, cooking, and handing out food. This job required me to develop problem solving and people skills in sometimes stressful situations.'
                },
                {
                    header: 'Freight Lanes - Herriman, Utah',
                    headerTwo: 'Productivity Manager',
                    time: '01/2019 - now',
                    description: 'Part-time office job in which I document and calculate payroll for truck drivers, document revenue and expenses using quickbooks, and finally track overall company efficiency and productivity.'
                },
                {
                    header: 'Subway - Vernal, Utah',
                    headerTwo: 'Assistant Manager - Vernal, Utah',
                    time: '06/2019 - 01/2020',
                    description: 'Leadership role where I practiced customer service, employee management, multitasking, casheiring, and scheduling.'
                },
                {
                    header: 'Ross - Vernal, Utah',
                    headerTwo: 'Store Associate - Vernal, Utah',
                    time: '08/2020 - 12/2020',
                    description: 'Part-time job in which I again practiced customer service, casheiring, and multitasking.'
                },
            ]
        },
        {
            title: 'Skillset',
            items: [
                {
                    header: 'Languages',
                    set: ['HTML', 'CSS', 'JavaScript-ES6', 'JSON', 'SQL', 'JSX', 'Regex']
                },
                {
                    header: 'Tools',
                    set: ['React', 'Bootstrap', 'JQeury', 'Node', 'Express', 'Jest', 'Sequelize', 'Webpack']
                },
                {
                    header: 'Database Technologies',
                    set: ['MySQL', 'MongoDB', 'Graphql', 'Apollo']
                },
                {
                    header: 'Proficiencies',
                    set: ['Agile Development', 'APIs', 'DOM Manipulation', 'Object-oriented Programming', 'MVC Paradigm', 'Progressive Web Applications', 'Algorithms / Benchmarking']
                },
                {
                    header: 'Characteristics - according to my friends and family :)',
                    set: ['Extroverted', 'Quick-thinking', 'Motivated', 'Energetic', 'Goal-oriented', 'Charismatic', 'Intelligent', 'Optimistic', 'Empathetic', 'Caring', 'Warm', 'Creative', 'Enthusiastic']
                }
            ]
        }
    ];

    return (
        <section className='resume'>
            <h2 className='resume-title'>Resume</h2>
            <div className='resume-header'>
                <h2>BoDee Angus</h2>
                <h2>|</h2>
                <h2>Junior Full Stack Web Developer</h2>
            </div>
            {categories.map(category => (
                <ResumeCategory category={category}></ResumeCategory>
            ))}
        </section>
    )
};

export default Resume;