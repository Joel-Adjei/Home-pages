import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {colors} from "../../config/colors";

const AppButton = ({title , showIcon = true , onClick , className}) => {
    return (
        <button
                className={"flex w-fit py-3 px-4 cursor-pointer shrink-0 text-white bg-blue-500 items-center justify-center gap-2 " + className}
                onClick={onClick}
        >
            <p className={"text-sm"}>{title}</p>
            { showIcon && <AiOutlineArrowRight size={10} color={"white"}/> }
        </button>
    )
}

export default AppButton