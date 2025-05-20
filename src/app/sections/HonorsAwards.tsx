import React from 'react'
import styles from '../styles/HonorsAwards.module.scss'
import Image from 'next/image'

const HonorsAwards = () => {
    return (
        <section id="honors" className={`py-16 ${styles.container}`}>
            <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Honors and Awards</h2>
            <div className={`${styles.honorsContainer}`}>
                <div className="flex flex-col">
                    <div>
                        <h3 className={`${styles.honorTitle}`}>Professional Achievements</h3>
                        <ul className={`${styles.honorList}`}>
                            <li>Best Performer – Outstanding Work Performance in 2024</li>
                            <li>Innovator – Bosch Significant Metaverse Solutions Leading Inspiring Change in 2023</li>
                            <li>Best Project Team – In Recognition of Excellent Delivery in 2022</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h3 className={`${styles.honorTitle}`}>Extracurricular Honors</h3>
                        <ul className={`${styles.honorList}`}>
                            <li>Third place – UEH University Talent Competition 2018 (Singing)</li>
                            <li>Gold Medal – Ho Chi Minh Municipal Air Men’s 10m Rifle Tournament 2017</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/boston-green.jpg" // replace with your actual image path
                        alt="Award Certificates"
                        className="rounded-xl shadow-lg max-w-xs w-full object-cover"
                        width={600}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default HonorsAwards