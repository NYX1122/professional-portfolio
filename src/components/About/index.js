import React from 'react';

function About() {
    return (
        <section className='about'>
            <h2>About Me</h2>
                <div className='about-row-one'>
                    {/* <img src={require('../../assets/images/profile-photo.jpg').default}></img> */}
                    <div className='about-para'>
                        <h3>Background</h3>
                        <p>
                            <span class={'indent'}></span>To begin I’d just like to say thanks for viewing my portfolio page, I hope you like it :) . I’m a twenty year old junior full-stack web developer, trained by the full-stack coding bootcamp offered by the University of Utah. Before I began my web development career, I studied at Utah State University under a computer science major for two semesters, while working in fast food and retail. Thus, my adult life has only consisted of education and working in the food and retail service industries so far.
                        </p>
                        <p>
                            <span class={'indent'}></span>I grew up on a farm in eastern Utah, and attended Uintah High School at the nearby town of Vernal. As a teenager, I always wanted to make my family proud by attending college and obtaining a degree, because my parents and grandparents never had the opportunity themselves and always wanted me to make something more of myself. This reason, along with my childhood dream to work in the tech industry, has led me to pursuing a career in web development.
                        </p>
                        <p>
                            <span class={'indent'}></span>And what a journey it’s been! I moved across Utah to the Salt Lake Valley, leaving the place I grew up behind in order to broaden my opportunities and kick-start my professional career. It was definitely difficult adjusting to living in a metropolis when I came from a town with only 1,000 people, but it was worth it in the end, as I’m now a full-stack web developer!
                        </p>
                    </div>
                </div>
                <div className='about-row-two'>
                    <div className='about-para'>
                        <h3>Skillset</h3>
                        <p><span class={'indent'}></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='about-para'>
                        <h3>Future Goals</h3>
                        <p><span class={'indent'}></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
        </section>
    );
}

export default About;