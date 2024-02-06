import React from "react";
import Techcards from "../Techcards";
import { styles } from "../../styles";

const TechCards = ({technology, index}) => {
  return (
    <div className="bg-tertiary w-[150px] h-[150px]
    sm:w-[170px] sm:h-[170px]
    flex items-center justify-center rounded-3xl
    flex-col border-white">
        <img src={technology.icon}
        className="w-[70px] h-[70px]
        object-contain"/>
        <h3 className="font-medium mt-4 uppercase text-[14px]
        text-white/70">
            {technology.name}
        </h3>
    </div>
  )
}

export default TechCards