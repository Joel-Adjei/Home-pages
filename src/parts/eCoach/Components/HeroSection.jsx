import React from "react";
import AppText from "./primary/AppText";
import AppButton from "./primary/Button";
import AppRate from "./primary/AppRate";
import {HiOutlineUser, HiStar} from "react-icons/hi";
import {colors} from "../config/colors";
import heroImg from "../config/heroimg.png"

const HeroSection = () => {
    return (
        <div className={"w-full h-full pt-20 flex flex-col md:flex-row "}>
            <div className={" flex flex-col items-center w-full md:w-[50%] md:items-start"}>
                <AppText className={"text-[40px] text-center md:text-left md:text-[60px] font-bold"}>
                    Education that prepare you for what's next
                </AppText>
                <AppText className={"text-sm text-center md:text-left mb-7"}>
                    Start , switch, or advance your career with more than 5,400 courses,
                    Professional Certificate, and degree from world-class universities and companies
                </AppText>
                <AppButton title={"Explore Courses"} />
            </div>

            {/*Image*/}
            <div className={" relative overflow-hidden w-full h[50%] md:w-[50%]"}>
                <div className={"absolute bg-blue-500 right-10 md:right-20 size-9 md:size-12 flex items-center text-[30px] justify-center md:text-[20px]"}>
                    <HiStar color={"white"} />
                </div>
                <img src={heroImg} className={"w-[900px] h-full mb-[-145px] mt-[-45px] object-contain"} />
            </div>

            <AppRate
                className={"bottom-27 right-40 md:right-120"}
                logo={<HiOutlineUser color={"white"} /> }
                text={"Success Rate"}
                percent={"93%"}
            />
        </div>
    )
}

export default HeroSection