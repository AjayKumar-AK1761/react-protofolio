import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiKubernetes } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { FaAws } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {motion} from 'framer-motion';

const iconVariations = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        trannsition ={{duration: 1.5}}
        className="my-20 text-center text-4xl">Techonologies</motion.h2>

        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial = {{x: 100, opacity: 0}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
            variants={iconVariations(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div 
            variants={iconVariations(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>

            <motion.div
            variants={iconVariations(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-sky-700" />
            </motion.div>

            <motion.div 
            variants={iconVariations(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes className="text-7xl text-cyan-600" />
            </motion.div>

            <motion.div 
            variants={iconVariations(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-orange-500" />
            </motion.div>

            <motion.div 
            variants={iconVariations(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoDocker className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div 
            variants={iconVariations(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500" />
            </motion.div>

            <motion.div 
            variants={iconVariations(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-cyan-500" />
            </motion.div>

            <motion.div 
            variants={iconVariations(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-yellow-400" />
            </motion.div>
        </motion.div>      
    </div>
  )
}

export default Technologies
