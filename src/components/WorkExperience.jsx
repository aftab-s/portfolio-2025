import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import Section from './Section';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import Heading from './Heading';
import { BackgroundCircles } from './design/Hero';

// Import logo files
import companyALogo from '../assets/workExperience/abilytics.png';
import companyBLogo from '../assets/workExperience/bhooshan.png';
import companyCLogo from '../assets/workExperience/freelance.png';
import companyDLogo from '../assets/workExperience/sfo-technologies.png';

const workExperiences = [
  {
    id: 1,
    title: "Software Engineer (Cloud & DevOps)",
    company: "Abilytics Inc.",
    duration: "Jun 2023 - Present",
    description: "Designed and managed scalable cloud infrastructure using AWS, Terraform, and CloudFormation. Worked with Docker and Kubernetes for container orchestration and focused on Observability with Prometheus and Grafana for monitoring and optimization.",
    logo: companyALogo,
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "Bhooshan's Junior",
    duration: "Feb 2023 - Jul 2023",
    description: "Developed web applications with HTML, CSS, and related technologies, collaborated with cross-functional teams, and created interactive UIs for a comic reader app and company website.",
    logo: companyBLogo,
  },
  {
    id: 3,
    title: "Intern - R&D",
    company: "SFO Technologies",
    duration: "Jun 2022 - Jul 2022",
    description: "Assisted in R&D projects, explored optical technologies, and participated in PCB manufacturing with advanced processes.",
    logo: companyCLogo,
  },
  {
    id: 4,
    title: "Junior 3D Artist",
    company: "Freelance",
    duration: "Aug 2021 - Jan 2022",
    description: "Made over 100 models and textures for various clients in and out of technical domains.",
    logo: companyDLogo,
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        zIndex: 2, // Ensure the content is above the background
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.duration}
      iconStyle={{ background: '#fff', zIndex: 2 }} // Set the icon background to white
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.logo}
            alt={experience.company}
            className='w-[60%] h-[60%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] mb-2'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>
      <p className='mt-5 text-gray-400 text-[14px] pl-1 tracking-wider'>
        {experience.description}
      </p>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <Section crosses id="work-experience" className="py-16">
      <div className="container mx-auto px-4 relative">
        <motion.div>
          <Heading tag="Work Experience" title="My Professional Journey" />
        </motion.div>
        <div className="mt-20 flex flex-col relative z-10">
          <VerticalTimeline lineColor="linear-gradient(to bottom,rgb(255, 250, 103), rgb(229, 31, 255),#28d4ff)">
            {workExperiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-[#28d4ff] rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <GradientLight />
          <ClipPath />
        </div>
      </div>
    </Section>
  );
};

export default WorkExperience;