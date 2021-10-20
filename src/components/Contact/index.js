import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [modal, toggleModal] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const inquirerName = e.target[0].value;
        const company = e.target[1].value;
        const inquirerEmail = e.target[2].value;
        const message = e.target[3].value;

        if (inquirerName && company && inquirerEmail && message) {
            const templateParams = {
                user_name: inquirerName,
                company: company,
                user_email: inquirerEmail,
                message: message
            };

            await emailjs.send('service_8foh7wh', 'contact_form', templateParams, 'user_D9Sj4kQlybYrXXUQ34cjK')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toggleModal('success');
                }, (err) => {
                    console.log('FAILED...', err);
                    toggleModal('error');
                });
        } else {
            toggleModal('validationError');
            console.log(modal);
        }
    }

    const closeModal = () => {
        toggleModal('');
        window.location.reload();
    }

    const closeModalValidation = () => {
        toggleModal('');
    }

    return (
        <section className='contact'>
            <h2>Contact Me</h2>
            <form onSubmit={onSubmit}>
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
                    <textarea name='message' rows='6' />
                </div>
                <button type='submit'>Submit</button>
            </form>
            {(modal === 'success') ?
                <div className='modal'>
                    <div className='modal-content'>
                        <h1>BoDee has successfully received your message.</h1>
                        <button onClick={closeModal}>Understood</button>
                    </div>
                </div>
            : (modal === 'error') ?
                <div className='modal'>
                    <div className='modal-content'>
                        <h1>There was an error processing your message. Please try again or contact BoDee using another method.</h1>
                        <button onClick={closeModal}>Understood</button>
                    </div>
                </div>
            : (modal === 'validationError') &&
                <div className='modal'>
                    <div className='modal-content'>
                        <h1>There was an error validating your message. Please make sure that all fields are provided.</h1>
                        <button onClick={closeModalValidation}>Understood</button>
                    </div>
                </div>
            }
        </section>
    )
};

export default Contact;