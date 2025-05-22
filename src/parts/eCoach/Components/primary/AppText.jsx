import React from "react";
import {colors} from "../../config/colors";

const AppText = ({children , className }) => {
    return (
        <p className={"text-gray-800 font-[Roboto] text-sm "+ className}>
            {children}
        </p>
    )
}

export default AppText