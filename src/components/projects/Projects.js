import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projetcs.css' ;
import im from '../../assets/app-design.png';
import ged1 from '../../assets/ged1.png';
import ged2 from '../../assets/ged2.png';
import ged3 from '../../assets/ged3.png';
import ged4 from '../../assets/ged4.png';




const Projects = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          
         
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
        }
      };
    const  projects=[
        {   name : 'GED' , img : [ged1,ged2,ged3,ged4] , desc : ' Document managment and archiving system' ,techs : ['Symfony 6' ,'Bootstrap', 'htmx']}, 
        {   name : 'Doc Share' , img : [im] , desc : 'a mobile application that allows students and teachers to share and exchange courses, exams,exercices' ,techs : ['Flutter' ,'Firebase']}, 
        {   name : 'GED' , img : [im] , desc : 'a platform to collect founds and to connect between entrepreneurs investors' ,techs : ['React JS' ,'Node JS', 'Mongo DB']}, 
        {   name : 'GED' , img : [im] , desc : 'a platform to collect founds and to connect between entrepreneurs investors' ,techs : ['React JS' ,'Node JS', 'Mongo DB']}, 
    ]
    const projetsCards = projects.map((project,index)=>{
        return (
            <div className='project' key={index}>
                <img className='projectImg' src={project.img[0]} alt={project.name}/>
                <span className='breaker'></span>
                <span className='projectName'>{project.name}</span>
                <p className='projectDesc'>{project.desc}</p>
                <div className='projectTechs'>{project.techs.map((tech,i)=>{
                    return (
                        <span className='tech' key={i}>{tech}</span>
                    )
                })}</div>
            </div>
        )
    })


  return (
    <section id='projects'>
        <div className='intro'>
              <h2 className='projectsTitle'>My Projects</h2>
              <p className='projectsDesc'>I take a pride in paying attention to the smallest details and make sure that my work satisfies the client. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</p>
        </div>
        
        <Carousel   swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="projects"
                    dotListClass="custom-dot-list-style"
 >   
             {projetsCards}
         </Carousel>
         
    </section>
  )
}

export default Projects