import image1 from '../assets/journey1.png'
import image2 from '../assets/journey2.png'
import image3 from '../assets/journey3.png'
import styles from '../styles/Journey.module.css'

const Journey = () => {
    return <div className={styles.container}>
        <h2>My Journey</h2>
        <img src={image1} alt='born in the 90s' className={styles.firstImage}/>
        <p className={styles.firstText}>
            Proudly part of a generation that have grown up with technology. 
            I designed and coded my first web page at the age of ten while I was playing around with a HTML guide for kids.
            At that time it seemed like a game to me.</p>
        <img src={image2} alt='design knowledge' className={styles.secondImage}/>
        <p className={styles.secondText}>
            Before officially becoming a web developer I studied design at university. 
            Back then I learned how to think as a designer, which means not only doing things in an aesthetic way, 
            but essentially creating the best and most detailed solutions for a particular problem a user may have. 
            I am still using all this knowledge everyday on my work.
        </p>
        <img src={image3} alt='team player' className={styles.thirdImage}/>
        <p className={styles.thirdText}>
            If there's something funnier than coding that's coding with others! 
            I love to work in collaborative and diverse teams made by people who share the same geek passion that I have. 
            I'm also always trying to encourage people who wants to make their first steps in tech.<br/> 
            I really want to help everyone to have the same opportunities I had and learn a lot of the others of course :)</p>
    </div>
}

export default Journey