import Headline from "../shared/Headline";
import projects from "../../public/projects.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto md:py-8 px-7' id="projects">
            <Headline title={'PROJECTS'} subtitle={'Here you will find some of the personal projects that I created, and I provided GitHub link for each projects'}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.2 }}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h4 className="text-lg font-bold mb-2">{project.name}</h4>
                            <p className="text-gray-700 mb-2">{project.description}</p>
                            <a href={project.link} style={{ 
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#4a90e2',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '0.25rem',
                                transition: 'background-color 0.3s ease'
                            }}>
                                Link to Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
