import React from "react";
import AppText from "../Components/primary/AppText";
import AppButton from "../Components/primary/Button";



const GetStarted = () => {

    return (
        <div className={"relative w-full flex flex-col gap-6 items-center justify-between bg-blue-700  py-17 px-8 md:flex-row md:px-15"}>
            <div className={"md:w-[60%] flex flex-col items-center text-center md:text-left md:items-start"}>
                <AppText className={"font-[600] text-white leading-9 sm:mb-4 text-[30px] sm:leading-9 sm:text-[40px]"}>Funding the Right Course</AppText>
                <AppText className={"text-white font-[300] "}>It Important to consider various factor sch as internets, skills, academic background,
                    and future aspirations.A searching the different options available and seek advise
                </AppText>
            </div>
            <AppButton title={"Get Started Now"} className={"bg-gray-900"} />
        </div>
    )
}

export default GetStarted