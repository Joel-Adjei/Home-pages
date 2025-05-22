import React from "react";
import AppText from "./AppText";
import {colors} from "../../config/colors";
import {HiOutlineUser} from "react-icons/hi";

const AppRate = ({logo , percent , text , className}) => {
    return (
        <div className={"absolute bg-white flex items-center p-2 pr-8 gap-5 shadow-lg " + className}>
            <div  className={"size-15 bg-yellow-400 flex items-center text-[35px] justify-center md:size-19 md:text-[50px]"}>
                {logo}
            </div>
            <div className={"flex flex-col justify-center"}>
                <AppText className={"text-[30px] leading-5 md:text-[40px] md:leading-9 font-bold"}>{percent}</AppText>
                <AppText className={"md:text-xl" }>{text}</AppText>
            </div>
        </div>
    )
}

export default AppRate