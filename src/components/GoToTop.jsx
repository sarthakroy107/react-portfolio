import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { motion, transform } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className=" fixed right-7 bottom-7">
      {isVisible && (
        <motion.div initial={{scale:0}} animate={{scale:1.5}}
         className="top-btn h-8 w-8 bg-purple-500 flex items-center justify-center rounded-full" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </motion.div>
      )}
    </div>
  );
};

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   .top-btn {
//     font-size: 2.4rem;
//     width: 6rem;
//     height: 6rem;
//     color: #fff;
//     border-radius: 50%;
//     position: fixed;
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;

//     &--icon {
//       animation: gototop 1.2s linear infinite alternate-reverse;
//     }

//     @keyframes gototop {
//       0% {
//         transform: translateY(-0.5rem);
//       }
//       100% {
//         transform: translateY(1rem);
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .top-btn {
//       right: 0;
//       left: 40%;
//     }
//   }
// `;

export default GoToTop;