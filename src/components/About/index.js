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
                            <span className={'indent'}></span>To begin I’d just like to say thanks for viewing my portfolio page, I hope you like it :) . I’m a twenty
                            year old junior full-stack web developer, trained by the full-stack coding bootcamp offered by the University of Utah. Before I began 
                            my web development career, I studied at Utah State University under a computer science major for two semesters, while working in fast 
                            food and retail. Thus, my adult life has only consisted of education and working in the food and retail service industries so far,
                            with the addition of every project I've worked on in the bootcamp of course.
                            <br/>
                            <br/>
                            <span className={'indent'}></span>I grew up on a farm in eastern Utah, and attended Uintah High School at the nearby town of Vernal. As
                            a teenager, I always wanted to make my family proud by attending college and obtaining a degree, because my parents and grandparents 
                            never had the opportunity themselves and always wanted me to make something more of myself. This reason, along with my childhood 
                            dream to work in the tech industry, has led me to pursuing a career in web development.
                            <br/>
                            <br/>
                            <span className={'indent'}></span>And what a journey it’s been! I moved across Utah to the Salt Lake Valley, leaving the place I grew up 
                            behind in order to broaden my opportunities and kick-start my professional career. It was definitely difficult adjusting to living in 
                            a metropolis when I came from a town with only 1,000 people, but it was worth it in the end, as I’m now a full-stack web developer!
                        </p>
                    </div>
                </div>
                <div className='about-row-two'>
                    <div className='about-para'>
                        <h3>Skillset</h3>
                        <p><span className={'indent'}></span>
                            I am proficient in CSS, HTML, JavaScript, SQL, and JSX, as well as a number of tools and technologies associated with these languages. 
                            My certification in full-stack web development focused on a MERN (Mongoose, Express, React, and Node) type web application. I also 
                            learned a number of best practices and coding paradigms to help make me industry competitive, such as the mobile first development 
                            approach, testing frameworks using Jest, agile development, OOP (Object-oriented programming), the MVC (Model, View, Controller) 
                            paradigm, the ability to create PWAs (Progressive Web Applications), as well as a number of useful algorithms and benchmarking 
                            associated with them. 
                            <br/>
                            <br/>
                            <span className={'indent'}></span>Along with these Web Development skills I also have high typing speed (69 WPM based on the medium text
                            test on typingtest.com), proficiency in Microsoft office applications, proficiency in Google drive web applications, and proficiency
                            in using Adobe inDesign. I am a very social person who is known for my extroversion, and as such I have always worked well in group
                            work environments. To add to my workplace strengths, I am an optimistic and enthusiastic person who strives to find positivity
                            in even stressful or negative situations, and I also possess very strong communication skills (a skill I developed thoroughly while working in
                            the fast food service industry in order to better serve customers as an employee, and to coordinate my team more effectively as a manager.)
                        </p>
                    </div>
                    <div className='about-para'>
                        <h3>Future Goals</h3>
                        <p><span className={'indent'}></span>
                            Currently I am hoping to join the web development workforce so that I may finally begin to gain proper work experience and expand my web-dev
                            skills. After I find a job, I also want to continue my secondary education to acheive a bachelors in Computer Science, while minoring in web
                            development. I am very passionate about acheiving the goals I set out for myself, and as such any employer that allows me the opportunity to
                            work will see that I am a hard-working and diligent employee who will strive for a positive and professional work environment.
                        </p>
                    </div>
                </div>
        </section>
    );
}

export default About;