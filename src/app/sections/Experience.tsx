import React from 'react'
import styles from '../styles/Experience.module.scss'
import Timeline from '../components/Timeline';

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    year: "Jan 2023 - Present",
    role: "Fullstack Developer | XR Developer",
    company: "Bosch Digital",
    description: [
      "Executed web tracking implementations for the Power Tools application, utilizing Tealium iQ, Google Tag Manager, and Google Analytics to manage event tracking. Mapped event specifications for marketing campaign websites, ensuring accurate data collection.",
      "Developed and maintained the Phase Out Application for 7 months, using Angular, Spring Boot, and MySQL to manage proposal processing for Power Tools production. Engineered a workflow system where proposals progressed from submission to multi-region approvals, culminating in general final approval. The application is actively used by Bosch factories worldwide.",
      "Initiated and led the Virtual Office project, conceiving and developing an XR-based solution for Bosch. The project consists of three modules: Virtual Exhibition, Meeting Room, and Job Fair. Presented the project to the Department Head and CTO, where it was recognized as a great idea and solution. This recognition led to the establishment of the Metaverse Lab, funded by the department's investment budget.",
      "Currently leading a 10-member team in the Metaverse Lab, overseeing the development of internal XR applications for Bosch. Designed and managed projects, including factory training simulations, Bosch exhibitions, virtual showrooms, and mobile-accessible meeting room guides.",
      "Contributed for 1 year to the AOI Studio project as a Frontend Developer, developing and enhancing web applications using React, Jest, React Query, TailwindCSS, Webpack, and Azure MSAL. Integrated frontend components with backend services by collaborating with backend teams and data scientists in Germany. Translated Figma designs into fully functional web applications in partnership with UI/UX designers.",
      "Led and participated in internal tech talks and workshops, sharing knowledge on emerging technologies, best practices, and tools.",
      "Developed a video summary chatbot using LLM in the department’s AI program over 3 months, securing first place. Utilized Python, Flask, and React to build the proof of concept.",
      "Delivered a Survey Application for internal departmental use within 3 months, serving over 500 associates. Applied Angular, Spring Boot, Azure, and Docker to construct and deploy the application, contributing to the department’s advanced web development initiatives."
    ],
  },
  {
    year: "Mar 2022 - Jan 2023",
    role: "Fullstack Developer",
    company: "Bosch Global Software Technologies Vietnam",
    description: [
      "Contributed to the Bosch Remote Diagnostics project for 6 months, developing customer solutions using React.",
      "Developed an HR Chatbot application for BGSW Vietnam colleagues for 6 months, leveraging React and Spring Boot to serve 3,000+ users. Integrated Azure MSAL, Web Apps, and AAD to enable SSO authentication and retrieve internal user information securely.",
      "Maintained the IT Service Help Desk platform for 3 months, ensuring smooth operations for internal users to raise tickets for facility-related issues and policy inquiries. Worked with Java, JSP, and jQuery to support system stability and bug fixes.",
      "Maintained the TPS (Travel Planning System) platform for 3 months, enabling employees to register business trips, submit travel details, and receive approvals for flight tickets and funds. Utilized Java, JSP, and jQuery to enhance system reliability."
    ],
  },
  {
    year: "Aug 2021 - Mar 2022",
    role: "Service Now Developer",
    company: "DXC Technology",
    description: [
      "Engineered and customized ServiceNow applications to enhance operational efficiency and optimize user experience.",
      "Liaised with stakeholders to assess and translate business requirements into scalable technical solutions within the ServiceNow platform.",
      "Spearheaded the development of over five tailored applications, catering to key clients across diverse industries.",
      "Designed and implemented dynamic, responsive user interfaces for ServiceNow applications using AngularJS and JavaScript, ensuring an engaging and intuitive user experience.",
    ],
  }
];

const Experience = () => {

  return (
    <section id="experience" className={`py-16 ${styles.container}`}>
      <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Professional Experience</h2>
      <div className={`${styles['content-container']}`}>
        {/* <p className={`${styles.text} mt-4`}>I have worked with various companies...</p> */}
        <Timeline experiences={experiences} />
      </div>
    </section>
  )
}

export default Experience