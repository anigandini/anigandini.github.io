import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
    
    return <form className={styles.container} action="https://formsubmit.co/564f45be643320e351fb7032faaae5ba" method="POST" >
      <input className={styles.input} type="hidden" name="_next" value="http://localhost:3000/" />
      <label>What's your name?</label>
      <input className={styles.input} type="text" name="from_name" required/>
      <label>What's your Email?</label>
      <input className={styles.input} type="email" name="user_email" required/>
      <label>Your Message</label>
      <textarea name="message" required/>
      <input className={styles.button} type="submit" value='Send' />
    </form>
    }

export default ContactForm