import React from "react";
import {colors} from "../config/colors";
import AppText from "./primary/AppText";

const Card = ({title , desc}) => {
    return (
        <div style={{borderColor: colors.orange}}
             className={"w-90 py-2 bg-white flex justify-start flex-col shadow-lg gap-2 border-t-3  p-3"}>
            <AppText className={"font-bold"}>{title}</AppText>
            <AppText className={"text-[10px]"}>{desc}</AppText>
            <button style={{color: colors.blue}} className={"text-[10px] w-fit py-1 cursor-pointer"}>
                More about this
            </button>
        </div>
    )
}
const BottomDetails = () => {
    return (
        <div className={"absolute right-0 bottom-[-30px] w-full px-17 flex justify-between md:flex-row"}>
            <Card title={"24/7 help"}
                  desc={"jdfoajdfjsdfjsdfj<br/>asfddfadsadadadsadsd<br/>"}
            />
            <Card title={"24/7 help"}
                  desc={"jdfoajdfjsdfjsdfj<br/>asfddfadsadadadsadsd<br/>"}
            />
            <Card title={"24/7 help"}
                  desc={"jdfoajdfjsdfjsdfj<br/>asfddfadsadadadsadsd<br/>"}
            />
        </div>
    )
}

export default BottomDetails