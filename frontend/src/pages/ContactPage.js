import { useRef, useReducer, useState } from "react";
import emailjs from '@emailjs/browser';


// Form reducer function for parsing form onChange events to an object.
const formReducer = (state, event) => {
    // If we submitted a form, and reset is true.
    if (event.reset) {
        return {
            name: '',
            email: '',
            message: '',
        }
    }
    // Otherwise appends the results.
    return {
        ...state,
        [event.name]: event.value
    }
}


function Contact() {

    // For submitting form data.
    const form = useRef();

    // Set state hooks for form data and on submission.
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    // Callback for onSubmit that sends form data using EmailJS API, echos the form submission, 
    // and resets the form.
    const sendEmail = (e) => {
        // Prevent default behavior.
        e.preventDefault();

        // Sends form data via EmailJS API.
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Set submitting state with 3-second timeout function to simulate/confirm submission, 
        // then reset the form.
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            });
        }, 3000)

    };

    // Callback for onChange for form inputs.
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <>
            <h2 className="pageTitle">Contact Us</h2>
            <p className="pageSubtitle">
                Share your thoughts by sending a message through the browser
                with <strong>MailJS</strong> API.
            </p>
            <article>
                {submitting &&
                    <div>
                        Submitting contact form data...
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                }
                <form ref={form} onSubmit={sendEmail}>
                    <fieldset>
                        <legend>Tell us what you think!</legend>
                        <label>Name (Required)</label>
                        <input type="text" name="name"
                            size="30" maxLength="100" required
                            placeholder='First and last name'
                            onChange={handleChange}
                            value={formData.name || ''}
                            autoFocus
                        />
                        <label>Email (Required)</label>
                        <input type="email" name="email"
                            size="30" maxLength="100" required
                            pattern="[^ @]+@[^ @]+.[a-z]+"
                            placeholder='name@host.com'
                            onChange={handleChange}
                            value={formData.email || ''}
                        />
                        <label>Would you rather fight 1 horse-sized duck or 100 duck-sized horses?</label>
                        <div className="inline visit">
                            <label for="1horseduck">
                                <input type="radio"
                                    name="opponent"
                                    id="1horseduck"
                                    value="1 Horse-Sized Duck"
                                />
                                1 Horse-Sized Duck
                            </label>
                            <label for="1000duckhorse">
                                <input type="radio"
                                    name="opponent"
                                    id="1000duckhorse"
                                    value="1000 Duck-Sized Horses"
                                />
                                1000 Duck-Sized Horses
                            </label>
                        </div>
                        <label>Message (Required)</label>
                        <textarea name="message"
                            maxLength="250" required
                            placeholder='Write 250 characters or less.'
                            onChange={handleChange}
                            value={formData.message || ''}
                        />
                        <input type="submit" value="Send" className="sendButton" />
                    </fieldset>
                </form>
            </article>
        </>
    );
}


export default Contact;