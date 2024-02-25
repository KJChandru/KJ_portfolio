import Headline from '../shared/Headline';
import skills from '../../public/skills.js';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7' id='about' style={{ backgroundImage: 'url("path/to/your-background-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <Headline title={"ABOUT ME"} subtitle={"Discover additional details about me, my skills, and my projects, primarily centered around programming and technology."}/>
            </div>

            <div className='flex flex-col md:flex-row items-start justify-center'>
                
                <div className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>Get to know me!</h4>
                    <div className='md:w-10/12 text-lg text-[#666] mb-8'> 
                        <p className='mb-5'>Hi there! I'm a college student who loves to code, especially in C and C++. I've learned a lot through my classes and projects, really diving into how these languages work. But my interest isn't just in writing code that runs behind the scenes; I also enjoy creating full-fledged applications that users can interact with. That's why I've gotten into full-stack development, which means I can work on both the front and back ends of a website or app. I've played around with Angular and React, two popular frameworks for building user interfaces.</p>                       
                    </div>
                </div>

                <div className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>My Skills</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12 justify-center'>
                        {skills.map(skill => <p key={skill.id} className='bg-slate-300 text-light py-2 px-4 rounded'>{skill.title}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
