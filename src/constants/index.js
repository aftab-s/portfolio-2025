import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  roadmap5,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import card1 from "../assets/benefits/card-1.png";
import card2 from "../assets/benefits/card-2.png";
import card3 from "../assets/benefits/card-3.png";

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
    url: "https://drive.google.com/file/d/1n-2w7eN4t50LWtJmu8ZzJEAtE4MUVpeA/view?usp=sharing",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Grafana and Friends Kochi",
  "CNCF & CNCG Kochi",
  "AWS UG Kochi",
  "DevOps Malayalam",
  "WordPress Kerala",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "KubeZentry: K8s Policy Management System",
    text: "Developed a platform for streamlined Kubernetes policy management using two powerful policy engines: Kyverno and JsPolicy.",
    date: "K8s SECURITY",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Observability Setup & Migration",
    text: "Established comprehensive observability for startups and leading team efforts to migrate observability setups for several companies.",
    date: "OBSERVABILITY",
    status: "done",
    imageUrl: roadmap5,
  },
  {
    id: "2",
    title: "AWS Account Governance Architecture",
    text: "Aims to build a robust system in AWS to streamline governance, enhance security, and optimize cost management.",
    date: "CLOUD",
    status: "done",
    imageUrl: roadmap4,
  },
  {
    id: "3",
    title: "Homelab Setups & Automation",
    text: "Explored Homelab setups with lightweight Kubernetes deployments and implemented robust monitoring solutions using Grafana, Prometheus, Uptime Kuma, and New Relic. Also set up Portainer for streamlined container management, creating a powerful and efficient home lab environment.",
    date: "CONTAINERIZATION",
    status: "done",
    imageUrl: roadmap2,
  },
];

export const collabText =
"Driven by curiosity and a desire to learn, constantly seeking to improve and innovate."
  export const collabContent = [
  
    { id: "0", title: "Infrastructure as Code" },
    { id: "1", title: "Monitoring and Logging" },
    { id: "2", title: "Cloud Architecture" },
    { id: "3", title: "CI/CD Pipelines" },
    { id: "3", title: "Design" },
  ];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "HashiCorp Certified: Terraform Associate (003)",
    text: "HashiCorp",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "https://www.credly.com/badges/76468702-3a98-4a54-a9a1-d27ebf1d5dc4/public_url",
  },
  {
    id: "1",
    title: "GitHub Foundations",
    text: "GitHub",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    url: "https://www.credly.com/badges/749ed6b8-ef36-442c-8792-46f41fd01c3a/public_url",
    light: true,
  },
  {
    id: "2",
    title: "Gremlin Certified: Chaos Engineering Practitioner",
    text: "Gremlin",
    backgroundUrl: card3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
    url: "https://www.credential.net/b0603ce1-1771-4455-b5f2-00d57aea7ee5#acc.shi8cyuq",
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: facebook,
    url: "https://www.linkedin.com/in/aftab-s/",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: telegram,
    url: "https://github.com/aftab-s",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/devon_clive__/",
  },
  {
    id: "3",
    title: "X",
    iconUrl: twitter,
    url: "https://twitter.com/aftab_mehrab",
  },
  {
  id: "4",
  title: "Hashnode",
  iconUrl: discordBlack,
  url: "https://hashnode.com/@aftabs",
  },
];
