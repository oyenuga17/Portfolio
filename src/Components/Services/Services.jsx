import React, { useContext } from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card"
import Resume from "./Oluwaseun_Oyenuga_CV(1) (1).pdf"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services"  id='services'>
      {/*left*/}
      <div className="awesome">
        <span>My awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> Cupiditate rerum blanditiis </span>
        <a href={Resume} download><button className='button service-button'>Download Cv</button></a>

        <div className="blur service-blur1" style={{ background: "#ABF1FF94 " }} ></div>
      </div>
      {/* right*/}
      <div className="cards">
        {/*first Card*/}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>

        {/*Second Card*/}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition} >

          <Card emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css JavaScript,React"}
          />
        </motion.div>


        {/*Third Card*/}
        <motion.div initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>

          <Card emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem tect aere rfkfk 4kkrk "}
          />
        </motion.div>
        <div className='blur service-blur2' style={{ background: "var(--purple)" }}></div>

      </div>
    </div>
  )
}

export default Services