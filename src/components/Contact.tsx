import styles from '../styles/Contact.module.css'
import image from '../assets/contact.png'
import ContactForm from './ContactForm'
import spanish from '../assets/spain.png'
import italian from '../assets/italy.png'
import english from '../assets/united-kingdom.png'

const Contact = () => {
    return <div className={styles.container}>
        <h2>Get in touch</h2>
        <div className={styles.location}>
        <p>I'm enthusiastic about working with people from everywhere!</p>
            <img src={image} alt=''/>
            <span className={styles.bottom}>Based in Buenos Aires <br/> (GMT-3)</span>
        </div>
        <div className={styles.languages}>
            <p>Contact me in any of these languages</p>
            <div className={styles.flags}>
                <img src={english} alt='english'/>
                <img src={spanish} alt='spanish'/>
                <img src={italian} alt='italian'/>
            </div>
        </div>
        <div className={styles.form}>
            <ContactForm />
        </div>
    </div>
}

export default Contact