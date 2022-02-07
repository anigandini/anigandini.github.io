import image from '../assets/mission.png'
import styles from '../styles/Mission.module.css'

const Mission = () => {
    return <div className={styles.container}>
            <h2>My Mission</h2>
            <div className={styles.flex}>
                <p>Keep on improving my software development skills while I create intuitive, fast and charming interfaces that people can enjoy and share.</p>
                <img src={image} alt=''/>
            </div>
            </div>
}
export default Mission