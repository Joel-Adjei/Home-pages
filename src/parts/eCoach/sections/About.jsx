import React from "react";
import AppText from "../Components/primary/AppText";
import AppRate from "../Components/primary/AppRate";
import {HiOutlineUser, HiCheckCircle} from "react-icons/hi";
import Headers from "../Components/primary/Headers";
import AppButton from "../Components/primary/Button";
import img from "../config/intrImg-Joseph.jpg";



const About = () => {

    return (
        <div className={"w-full bg-gray-100 flex flex-col py-17 px-8 md:px-15 lg:px-30 md:flex-row"}>
            <div className={"relative flex-1 md:pr-10"}>
                <AppRate
                    className={"bottom-7 left-4 "}
                    logo={<HiOutlineUser color={"white"} /> }
                    text={"Success Rate"}
                    percent={"93%"}
                />

                <div className={"w-full h-110 md:h-full bg-gray-300"}>
                    <img className={"size-full object-cover"} src={img}  />
                </div>
            </div>

            <div className={"flex-1 flex flex-col py-2"}>
                <Headers title={"Ways we can help"} heading={"About us"} className={"items-start"} />
                <AppText className={"text-sm leading-7"}>
                    Our elearning platform is a dynamic and innovative online education hub design to meet the needs of student,
                     educators and Selflong learners.<br />We believe that learning should be accessible everywhere
                </AppText>
                <div>
                    <div className={"px-2 py-5"}>
                        <div className={"flex items-center gap-2 py-2"}>
                            <HiCheckCircle
                                className={"p-[1px] rounded-full bg-white text-blue-500 border-1 border-gray-200"}
                                size={31}
                            />
                            <AppText className={"text-[14px] font-semibold"}>Personalised learning experience</AppText>
                        </div>
                        <div className={"flex items-center gap-2 py-2"}>
                            <HiCheckCircle
                                className={"p-[1px] rounded-full bg-white text-blue-500 border-1 border-gray-200"}
                                size={31}
                            />
                            <AppText className={"text-[14px] font-semibold"}>Access to a wide range o f resources</AppText>
                        </div>
                        <div className={"flex items-center gap-2 py-2"}>
                            <HiCheckCircle
                                className={"p-[1px] rounded-full bg-white text-blue-500 border-1 border-gray-200"}
                                size={31}
                            />
                            <AppText className={"text-[14px] font-bold"}>Flexibility and convenience</AppText>
                        </div>
                    </div>


                    <div className={"w-70 h-[1px] bg-gray-300 my-2"}> </div>
                </div>
                <AppButton title={"Explore Courses"} className={"mt-4"}/>
            </div>

        </div>
    )
}

export default About