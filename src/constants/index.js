import {
  mobile,
  backend,
  creator,
  web,
  codeNinjas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    // image provided by Freepik
    title: "Web Developer",
    icon: web,
  },
  {
    // image provided by Nikita Golubev
    title: "Educator and Mentor",
    icon: mobile,
  },
  {
    // image provided by Freepik
    title: "Technology Enthusiast",
    icon: backend,
  },
  {
    // image provided by RaftelDesign
    title: "Software Engineer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Lead Instructor",
    company_name: "Code Ninjas Kyle",
    icon: codeNinjas,
    iconBg: "#E6DEDD",
    date: "March 2019 - March 2024",
    points: [
      "Guided 1,000+ students (ages 7-14) from beginner to advanced levels in JavaScript, Lua, and C#.",
      "Created and developed educational materials and curriculum tailored to various skill levels.",
      "Led a team of 10+ instructors in implementing effective coding practices and project execution.",
      "Conducted workshops and coding sessions to enhance students' problem-solving and programming abilities.",
    ],
  },
  {
    title: "Instructor",
    company_name: "Code Ninjas Dripping Springs",
    icon: codeNinjas,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Mentor students in JavaScript, Lua, C#, and Scratch, focusing on coding standards and best practices.",
      "Assist in project planning and guide students through the problem-solving process.",
      "Organize and lead group projects to encourage collaboration and teamwork among students.",
      "Implement innovative teaching techniques to make learning programming engaging and effective.",
    ],
  },
];

const projects = [
  {
    name: "Falkenberg's Password Manager",
    description:
      "Falkenberg's Password Manager is a secure, lightweight, and entirely local password management solution. Designed with offline security in mind, it ensures your passwords remain protected and accessible even without internet connectivity. Featuring robust XOR-based encryption, SHA256 hashing, customizable themes, and a user-friendly interface, it’s perfect for users who prioritize control, privacy, and strong data protection.",
    tags: [
      {
        name: "c++",
        color: "cyan-text-gradient",
      },
      {
        name: "encryption",
        color: "purple-text-gradient",
      },
      {
        name: "local-storage",
        color: "indigo-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfbqfdbxw/video/upload/v1735776961/password-manager_m0xpvi.mp4",
    source_code_link: "https://github.com/TheTallProgrammer/Password-Manager",
  },
  {
    name: "GPT Oracle: Discord Bot",
    description:
      "The GPT-Oracle Discord Bot comes in two versions: Lite and Ultra, catering to different user needs. The Lite version is ideal for individual use or small servers, featuring straightforward AI chatbot functionalities with local API key storage. The Ultra version, suited for larger servers and multiple users, offers advanced features like remote SQL database for API key management and a broader command set, including `!ask` for AI conversations and `!draw` for AI-generated art.",
    tags: [
      {
        name: "discord",
        color: "teal-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
      {
        name: "openai-api",
        color: "indigo-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfbqfdbxw/video/upload/v1735776971/discord-bot_fbknkv.mp4",
    source_code_link: "https://github.com/TheTallProgrammer/GPT-Oracle-Discord-Bot",
  },
  {
    name: "Stock Contender",
    description:
      "Stock Contender is designed for identifying promising stocks, powered by advanced algorithms and AI insights using OpenAI's GPT model. It analyzes a wide range of data, including trends and financial information, to suggest stocks for further exploration. While it offers a user-friendly interface and robust data analysis, it's important to note that Stock Contender provides guidance for stock identification, not investment advice, leaving the final decision-making to the user.",
    tags: [
      {
        name: "openai",
        color: "cyan-text-gradient",
      },
      {
        name: "data-analysis",
        color: "purple-text-gradient",
      },
      {
        name: "finance",
        color: "indigo-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfbqfdbxw/video/upload/v1735776991/stock-contender_eo49gk.mp4",
    source_code_link: "https://github.com/TheTallProgrammer/Stock-Contender-App",
  },
  {
    name: "React CLI Tool",
    description:
      "The React Project CLI Tool is an indispensable asset for any React developer, dramatically accelerating project initiation by eliminating the drudgery of manual setup and code pruning. With its streamlined, pre-configured environment and integrated Git setup, it transforms project kick-off into a swift, seamless experience, focusing solely on essential development elements. This tool, crafted with a developer's insight, not only enhances productivity but also epitomizes a new standard in React project setup, making it a vital tool in every React developer's arsenal.",
    tags: [
      {
        name: "react",
        color: "teal-text-gradient",
      },
      {
        name: "cli-tool",
        color: "purple-text-gradient",
      },
      {
        name: "automation",
        color: "indigo-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfbqfdbxw/video/upload/v1735777518/react-cli-tool_intrtk.mp4",
    source_code_link: "https://github.com/TheTallProgrammer/react-cli-tool",
  },
];

export { services, experiences, projects };
