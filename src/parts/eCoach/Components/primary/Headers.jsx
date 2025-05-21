import React from "react";
import {colors} from "../../config/colors";
import AppText from "./AppText";

const Headers = ({ className , title , heading }) => {
    return (
        <div  className={"w-full p-4 flex flex-col items-center "+ className}>
            <div>
                <AppText className={"text-sm"}>{heading}</AppText>
            </div>
            <AppText className={"text-[33px] font-bold"}>{title}.</AppText>
            <div style={{backgroundColor: colors.blue}} className={"w-20 h-[2px]"}> </div>
        </div>
    )
}

export default Headers