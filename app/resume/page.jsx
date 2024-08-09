"use client";

import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNode,
} from "react-icons/fa";

import{
  SiTailwindcss, 
  SiNextdotjs,
} from "react-icons/si";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TolltipContent, TooltipProvider, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import {motion} from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const about = {
  title: 'About me',
  description: "Passionate software developer committed to creating innovative solutions and delivering high-quality results that exceed client expectations.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Hibban Qureshi"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 330-3193377"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year"
    },
    {
      fieldName: "Email",
      fieldValue: "qureshihibban@gmail.com"
    },
    
  ]
};

const experience = {
  icon : "/assets/resume/badge.svg",
  title : 'My Experience',
  description : "Proven track record in delivering successful web projects, from concept to deployment, across various industries.",
  items:[
    {
    company: "Algorim",
    position: "MERN Stack Developer"
    },
    {
      company: "CoDesign",
      position: "Python Developer"
      }

  ]
};

const education = {
  icon : "/assets/resume/cap.svg",
  title : "My Education",
  description : "Bachelor's degree in Computer Science with a focus on software development and design.",
  items:[
    {
    institution: "Shahwilayat Public School",
    degree: "AKUEB Matriculation"
    },
    {
      institution: "Iisar Foundation",
      degree: "AKUEB HSSC II"
      },
      {
        institution: "Iqra University",
        degree: "Bachelors in Computer Science"
        },
    ]
};

const skills = {
  title : "My Skills",
  description : "Proficient in web development, UI/UX design, logo design, and SEO, with a strong command of modern frameworks and tools.",
  skillList:[
    {
      icon : <FaHtml5/>,
      name : "HTML 5",
    },
    {
      icon : <FaCss3/>,
      name : "CSS 3",
    },
    {
      icon : <FaJs/>,
      name : "JS",
    },
    {
      icon : <FaReact/>,
      name : "REACT",
    },
    {
      icon : <FaPython/>,
      name : "PYTHON",
    },
    {
      icon : <FaNode/>,
      name : "NODE JS",
    },
    {
      icon : <SiTailwindcss/>,
      name : "TAILWIND CSS",
    },
    {
      icon : <SiNextdotjs/>,
      name : "NEXT DOT JS",
    },
  ]
};





const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay: 2.4, duration:0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row-gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>  
              <TabsTrigger value="skills">Skills</TabsTrigger>  
              <TabsTrigger value="about">About me</TabsTrigger>                
              </TabsList>
            
            {/* content */}
            <div className="min-h-[70vh] w-full">

              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold py-10">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((items, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{items.company}</p>
                        </div>
                      </li>

                    })}
                  </ul>
                </ScrollArea>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold py-10">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((items, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{items.institution}</p>
                        </div>
                      </li>

                    })}
                  </ul>
                </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold py-10">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) =>{
                      return( 
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>                              
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name} </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* about me */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold py-10">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return(
                        <li key={index} className="flex items-center justify-centerxl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

    </motion.div>
  )
}

export default Resume