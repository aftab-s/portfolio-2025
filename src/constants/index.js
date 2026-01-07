// Asset imports
import {
  certIcon1,
  certIcon2,
  certIcon3,
  certIcon4,
  certTerraform,
  certGithub,
  certGremlin,
  certCka,
  certCard1,
  certCard2,
  certCard3,
  aws,
  iconDiscord,
  iconLinkedin,
  terraform,
  docker,
  iconInstagram,
  kubernetes,
  blender,
  grafana,
  prometheus,
  projectKubezentry,
  projectHomelab,
  projectAwsGovernance,
  projectObservability,
  git,
  iconGithub,
  iconTwitter,
} from "../assets";

// Work experience icons
import sfoTech from "../assets/workExperience/sfo-technologies.png";
import freelance from "../assets/workExperience/freelance.png";
import bhooshan from "../assets/workExperience/bhooshan.png";
import abilytics from "../assets/workExperience/abilytics.png";

// Navigation items for header
export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about-me",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Experience",
    url: "#work-experience",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Resume",
    url: "https://drive.google.com/file/d/1pB-n78-NIRiaPeDrXm8kT5rbiiXoObCO/view?usp=sharing",
  },
];

// Featured projects
export const projects = [
  {
    id: "0",
    title: "KubeZentry",
    subtitle: "K8s Policy Management System",
    text: "Developed a platform for streamlined Kubernetes policy management using two powerful policy engines: Kyverno and JsPolicy.",
    category: "K8s SECURITY",
    status: "done",
    imageUrl: projectKubezentry,
    githubUrl: "https://github.com/aftab-s",
    tech: ["Kubernetes", "Kyverno", "JsPolicy"],
  },
  {
    id: "1",
    title: "Observability Stack",
    subtitle: "Setup & Migration",
    text: "Established comprehensive observability for startups and leading team efforts to migrate observability setups for several companies.",
    category: "OBSERVABILITY",
    status: "done",
    imageUrl: projectObservability,
    githubUrl: "https://github.com/aftab-s",
    tech: ["Grafana", "Prometheus", "Loki"],
  },
  {
    id: "2",
    title: "AWS Governance",
    subtitle: "Account Architecture",
    text: "Built a robust system in AWS to streamline governance, enhance security, and optimize cost management.",
    category: "CLOUD",
    status: "done",
    imageUrl: projectAwsGovernance,
    githubUrl: "https://github.com/aftab-s",
    tech: ["AWS", "Terraform", "IAM"],
  },
  {
    id: "3",
    title: "Homelab Setup",
    subtitle: "Automation & Monitoring",
    text: "Explored Homelab setups with lightweight Kubernetes deployments and implemented robust monitoring solutions.",
    category: "CONTAINERIZATION",
    status: "done",
    imageUrl: projectHomelab,
    githubUrl: "https://github.com/aftab-s",
    tech: ["Docker", "K3s", "Portainer"],
  },
];

// Skills section - core competencies
export const coreCompetencies = [
  { id: "0", title: "Infrastructure as Code" },
  { id: "1", title: "Monitoring and Observability" },
  { id: "2", title: "Cloud Architecture" },
  { id: "3", title: "CI/CD Pipelines" },
  { id: "4", title: "Design" },
];

// Skills section - tool icons
export const techTools = [
  {
    id: "0",
    title: "AWS",
    icon: aws,
    width: 36,
    height: 28,
  },
  {
    id: "1",
    title: "Terraform",
    icon: terraform,
    width: 26,
    height: 36,
  },
  {
    id: "2",
    title: "Docker",
    icon: docker,
    width: 26,
    height: 34,
  },
  {
    id: "3",
    title: "Kubernetes",
    icon: kubernetes,
    width: 34,
    height: 36,
  },
  {
    id: "4",
    title: "Git",
    icon: git,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "Prometheus",
    icon: prometheus,
    width: 38,
    height: 32,
  },
  {
    id: "6",
    title: "Grafana",
    icon: grafana,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Blender",
    icon: blender,
    width: 34,
    height: 34,
  },
];

// Certifications
export const certifications = [
  {
    id: "0",
    title: "Certified Kubernetes Administrator (CKA)",
    text: "The Linux Foundation",
    backgroundUrl: certCard1,
    iconUrl: certIcon4,
    imageUrl: certCka,
    url: "https://www.credly.com/badges/4224a580-2651-4669-b1fe-5e0677ee5051/public_url",
  },
  {
    id: "1",
    title: "HashiCorp Certified: Terraform Associate (003)",
    text: "HashiCorp",
    backgroundUrl: certCard1,
    iconUrl: certIcon1,
    imageUrl: certTerraform,
    url: "https://www.credly.com/badges/76468702-3a98-4a54-a9a1-d27ebf1d5dc4/public_url",
  },
  {
    id: "2",
    title: "GitHub Foundations",
    text: "GitHub",
    backgroundUrl: certCard2,
    iconUrl: certIcon2,
    imageUrl: certGithub,
    url: "https://www.credly.com/badges/749ed6b8-ef36-442c-8792-46f41fd01c3a/public_url",
    light: true,
  },
  {
    id: "3",
    title: "Gremlin Certified: Chaos Engineering Practitioner",
    text: "Gremlin",
    backgroundUrl: certCard3,
    iconUrl: certIcon3,
    imageUrl: certGremlin,
    url: "https://www.credential.net/b0603ce1-1771-4455-b5f2-00d57aea7ee5#acc.shi8cyuq",
  },
];

// Work experience timeline
export const workExperiences = [
  {
    id: "0",
    name: "Abilytics Inc.",
    pos: "Software Engineer (Cloud & DevOps)",
    date: "Jun 2023 - Present",
    title: "Designed and managed scalable cloud infrastructure using AWS, Terraform, and CloudFormation. Worked with Docker and Kubernetes for container orchestration and focused on Observability with Prometheus and Grafana for monitoring and optimization.",
    icon: abilytics,
  },
  {
    id: "1",
    name: "Bhooshan's Junior",
    pos: "Junior Software Engineer",
    date: "Feb 2023 - Jul 2023",
    title: "Developed web applications with HTML, CSS, and related technologies, collaborated with cross-functional teams, and created interactive UIs for a comic reader app and company website.",
    icon: bhooshan,
  },
  {
    id: "2",
    name: "SFO Technologies",
    pos: "Intern - R&D",
    date: "Jun 2022 - Jul 2022",
    title: "Assisted in R&D projects, explored optical technologies, and participated in PCB manufacturing with advanced processes.",
    icon: sfoTech,
  },
  {
    id: "3",
    name: "Freelance",
    pos: "Junior 3D Artist",
    date: "Freelance",
    title: "Made over 100 models and textures for various clients in and out of technical domains.",
    icon: freelance,
  },
];

// Social links
export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: iconLinkedin,
    url: "https://www.linkedin.com/in/aftab-s/",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: iconGithub,
    url: "https://github.com/aftab-s",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: iconInstagram,
    url: "https://www.instagram.com/devon_clive__/",
  },
  {
    id: "3",
    title: "X",
    iconUrl: iconTwitter,
    url: "https://twitter.com/aftab_mehrab",
  },
  {
    id: "4",
    title: "Hashnode",
    iconUrl: iconDiscord,
    url: "https://hashnode.com/@aftabs",
  },
];
