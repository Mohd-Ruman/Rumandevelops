import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { TechCards } from "./canvas";

import { styles } from "../styles";

const Techcards = () => {
  return (
    <section>
        <p className={`${styles.sectionSubText}`}>Technologies I use</p>
        <h1 className={`${styles.sectionHeadText}`}>Techstack.</h1>
        <div className="flex flex-row gap-10
        flex-wrap mt-10 items-center justify-center
        sm:justify-start">
            {
                technologies.map((technology, index) =>(
                    <TechCards key={index}
                    technology={technology}
                    {...technology}/>
                ))
            }
        </div>
    </section>
  )
}

export default SectionWrapper(Techcards, "Tech");