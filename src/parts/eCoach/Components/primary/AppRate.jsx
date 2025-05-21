import React from "react";
import AppText from "./AppText";
import {colors} from "../../config/colors";
import {HiOutlineUser} from "react-icons/hi";

const AppRate = ({logo , percent , text , className}) => {
    return (
        <div className={"absolute bg-white flex items-center p-2 pr-8 gap-5 shadow-lg " + className}>
            <div  className={"size-10 bg-orange-400 flex items-center text-[20px] justify-center md:size-15 md:text-[30px]"}>
                {logo}
            </div>
            <div className={"flex flex-col"}>
                <AppText className={" md:text-[20px] font-bold"}>{percent}</AppText>
                <AppText className={"text-sm" }>{text}</AppText>
            </div>
        </div>
    )
}

export default AppRate