import styles from '../styles/Skills.module.css'
import image1 from '../assets/skill1.png'
import image2 from '../assets/skill2.png'

const Skills = () => {
    return <div className={styles.container}>
        <h2>What I love to work with</h2>
        <img src={image1} className={styles.image1} alt='draw of vue, react and typescript logo'/>
        <p>I am the kind of programmer who's happy to prove every new technology that shows up. Actually I enjoy to work with Reactjs and Vuejs frameworks (I love to use typeScript) and Python or nodeJs for the backend. I also have experience working with different CMS platforms such as WordPress and PrestaShop.</p>
        <img src={image2} className={styles.image2} alt='draw of css logo'/>
    </div>
}

export default Skills