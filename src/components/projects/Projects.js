import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projetcs.css' ;
import im from '../../assets/app-design.png';
import ged1 from '../../assets/ged1.png';
import ged2 from '../../assets/ged2.png';
import ged3 from '../../assets/ged3.png';
import ged4 from '../../assets/ged4.png';

import sh1 from '../../assets/sh1.png';
import sh2 from '../../assets/sh2.png';
import sh3 from '../../assets/sh3.png';

import cr1 from '../../assets/cr1.png';


const Projects = () => {
  const [index1,setIndex1]=useState(0)
  const [index2,setIndex2]=useState(0)
  const [index3,setIndex3]=useState(0)
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
        {   name : 'Doc Share' , img : [sh1,sh2,sh3] , desc : 'a mobile application that allows students and teachers to share and exchange courses, exams,exercices' ,techs : ['Flutter' ,'Firebase']}, 
        {   name : 'Fundastic' , img : [cr1] , desc : 'a platform to collect founds and to connect between entrepreneurs investors' ,techs : ['React JS' ,'Node JS', 'Mongo DB']}, 
    ]
    const projetsCards = projects.map((project,index)=>{
      let value;

switch (index) {
  case 0:
    value = index1;
    break;
  case 2:
  value = index2;
    break;
  // Add more cases for other index values as needed
  default:
    // Default value if index doesn't match any case
    value = index3;
}
        return (
            <div className='project' key={index}>
                <img className='projectImg' src={project.img[value]} alt={project.name}/>
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


    useEffect(() => {
      let slide = setInterval(() => {
       if( projects[0].img.length>index1) 
       {
        setIndex1(index1+1);
       }else setIndex1(0)

       if( projects[1].img.length>index2) 
       {
        setIndex2(index2+1);
       }else setIndex2(0)

       if( projects[2].img.length>index3) 
       {
        setIndex3(index3+1);
       }else setIndex3(0)
      }, 2000);
  
      return () => { clearInterval(slide) };
    }, [index1,index2,index3])
  

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