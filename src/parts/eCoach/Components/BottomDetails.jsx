import React from "react";
import {colors} from "../config/colors";
import AppText from "./primary/AppText";

const Card = ({title , desc , className}) => {
    return (
        <div style={{borderColor: colors.orange}}
             className={"w-25 py-2 bg-white flex justify-start grow-1 flex-col shadow-lg gap-2 border-t-3  p-3 " + className}>
            <div className={"w-full text-balance"}>
                <AppText className={"font-bold"}>{title}</AppText>
                <AppText className={"text-[10px]"}>{desc}</AppText>
            </div>

            <button style={{color: colors.blue}} className={"text-[10px] w-fit py-1 cursor-pointer"}>
                More about this
            </button>
        </div>
    )
}
const BottomDetails = () => {
    return (
        <div className={"absolute right-0 bottom-[-60px] w-full px-17 gap-2 flex flex-wrap justify-between items-center md:flex-row md:right-0 md:bottom-[-30px]"}>
            <Card title={"24/7 help"}
                  desc={"jdfoajdfjsadadadsadsd"}
            />
            <Card title={"24/7 help"}
                  desc={"jdfoajdfjsdfjsdfjasfddadadadsadsd"}
            />

            <Card title={"24/7 help"} className={""}
                      desc={"jdfoajdfadadsadsd"}
            />

        </div>
    )
}

export default BottomDetails