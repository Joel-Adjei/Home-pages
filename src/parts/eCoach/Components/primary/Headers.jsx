import React from "react";
import {colors} from "../../config/colors";
import AppText from "./AppText";

const Headers = ({ className , title , heading }) => {
    return (
        <div  className={"w-full p-4 mb-3 flex flex-col items-center "+ className}>
            <div>
                <p className={"font-[Montserrat] text-gray-600 text-sm "}>{heading}</p>
            </div>
            <h3 className={"text-[29px] font-[Nexa] leading-12 font-bold sm:text-left sm:text-[33px]"}>{title}</h3>
            <div className={"w-20 mt-1 bg-blue-600 h-[2px]"}> </div>
        </div>
    )
}

export default Headers