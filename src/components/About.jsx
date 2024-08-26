import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full bg-gradient-to-r from-cyan-400 to-purple-600 p-[1px] rounded-[20px] shadow-cardSS'>

        <div options={{
          max : 45,
          scale : 1,
          speed : 450
        }}
        className='min-h-[250px] bg-tertiary rounded-[20px]
        py-5 px-12 flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt="icon"
          className="w-16 h-16 object-contain"/>
          <h3 className='font-bold text-white uppercase text-[20px] text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)}
      className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'>
        I'm a Full Stack Web developer that uses his graphic
        designing skills as a boost to create seamless and eye
        catching interfaces and smooth functioning backend, 
        I currently work with technologies like React, Node JS, Express JS
        , Mongo DB, Git & Github and Figma
        
        And have also worked with ASP.NET, C#, Entity core framework, SQL.
        </motion.p>

      <div className='flex gap-10 mt-20 flex-wrap'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index}
          {...service}/>

        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')