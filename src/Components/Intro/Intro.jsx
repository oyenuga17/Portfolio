import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}> I am</span>
          <span> Oyenuga Seun</span>
          <span>
            Frontend Developer with a high level of experience in web design and
            development , producinng quality work
          </span>
        </div>
        <button className=" button intro-button">Hire Me </button>
        <div className="intro-icon">
          <img src={Github} alt="github link" />
          <img src={Linkedin} alt="linkdein link" />
          <img src={Instagram} alt="Instagram Link" />
        </div>
      </div>

      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Design" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/*blur*/}
        <div
          className="blur"
          style={{ background: "rgba(238, 210,255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
