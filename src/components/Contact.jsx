import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import './Contact.css';
const Contact = () => {
    return (
        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Us</h2>
          <div className="container contact-container">
            <div className="contact_options">
                 <article className="contact_option">
                  <MdOutlineMail></MdOutlineMail>
                  <h4>Email</h4>
                  <h5>vishakhamourya508@gmail.com</h5>
                  <a href="mailto:vishakhamourya508@gmail.com" target="_blank">Send a message</a>
                 </article>
                 <article className="contact_option">
               <BsLinkedin></BsLinkedin>
                  <h4>Linkedin</h4>
                  <h5>vishakha mourya</h5>
                  <a href="https://linkedin.com" target="_blank">Send a message</a>
                 </article>
                 <article className="contact_option">
                  <BsWhatsapp></BsWhatsapp>
                  <h4>WhatsApp</h4>
                  <h5>+917224071478</h5>
                  <a href="https://api.whatsapp.com/send?phone=+917224071478" target="_blank">Send a message</a>
                 </article>
            </div>
            <form action="">
              <input type="text" name="name" placeholder="Your Full Name" required></input>
              <input type="email" name="email" placeholder="enter your email" required></input>
              <textarea name="message" rows={7} placeholder="Your message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      );
}
 
export default Contact;