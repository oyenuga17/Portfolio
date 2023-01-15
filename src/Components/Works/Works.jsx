import React, { useContext } from "react";
import "./Works.css"
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png"

import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works" id="works">
            <div className="awesome">
                <span>Works For All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing
                    <br /> Cupiditate rerum blanditiis
                    <br />Cupiditate rerum blanditiis
                    <br /> Cupiditate rerum blanditiis
                </span>
                <button className='button service-button'>Hire Me</button>

                <div className="blur service-blur1" style={{ background: "#ABF1FF94 " }} ></div>
            </div>
            {/* right */}

            <div className="works-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}


                    className="main-circle">
                    <div className="secondary-circle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="secondary-circle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="secondary-circle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="secondary-circle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="secondary-circle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/*background circle*/}
                <div className="back-circle blue-circle"></div>
                <div className="back-circle yellow-circle"></div>

            </div>
        </div>




    )
}

export default Works