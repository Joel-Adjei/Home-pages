import React from "react";
import AppText from "../Components/primary/AppText";



const Community = () => {

    return (
        <div className={"relative w-full bg-blue-700  py-17 px-8 md:px-15 lg:px-30"}>
            <AppText className={"font-[600] text-white text-[30px] text-center mb-7 sm:text-[40px]"}>Building a lifelong learning Community</AppText>
            <div className={"flex flex-col md:flex-row text-center md:text-left items-center"}>
                <div className={"flex-1 flex flex-col items-center md:items-start pb-5 md:pb-0 md:pr-7"}>
                    <AppText className={"font-[600] text-white text-[23px] sm:text-[27px]"}>1.5M</AppText>
                    <AppText className={"text-white "}>Learners available in this platform and more are counting daily</AppText>
                </div>

                <div className={"flex-1 flex flex-col md:flex-row items-center"}>
                    <div className={"h-[1px] w-15 md:w-[1px] md:h-13 bg-white"}></div>
                    <div className={"flex flex-col items-center md:items-start py-7 md:py-0 md:px-9"}>
                        <AppText className={"font-[600] text-white text-[27px]"}>87%</AppText>
                        <AppText className={"text-white "}>Our Student have the highest success of getting hired</AppText>
                    </div>
                    <div className={"h-[1px] w-15 md:w-[1px] md:h-13 bg-white"}></div>
                </div>

                <div className={"flex-1 flex flex-col items-center pt-5 md:items-start md:pt-0 md:pl-7"}>
                    <AppText className={"font-[600] text-white text-[27px]"}>364+</AppText>
                    <AppText className={"text-white "}>High Quality teachers offering courses and videos</AppText>
                </div>

            </div>
        </div>
    )
}

export default Community