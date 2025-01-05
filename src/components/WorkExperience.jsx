import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

// Import logo files
import companyALogo from '../assets/workExperience/abilytics.png';
import companyBLogo from '../assets/workExperience/bhooshan.png';
import companyCLogo from '../assets/workExperience/freelance.png';
import companyDLogo from '../assets/workExperience/sfo-technologies.png';

const workExperiences = [
  {
    id: 1,
    title: "DevOps Engineer",
    company: "Company A",
    duration: "Jan 2020 - Present",
    description: "Responsible for CI/CD pipelines, infrastructure as code, and cloud architecture.",
    logo: companyALogo,
  },
  {
    id: 2,
    title: "Site Reliability Engineer",
    company: "Company B",
    duration: "Jun 2018 - Dec 2019",
    description: "Implemented monitoring and logging solutions, automated workflows, and improved system reliability.",
    logo: companyBLogo,
  },
  {
    id: 3,
    title: "Systems Engineer",
    company: "Company C",
    duration: "Mar 2016 - May 2018",
    description: "Managed server infrastructure, automated deployment processes, and ensured system security.",
    logo: companyCLogo,
  },
  {
    id: 4,
    title: "Junior DevOps Engineer",
    company: "Company D",
    duration: "Jan 2014 - Feb 2016",
    description: "Assisted in setting up CI/CD pipelines, managed cloud resources, and supported development teams.",
    logo: companyDLogo,
  },
];

const WorkExperience = () => {
  return (
    <Section id="work-experience" className="py-16">
      <div className="container mx-auto">
        <Heading tag="Work Experience" title="My Professional Journey" />
        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <ul className="space-y-8">
            {workExperiences.map((experience) => (
              <li key={experience.id} className="flex items-center w-full">
                <div className="relative w-1/2 pr-8 text-right">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f3ec78, #af4261)', padding: '2px' }}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <img src={experience.logo} alt={`${experience.company} logo`} className="w-8 h-8 rounded-full" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold">{experience.title}</h4>
                  <p className="text-sm text-gray-500">{experience.company}</p>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" style={{ backgroundImage: `url(${experience.backgroundUrl || 'default-background-url'})`, borderRadius: '1.25rem' }}>
                    <div className="relative z-1 p-6 bg-n-8 rounded-[1.25rem] border border-transparent" style={{ border: '1px solid', borderColor: 'linear-gradient(45deg, #f3ec78, #af4261) 1', borderRadius: '1.25rem' }}>
                      <p className="text-sm text-gray-400 mt-3">{experience.description}</p>
                    </div>
                    <GradientLight />
                    <ClipPath />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default WorkExperience;