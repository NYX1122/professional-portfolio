import React from 'react';

function Contact() {
    return (
        <section className='contact'>
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name'/>
                </div>
                <div>
                    <label htmlFor='company'>Company:</label>
                    <input type='text' name='company'/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textArea name='message' rows='6' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default Contact;