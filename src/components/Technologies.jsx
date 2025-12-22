// Ticketing & Helpdesk
import { SiZendesk } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";

// Knowledge Base & Collaboration
import { SiConfluence } from "react-icons/si";
import { SiMicrosoftsharepoint } from "react-icons/si";

// Microsoft Ecosystem
import { SiMicrosoftoffice } from "react-icons/si";
import { SiWindows } from "react-icons/si";

// Directory & Identity
// (Active Directory → Windows Icon)
import { SiWindows as SiActivedirectory } from "react-icons/si";

// Operating Systems
import { SiLinux } from "react-icons/si";

// Remote Support
import { SiTeamviewer } from "react-icons/si";

// Networking
import { FaNetworkWired } from "react-icons/fa";


const iconVariants= (duration) =>({
    initial: {y:-10},
    animate:{
        y: [10, -10],
        
        transition: {
            duration: duration, 
            ease: "linear" ,
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiZendesk className="text-7xl text-cyan-400"/>
            </motion.div>

            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-cyan-400"/>
            </div> */}

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJirasoftware className="text-7xl text-yellow-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiConfluence className="text-7xl"/>
            </motion.div>

            

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiWindows className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLinux className="text-7xl text-purple-700"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTeamviewer className="text-7xl text-orange-400"/>
            </motion.div>


        </motion.div>
      
    </div>
  )
}

export default Technologies
