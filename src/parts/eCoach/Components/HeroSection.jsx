import React from "react";
import AppText from "./primary/AppText";
import AppButton from "./primary/Button";
import AppRate from "./primary/AppRate";
import {HiOutlineUser, HiStar} from "react-icons/hi";
import heroImg from "../config/heroimg-1.png"

const HeroSection = () => {
    return (
        <div className={"w-full h-full flex flex-col md:flex-row "}>
            <div className={" flex flex-col items-center w-full pt-10 md:pt-20 md:w-[50%] md:items-start"}>
                <AppText className={"text-[40px] leading-12 sm:leading-16 text-center md:text-left md:text-[60px] font-bold"}>
                    Education that prepare you for what's next
                </AppText>
                <AppText className={"text-sm text-center md:text-left mb-7"}>
                    Start , switch, or advance your career with more than 5,400 courses,
                    Professional Certificate, and degree from world-class universities and companies
                </AppText>
                <AppButton title={"Explore Courses"} />
            </div>

            {/*Image*/}
            <div className={" relative overflow-hidden flex justify-center w-full h[50%] md:w-[50%]"}>
                <div className={"absolute bg-blue-500 right-10 bottom-60 size-11 flex items-center text-[30px] justify-center md:size-15 md:right-20 md:bottom-70  md:text-[40px]"}>
                    <HiStar color={"white"} />
                </div>
                <img src={heroImg} className={"w-[420px] sm:w-[430px] mt-6 md:w-full mb-[-70px] md:mb-[-30px] object-contain"} />
            </div>

            <AppRate
                className={"bottom-27 right-40 sm:right-90 md:right-55 lg:right-120"}
                logo={<HiOutlineUser color={"white"} /> }
                text={"Success Rate"}
                percent={"93%"}
            />
        </div>
    )
}

export default HeroSection