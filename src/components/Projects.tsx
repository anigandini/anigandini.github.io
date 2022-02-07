import list from './projectslist.json'
import ProjectCard from './ProjectCard/ProjectCard'
import styles from '../styles/Projects.module.css'
import { Project } from '../interfaces/project.interface'


const Projects = () => {
    const ProjectList = list.projects.map((project: Project) => {return <ProjectCard key={project.name} {...project}/>})
    return <div className={styles.container}>
        <h2>Take a look of my work</h2>
        <div className={styles.flex}>
            {ProjectList}
        </div>
    </div>
}

export default Projects