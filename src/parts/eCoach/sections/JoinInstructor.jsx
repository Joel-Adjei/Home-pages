import React from "react";
import AppText from "../Components/primary/AppText";
import AppRate from "../Components/primary/AppRate";
import {HiOutlineUser } from "react-icons/hi";
import Headers from "../Components/primary/Headers";
import AppButton from "../Components/primary/Button";
import img from "../config/intrImg-Joseph-3.jpg"


const JoinInstructor = () => {

    return (
        <div className={"relative w-full bg-white flex flex-col-reverse py-17 px-8 md:px-15 lg:px-30 md:flex-row-reverse"}>
            <AppRate
                className={"bottom-23 right-40 sm:right-97 md:right-90 "}
                logo={<HiOutlineUser color={"white"} /> }
                text={"Community"}
                percent={"Grow"}
            />

            <div className={"w-full md:w-120"}>
                <div className={"w-full h-110 md:h-full bg-gray-300"}>
                    <img className={"w-full object-contain"} src={img}  />
                </div>
            </div>

            <div className={"flex-1 flex flex-col py-2 pb-7 md:pb-0 md:pr-15"}>
                <Headers title={"Join us as an instructor"} heading={"Become an Instructor."} className={"items-start"} />
                <AppText className={"text-sm leading-7"}>
                    Our elearning platform is a dynamic and innovative online education hub design to meet the needs of student,
                     educators and Selflong learners.<br />We believe that learning should be accessible everywhere
                </AppText>
                <div>
                    <div className={"py-5"}>
                        <div className={"flex flex-col gap-2 py-2"}>
                            <AppText className={"text-[17px] font-semibold"}>Personalised learning experience</AppText>
                            <AppText className={"text-[14px] leading-7"}>
                                Our elearning platform is a dynamic and innovative online education hub design to meet the needs of student,
                                educators and Selflong learners.
                            </AppText>
                        </div>
                    </div>
                </div>
                <AppButton title={"Start Teaching Now"} className={"mt-4"}/>
            </div>

        </div>
    )
}

export default JoinInstructor