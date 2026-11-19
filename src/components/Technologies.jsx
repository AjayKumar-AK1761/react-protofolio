import {
  SiApachekafka,
  SiClickhouse,
  SiOpentelemetry,
  SiPrometheus,
  SiKubernetes,
  SiHelm,
  SiPython,
} from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { TbVector } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { FaBell, FaJava, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

const TECH_GROUPS = [
  {
    title: "Telemetry pipeline",
    items: [
      { name: "Kafka", icon: SiApachekafka, color: "text-neutral-200" },
      { name: "Vector", icon: TbVector, color: "text-purple-400" },
      { name: "OTel Collector", icon: SiOpentelemetry, color: "text-amber-400" },
      { name: "ClickHouse", icon: SiClickhouse, color: "text-yellow-300" },
    ],
  },
  {
    title: "Monitoring and alerting",
    items: [
      { name: "Prometheus", icon: SiPrometheus, color: "text-orange-500" },
      { name: "Alertmanager", icon: FaBell, color: "text-orange-400" },
    ],
  },
  {
    title: "Deployment and platform",
    items: [
      { name: "Docker", icon: IoLogoDocker, color: "text-cyan-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-cyan-600" },
      { name: "Helm", icon: SiHelm, color: "text-sky-400" },
      { name: "AKS", icon: VscAzure, color: "text-sky-500" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "MySQL", icon: DiMysql, color: "text-sky-700" },
    ],
  },
];

const DURATIONS = [2.5, 3, 3.5];

const iconVariations = (duration) => ({
  initial: { y: -10 },
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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>

      {TECH_GROUPS.map((group) => (
        <motion.div
          key={group.title}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 last:mb-0">
          <h3 className="mb-8 text-center text-sm uppercase tracking-widest text-neutral-500">
            {group.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {group.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={iconVariations(DURATIONS[index % DURATIONS.length])}
                  initial="initial"
                  animate="animate"
                  className="flex w-36 flex-col items-center gap-3 rounded-2xl border-4 border-neutral-800 p-4">
                  <Icon className={`text-5xl ${item.color}`} />
                  <span className="text-center text-sm text-neutral-400">{item.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
