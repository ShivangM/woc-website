import projectsData from '@/lib/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

type Props = {};

const Projects = (props: Props) => {
  const ProjectCard = ({ project }) => {
    const {
      Ideas,
      mentors,
      org_img,
      org_name,
      org_tag,
      repo_link,
      tags,
      title,
    } = project;

    return (
      <div className="rounded-lg bg-white/30 px-4 py-8 transition-all ease-in-out duration-500 cursor-pointer hover:-translate-y-2 text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl font-sans">{title}</h1>
        <button className="flex space-x-2 items-center justify-center font-semibold text-white mt-10">
          <span>Check Ideas</span> <ChevronUpIcon className="h-4 w-4" />
        </button>
        <div className="h-64 w-full relative">
          <Image
            src={org_img}
            fill
            alt={org_name}
            className="py-6 object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <main className="relative min-h-screen">
      <Image
        src="/assets/background/bgClean.png"
        className="-z-10 object-cover"
        alt="Project BG"
        fill
      />

      <motion.h1
        whileInView={{ y: [50, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
        viewport={{ once: true }}
        className="heading text-center pt-40 text-white"
      >
        Available Projects
      </motion.h1>

      <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between backdrop-blur-sm bg-white/20 px-4 py-2 w-fit rounded-lg my-8 mx-auto space-x-10 ">
        <select className="rounded-lg px-4 font-semibold py-2">
          <option value="">All Categories</option>
        </select>
        <select className="rounded-lg px-4 font-semibold py-2">
          <option value="">All Organizations</option>
        </select>
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full px-10 gap-4">
        {projectsData.map((project, idx) => {
          return <ProjectCard project={project} key={idx} />;
        })}
      </section>
    </main>
  );
};

export default Projects;
