/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/Introduction.module.scss'

const Introduction = () => {
  return (
    <section id="introduction" className={`py-16 text-center ${styles.container}`}>
      <h1 className={`text-4xl font-bold text-primary ${styles.title}`}>Hi, I'm Hoa (Henry) Lam!</h1>
      <p className='mt-4 text-sm'>
        <i>Fullstack Developer | AI Enthusiast | XR Developer</i>
      </p>
      <p className="mt-4 text-lg">
        A developer who loves pushing boundaries, solving problems, and crafting high-quality software. I'm a versatile Full Stack Engineer with expertise in React, Angular, and Spring Boot. Passionate about AI, Metaverse, and cutting-edge technologies, I love building scalable applications and exploring innovative solutions.
      </p>
      <p className="mt-4 text-lg">
        Beyond coding, I enjoy learning new tech, solving complex problems, and creating AI-driven solutions to enhance user experiences. Let’s connect and build something awesome! 🚀
      </p>
    </section>
  )
}

export default Introduction