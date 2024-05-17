import './Contact.css';
import ContactMain from '../../components/ContactPage/ContactHead/contactmain'
import ContactForm from '../../components/ContactPage/ContactForm/ContactForm';
import Navigation from '../../components/Mainpage/navbar';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="main_container">
        <ContactMain />
        <ContactForm />
      </div>
    </div>
  );
};


export default Contact;