import React from "react";
import {colors} from "../../config/colors";
import AppText from "./AppText";

const Headers = ({ className , title , heading }) => {
    return (
        <div  className={"w-full p-4 mb-3 flex flex-col items-center "+ className}>
            <div>
                <AppText className={"text-sm"}>{heading}</AppText>
            </div>
            <AppText className={"text-[28px] leading-8s font-bold sm:text-left sm:text-[33px]"}>{title}</AppText>
            <div className={"w-20 mt-2 bg-blue-600 h-[2px]"}> </div>
        </div>
    )
}

export default Headers