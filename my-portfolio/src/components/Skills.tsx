import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2  gap-20 items-center'>
        <div data-aos="zoom-out-up">
          <h2 className='text-4xl md:text-5xl'>Skills I've.</h2>
          <p className='text-black-500 pt-2'>
          I am a web and app developer specializing in HTML, CSS, and JavaScript, with extensive experience in frameworks like React and Next.js to build dynamic, high-performance applications. I have a strong command of Tailwind CSS, enabling me to create unique and visually appealing designs with ease. Passionate about continuous learning, I stay up-to-date with the latest technologies and trends to continually enhance my skills and contribute effectively to every project I work on.
          </p>
       </div>
          <div className='grid grid-cols-2 text-blue text-3xl sm:text-4xl'>
          <div className='space-y-2 p-4 bg-gradient-to-r from-green-500'>
             <h2 data-aos="zoom-out-up">Typescript</h2>
             <h2 data-aos="zoom-out-up">React.Js</h2>
             <h2 data-aos="zoom-out-up">Next.Js</h2>
            </div>
           <div className='space-y-2 p-4 bg-gradient-to-r from-green-500'>
             <h2 data-aos="zoom-out-up">Tailwind</h2>
             <h2 data-aos="zoom-out-up">CSS</h2>
             <h2 data-aos="zoom-out-up">Node.Js</h2>
             </div>
            </div>      
           </div>
        </div>
      
    
  )
}

export default Skills
