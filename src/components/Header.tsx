import styles from '../styles/Header.module.css'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const Header  = () => {
    const [offset, setOffset] = useState(0)
    const [mouseOverLinkedin, setMouseOverLinkedin] = useState(false)
    const [mouseOverGithub, setMouseOverGithub] = useState(false)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)
        // clean up code
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [offset]);

    const socialLinks = isMobile ? 
            <div>
            <a href='https://www.linkedin.com/in/anigandini/' target='__blank' onClick={() => setMouseOverLinkedin(true)}>
                {mouseOverLinkedin ? <img src={require(`../assets/linkedin-colored.png`)} alt='linkedin icon'/> : <img src={require(`../assets/linkedin.png`)} alt='linkedin icon'/> }
            </a>
            <a href='https://github.com/anigandini' target='__blank' onClick={() => setMouseOverGithub(true)}>
                {mouseOverGithub ? <img src={require(`../assets/contact-github-colored.png`)} alt='github icon'/> : <img src={require(`../assets/contact-github.png`)} alt='github icon'/> }
            </a>
        </div> :
        <div>
            <a href='https://www.linkedin.com/in/anigandini/' target='__blank' onMouseOver={() => setMouseOverLinkedin(true)} onMouseOut={() => setMouseOverLinkedin(false)}>
                {mouseOverLinkedin ? <img src={require(`../assets/linkedin-colored.png`)} alt='linkedin icon'/> : <img src={require(`../assets/linkedin.png`)} alt='linkedin icon'/> }
            </a>
            <a href='https://github.com/anigandini' target='__blank' onMouseOver={() => setMouseOverGithub(true)} onMouseOut={() => setMouseOverGithub(false)}>
                {mouseOverGithub ? <img src={require(`../assets/contact-github-colored.png`)} alt='github icon'/> : <img src={require(`../assets/contact-github.png`)} alt='github icon'/> }
            </a>
        </div>
        

    return <div className={ `${styles.container} ${offset < 50 ? '' : styles.scrolled}`}>
            <h1>Ani Gandini</h1>
            {socialLinks}
    </div>
}

export default Header