// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { FaAws } from "react-icons/fa";
// import { SiLangchain } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
// import { SiHuggingface } from "react-icons/si";
// import { SiFastapi } from "react-icons/si";
// import { SiSpacy } from "react-icons/si";
// import { SiOpenai } from "react-icons/si";

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <h1 className="my-20 text-center text-4xl">Technologies</h1>
//       <div className="flex flex-wrap items-center justify-center gap-4">
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <FaPython className="text-7xl text-yellow-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiLangchain className="text-7xl text-white-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiHuggingface className="text-7xl text-white-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <FaAws className="text-7xl text-white-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiMongodb className="text-7xl text-green-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <BiLogoPostgresql className="text-7xl text-sky-700" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <DiRedis className="text-7xl text-red-700" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiFastapi className="text-7xl text-grey-800" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiSpacy className="text-7xl text-grey-800" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiOpenai className="text-7xl text-white-800" />
//         </div>
        
        
        
//       </div>
//     </div>
//   );
// };

// export default Technologies;

import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiSpacy } from "react-icons/si";
import { SiOpenai } from "react-icons/si";

const Technologies = () => {
  const techItems = [
    { icon: <FaPython className="text-7xl text-yellow-500" />, name: "Python" },
    { icon: <SiLangchain className="text-7xl text-white" />, name: "Langchain" },
    { icon: <SiHuggingface className="text-7xl text-white" />, name: "Hugging Face" },
    { icon: <FaAws className="text-7xl text-white" />, name: "AWS" },
    { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB" },
    { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, name: "PostgreSQL" },
    { icon: <DiRedis className="text-7xl text-red-700" />, name: "Redis" },
    { icon: <SiFastapi className="text-7xl text-gray-800" />, name: "FastAPI" },
    { icon: <SiSpacy className="text-7xl text-gray-800" />, name: "spaCy" },
    { icon: <SiOpenai className="text-7xl text-white" />, name: "OpenAI" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Things I've worked on</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techItems.map((tech, index) => (
          <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            {tech.icon}
            <span className="mt-2 block text-sm text-neutral-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;