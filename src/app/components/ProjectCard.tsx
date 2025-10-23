// // src/components/ProjectCard.tsx

// import Link from 'next/link';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   link: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
//   return (
//     <Link href={link} className="group">
//       <div className="bg-primary-red/10 p-6 rounded-lg border border-primary-red/20 transition-transform duration-300 transform group-hover:scale-105">
//         <h3 className="text-xl font-bold mb-2 text-primary-red transition-colors duration-300 group-hover:text-accent-red">
//           {title}
//         </h3>
//         <p className="text-sm">
//           {description}
//         </p>
//         <div className="mt-4 inline-block text-sm text-primary-red border-b border-primary-red/50 transition-colors duration-300 group-hover:text-accent-red group-hover:border-accent-red">
//           View Project &rarr;
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProjectCard;





// src/components/ProjectCard.tsx

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <Link href={link} className="group">
      <div className="bg-[#0B0B45] p-6 rounded-2xl border  transition-transform duration-300 transform group-hover:scale-105 shadow-md hover:shadow-[#1A1A70]/40">
        <h3 className="text-xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-[#9AA6FF]">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="inline-block text-sm text-[#9AA6FF] border-b border-[#9AA6FF]/50 transition-colors duration-300 group-hover:text-white group-hover:border-white">
          View Project &rarr;
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
