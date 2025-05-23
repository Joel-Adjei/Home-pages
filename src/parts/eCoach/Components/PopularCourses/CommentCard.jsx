import React from "react";
import AppText from "../primary/AppText";
import {HiOutlineUsers , HiOutlineBookOpen} from "react-icons/hi";

const CommentCard = ({name, text ,key , img , type }) => {

    return (
        <div key={key} className={"mx-2 h-fit flex items-start gap-2 bg-gray-30"}>
            <div>
                <p className={"font-[Roboto] text-gray-300 font-[700] leading-18 text-[80px]"}>
                    "
                </p>
            </div>
            <div className={"flex-1 flex flex-col"}>
                <AppText className={"text-sm h-25 leading-7"}>{text}</AppText>

                <div className={"flex items-center gap-2 h-fit"}>
                    <div className={"size-10 p-2 bg-gray-400 rounded-full overflow-hidden"}>
                        <img className={"w-full object-cover"} src={img}/>
                    </div>
                    <div>
                        <AppText className={""}>{name}</AppText>
                        <AppText className={"text-[10px]"}>{type}</AppText>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard