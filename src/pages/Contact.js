import React, { useState } from "react";
import '../css/contact.css';
export default function Contact (){
    const [contactInput, setContactInput] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [successMg, setSuccessMg] = useState(false);
    const handleContactForm = (e) => {
        e.preventDefault();
        setContactInput({
            name: '',
            email: '',
            message: ''            
        })
        setSuccessMg(true);
        setTimeout(() => {
            setSuccessMg(false);
        }, 3000);
    }
    const handleValue = (e) => {
        const {name, value} = e.target;
        setContactInput((preValue) => ({
            ...preValue, [name]:value 
        }));
    }
    return(
        <div className="contactPageLayout">
            <div className="contactMap">
                <iframe title='Michael UI Developer Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.4322482144246!2d77.46072973875927!3d8.984614297069776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069dfb2f3c9c89%3A0x9ca5dc6dc45f6ecc!2sVadiyur%2C%20Tamil%20Nadu%20627859!5e0!3m2!1sen!2sin!4v1728127489921!5m2!1sen!2sin" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contactLayout">
                <h1>Get in touch</h1>
                {successMg &&
                <div className="successMessage">
                    <p><strong>Success!</strong> We get you soon</p>
                </div>
                }
                <div className="contactSectionLayout">
                    <div className="contactFormLayout">
                        <form className="contactForm" onSubmit={(e) => handleContactForm(e)}>
                            <div className="inputControl">
                                <input type="text" name="name" className="name" placeholder="Enter your name" value={contactInput.name} required onChange={(e) => handleValue(e)}/>
                            </div>
                            <div className="inputControl">
                                <input type="email" name="email" className="email" placeholder="Enter your email" value={contactInput.email} required onChange={(e) => handleValue(e)} />
                            </div>  
                            <div className="inputControl">
                                <textarea name="message" value={contactInput.message} className="message" placeholder="Enter your feedback" required onChange={(e) => handleValue(e)}></textarea>
                            </div>
                            <div className="submitBtn">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="contactContentLayout">
                        <ul>
                            <li>
                                <span><img src="/images/icons/phone-icon.png" alt="Michael UI Developer Icons" /></span>
                                <span><a href="tel:+91 8220663018">+91 8220663018</a></span>
                            </li>
                            <li>
                                <span><img src="/images/icons/email-icon.png" alt="Michael UI Developer Icons" /></span>
                                <span><a href="mailto:michael81092@gmail.com">michael81092@gmail.com</a></span>
                            </li>
                            <li>
                                <span><img src="/images/icons/whatapp-icon.png" alt="Michael UI Developer Icons" /></span>
                                <span><a href="https://api.whatsapp.com/send?text=Hi&phone=+918220663018" target="_blank" rel="noreferrer">+91 8220663018</a></span>
                            </li>
                            <li>
                                <span><img src="/images/icons/location-icon.png" alt="Michael UI Developer Icons" /></span>
                                <span>Tenkasi, Tamil Nadu - 627861</span>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}