import {color, motion} from "framer-motion"

const quote =  {
    initial:{
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.2,
        }
    }
}
const singleWord =  {
    initial:{
        opacity: 0,
        y:50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition:{
            duration: 1,
        }
    }
}
export const AnimatedText = ({text, className=""}) => {
    console.log(text);
  return (
    <div>
        <motion.h1 className={`$ inline-block text-[#f5f5f5]/50 font-semibold text-5xl ${className}`}
        variants={quote} initial = "initial" animate="animate">
            {
                text.split("").map((word, index)=>
                <motion.span whileHover={{color: "#36FACE", scale: 1.1}} className={`inline-block text-white`} key={word+'-'+index}
                variants={singleWord} >
                    {word}
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}
