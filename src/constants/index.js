import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A goal oriented data scientist who loves
problem solving and capable of taking up
leadership roles. A quick learner and a
critical thinker with the ability to multi
task, a committed and diligent individual
with an eagerness to accept challenges
while learning and gaining experiences from
them. Keen interest in Software
Engineering, Understanding and designing
systems, architectures, working with LLMs,
Prompt Engineering, Data Science, Machine
Learning and Artificial Intelligence`;

export const ABOUT_TEXT = `To know more about me, talk to the my Digital Assistant "Ash" who is present towards the right side of your screen. She will be happy to help you with any queries you have. You can ask her about my work experience, about my graduation and more. If you have any questions or need further information, feel free to ask! She is still in the making, so go gentle on the questions :)`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Data Scientist",
    company: "WebTiga",
    description: `Developed a robust pipeline for data preprocessing, data cleaning, PII masking to help fine tune client specific data. Architected a pipeline to deploy open source models on AWS. Developed and maintained AI web applications/services using Python and Fast API. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Langchain", "Hugging Face", "MongoDB", "Fast API", "Qdrant"],
  },
  {
    year: "2022 - 2023",
    role: "Data Scientist",
    company: "Turing Minds.ai",
    description: `Trained multiple classification models and conducted EDA and Data Modelling for data analysis and visualization on health care projects. Engaged in data cleaning, data preprocessing, outlier detection, and feature engineering over multiple datasets which were furthr used for training classical ML models.`,
    technologies: ["Scikit-learn", "ML-Ops", "Git", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Small Prototype, Big Impact: Bridging Semiconductors and GenAI!",
    image: project1,
    description:
      "COMING SOON",
    technologies: ["LangGraph", "OpenAI", "LLMs", "Qdrant", "MongoDB"],
    link: "https://www.example.com",
  },
  {
    title: "Safeguarding Privacy: The Vital Role of PII Masking in Fine-tuning LLMs on Client Data",
    image: project3,
    description:
      "A blog on different ways to mask PII data in client data before fine tuning LLMs. It covers the importance of PII masking in data privacy and the various techniques used to mask PII data.",
    technologies: ["Python", "Spacy", "Fast API", "AWS"],
    link: "https://medium.com/@kiranshivaraju2020/-privacy-the-vital-role-of-pii-masking-in-fine-tuning-llms-on-client-data-0f3b1e435b9d",
  },
  {
    title: "Understanding Data Visualization",
    image: project4,
    description:
      "This article explores the importance of data visualization in an increasingly data-driven world, highlighting its role in enhancing data literacy and decision-making. It covers key analytical techniques—univariate, bivariate, and multivariate analysis—along with various visualization tools like Python libraries, Tableau, and Excel. By effectively representing data through visual means, we can uncover patterns, trends, and relationships, making complex information more accessible to all",
    technologies: ["Python", "matplotlib", "Statistics", "Pandas", "Numpy"],
    link: "https://medium.com/@kirans.me18/understanding-data-visualization-9fc1966a9aa3",
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 8277197460",
  email: "kiranshivaraju2020@gmail.com",
};

// I have worked extensively with various types of databases, including NoSQL, SQL, and vector databases, enabling me to create optimized data storage solutions. My experience spans both open-source and closed-source AI models, where I have successfully fine-tuned models and created robust deployment pipelines.