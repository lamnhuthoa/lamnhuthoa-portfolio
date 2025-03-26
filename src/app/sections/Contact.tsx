import React from 'react'
import styles from '../styles/Contact.module.scss'

export const Contact = () => {
  return (
    <section className={`py-16 text-center ${styles.container}`}>
      <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Get In Touch</h2>
      <p className="mt-4">Feel free to reach out to me via email</p>
      <a href="mailto:hoalamnhut@gmail.com">
        <button className={`bg-emerald-green text-white py-2 px-6 mt-4 ${styles['email-me-button']}`}>
          Email Me
        </button>
      </a>
    </section>
  )
}
