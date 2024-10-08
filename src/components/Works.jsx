import React from 'react'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags,
image, source_code_link, live_link}) => {
  return(
    <motion.div 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
      options={{
        max : 45,
        scale: 1,
        speed : 450
      }}
      className='bg-tertiary p-5 rounded-2xl
      sm:w-[360px] w-full'
      //continue from here 23 Jan MIDNIGHT
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt="project_image"
          className='w-full h-full object-cover rounded-2xl'/>

          <div className='absolute inset-0 flex justify-end m-3 
          card-img_hover'>
            <div 
            onClick={()=> window.open(source_code_link, "_blank")}
            className='w-10 h-10 black-gradient rounded-full flex
            justify-center items-center cursor pointer'>
              <img src={github}
              alt = "github"
              className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>

        </div>

        <div>
          <h3 className='text-white text-[24px] font-bold'>
            {name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>
            {description}</p>
        </div>

        <div className='flex mt-4 gap-2 flex-wrap'>
          {tags.map((tag, index)=>(
            <p key={tag.name} 
            className={`text-[14px] ${tag.color}`}>
              {tag.name}</p>
          ))}
        </div>
        
        <div className='mt-4'>
          <a className='text-[14px] px-4 py-2 rounded-full bg-blue-950' href={live_link}>See Live</a>
        </div>
        
      </Tilt>
    </motion.div>
  )
} 

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and
          through real-world examples of
          my work. Each project is briefly described
          with links to code repositories. It reflects my ability to 
          learn frequently, solve
          complex problems, work with different technologies
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=>(
          <ProjectCard key={`project-${index}`}
          index={index} {...project}/>
          //Spread operation is crucially important here ...project
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');