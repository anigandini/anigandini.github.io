import eyeIcon from '../../assets/eye.png'
import gitHubIcon from '../../assets/github.png'
import styles from '../../styles/ProjectCard.module.css'
import { useState, useEffect, useRef} from 'react'
import { isMobile } from 'react-device-detect'
import { Project } from '../../interfaces/project.interface'

const ProjectCard = (project: Project) => {
    const card = useRef<HTMLDivElement>(null)
    const [mouseOver, setMouseOver] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting === true){
                setIsIntersecting(true)
            }
            else {
                setIsIntersecting(false)
    
            }
        }, { threshold: [1] })    
        if (card.current) {
            observer.observe(card.current)
        }
    }, [])

    if (isMobile) {
        return <div className={styles.container} ref={card}>
        {isIntersecting ? <img src={require(`./icons/${project.icon}-colored.png`)} alt={project.name}/> : <img src={require(`./icons/${project.icon}.png`)} alt={project.name}/> }
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target='__blank'  className={isIntersecting ? styles.eye : ''}><img src={eyeIcon} alt='eye icon'/> See a demo</a>
        <a href={project.githubLink} target='__blank' className={isIntersecting ? styles.github : ''}><img src={gitHubIcon} alt='github icon'/> See the code</a>
    </div>
    } else {
        return <div className={styles.container} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
        {mouseOver ? <img src={require(`./icons/${project.icon}-colored.png`)} alt={project.name}/> : <img src={require(`./icons/${project.icon}.png`)} alt={project.name}/> }
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target='__blank' className={mouseOver ? styles.eye : ''}><img src={eyeIcon} alt='eye icon'/> See a demo</a>
        <a href={project.githubLink} target='__blank'className={mouseOver ? styles.github : ''}><img src={gitHubIcon} alt='github icon'/> See the code</a>
    </div>
    }
    
}

export default ProjectCard