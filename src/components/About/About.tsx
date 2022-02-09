import styles from '../../styles/About.module.css'
import image from '../../assets/about.png'
import { isMobile } from 'react-device-detect'

const About = () => {
    
    const DownloadResumeButton = <a href={require('./anahigandini-cv.pdf')} download>Download my resume</a>

    return <div className={styles.container}>
        <h2>About me</h2>
        <p>Passionate about visual arts and technology. I am always seeking to do my best. I'm an extremely curious and self lerner person who wants to go in depth on every problem that faces. Basically, there's nothing you can imagine that can't be coded and here I am to make your dream project come true.</p>
        {isMobile ? '' : DownloadResumeButton}
        <img src={image} alt=''/>
    </div>
}

export default About