import React from 'react';
import Section from './Section';
import Heading from './Heading';

const AboutMe = () => {
  return (
    <Section id="about-me" className="py-16">
      <div className="container mx-auto lg:text-center">
        <Heading tag="About Me" title="Hello There!" />
        <p className="mt-4 text-lg text-gray-400">
        Hi there! I’m Aftab, a DevOps Engineer with a knack for cloud-native tech and a surprising background in Electronics and Communication. 
        My toolkit includes AWS, Docker, Kubernetes, Prometheus, Grafana, Git, and Terraform—I love testing, tinkering, and building things that are both fun and functional. 
        I share my learnings on my blogs to make tech simpler for everyone.
        </p>
        <p className="mt-4 text-lg text-gray-400">
            Beyond the screen, you’ll find me at tech events—organizing meetups, chatting with like-minded folks, or learning something new. 
            As an Organizer for Grafana and Friends Kochi and a member of AWS UG Kochi, CNCF Kochi, and more, I thrive on connecting with the community and fostering growth.
        </p>
        <p className="mt-4 text-lg text-gray-400">
        As a public speaker, I also enjoy speaking at events, bringing humor and real-world insights to cloud-native and observability topics. 
        If you’re into tech, community building, or just want to chat over a cup of coffee? Let’s connect!
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;