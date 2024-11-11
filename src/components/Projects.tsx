import React from 'react'
import Card from './Card';


const data = [
    
    {
        id: 0,
        title: "Resume Builder App",
        desc: "Typescript based interactive resume built with Html and Css",
        img: "/project01.png",
        tags: ["HTML", "Node","CSS","TypeScript"]
    },
    {
        id: 2,
        title: "Zakat Calculator",
        desc: "Calculate Zakat accurate and fast",
        img: "/project02.png",
        tags: ["HTML", "CSS","TypeScript","JavaScript"]
    },
    {
        id: 3,
        title: "Todo-list",
        desc: "Create a list of task",
        img: "/project03.png",
        tags: ["HTML", "CSS","TypeScript","Nextjs"]
    },
]

const Projects = () => {
  return (
    
    <div id='projects' className='projects-container'>
    <h1>My Projects</h1> 
      
      <div className='projects-grid  projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center' >
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
       </div>
    </div>
  )
}

export default Projects