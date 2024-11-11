import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
   
  {
    id : 0,
    title : "ToDo List",
    desc : "A React & Typescript based app for managing and organizing daily routine tasks efficiently",
    img : "/ToDo List.png",
    tags : ["React","CSS","Node", "Typescript"]
},
{
  id : 1,
  title : "Currency Converter",
  desc : "A simple HTML and Typescript powered tool for converting currencies with Real-time rates.",
  img : "/Currency Converter.png",
  tags : ["HTML","CSS","Node", "Typescript"]
},
    {
      id : 2,
      title : "Resume",
      desc : "HTML, CSS & Typescrip based editorable and dynamic resume builder.",
      img : "/resume.jpg",
      tags : ["HTML", "CSS", "Node", "Typescript"]
  },
  {
    id : 3,
    title : "Weather App",
    desc : " A Next.js & Typescrip based app for fetching and displaying real-time weather data.",
    img : "/Weather App.png",
    tags : ["Next.Js","CSS","Node", "Typescript"]
  },
    {
      id : 4,
      title : "Calculator",
      desc : " A simple calculator made from Typescript and Node js.",
      img : "/calculator.jpg",
      tags : ["Node", "Typescript"]
  },
    
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
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
