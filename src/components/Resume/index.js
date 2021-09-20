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
            education: [
                {
                    header: 'University of Utah',
                    headerTwo: 'Full-stack Web Development Bootcamp',
                    time: '04/2021 - 10/2021',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    header: 'Utah State University',
                    headerTwo: 'General Studies',
                    time: 'Spring and Fall semesters of 2020',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    header: 'Uintah High School',
                    headerTwo: 'High School Diploma',
                    time: '2015 - 2019',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        }
    ];

    return (
        <section className='resume'>
            <h2>Resume</h2>
            {categories.map(category => (
                <ResumeCategory category={category}></ResumeCategory>
            ))}
        </section>
    )
};

export default Resume;