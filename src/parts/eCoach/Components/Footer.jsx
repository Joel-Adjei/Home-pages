import React from "react";
import {BiLogoFacebook, BiLogoYoutube , BiLogoInstagramAlt , BiLogoLinkedin , BiLogoTwitter , BiMailSend , BiPhoneCall} from "react-icons/bi";
import { FaLocationPin} from "react-icons/fa6";
import AppButton from "./primary/Button";
import AppText from "./primary/AppText";
import {colors} from "../config/colors";

const li = ["About Us" , "Categories" , "Popular Courses", "FAQs" , "Reviews"]

const Footer = () => {
    return (
        <footer className={"w-full pt-13 px-7 bg-gray-900 sm:px-15"}>
            <div className={"w-full flex flex-col items-center gap-12 items-between pb-7 sm:flex-row"}>
                <div className={"logo flex-2 text-white"} >
                    {/*Logo*/}
                    <p className={"font-bold text-2xl"}>e
                        <span  className={""}>Coach</span>
                    </p>

                    <AppText className={"shade text-white font-[300] leading-6 py-3"}>
                        Start, switch, or advance your career with more than 5,400 courses, Professional Certificate and
                        degrees from-world class universities and companies
                    </AppText>

                    {/*icons*/}
                    <div className={"flex items-center gap-4 text-[27px]"}>
                        <BiLogoFacebook color={"white"} />
                        <BiLogoYoutube color={"white"} />
                        <BiLogoTwitter color={"yellow"} />
                        <BiLogoInstagramAlt color={"white"} />
                        <BiLogoLinkedin color={"white"} />
                    </div>
                </div>

                <div className={"w-full sm:flex-1 pb-3"} >
                    <AppText className={"text-white text-[25px] font-[700]"}>Explore</AppText>
                    <ul className={` flex w-fit flex-col `}>
                        {
                            li.map(((value, index) =>
                                    <li className={"w-full cursor-pointer  flex gap-2 py-[5px]"} key={index}>
                                        <AppText className={"shade hover:text-white font-[300]"}>
                                            {value}
                                        </AppText>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={"w-full sm:flex-2"}>
                    <AppText className={"text-white text-[25px] mb-2 font-[700]"}>Contact Info</AppText>
                    <div className={"flex items-center gap-2  mb-3"}>
                        <div className={"bg-gray-700 flex items-center p-1 justify-center rounded-full border-1 border-gray-500 "}>
                            <FaLocationPin color={"white"} size={18} />
                        </div>
                        <AppText className={"shade font-[300]"}>4823 losh Lane, Pirisburgh Pennsylvaina, 9100</AppText>
                    </div>
                    <div className={"flex items-center gap-2 mb-3"}>
                        <div className={"bg-gray-700 flex items-center p-1 justify-center rounded-full border-1 border-gray-500"}>
                            <BiMailSend color={"white"} size={18} />
                        </div>
                        <AppText className={"shade font-[300]"}>info@ssdfm.com.au</AppText>
                    </div>
                    <div className={"flex items-center gap-2 mb-3"}>
                        <div className={"bg-gray-700 flex items-center p-1 justify-center rounded-full border-1 border-gray-500"}>
                            <BiPhoneCall color={"white"} size={18} />
                        </div>
                        <AppText className={"shade font-[300]"}>412-232-1937</AppText>
                    </div>
                </div>
            </div>

            <div className={"w-full flex justify-between py-8 border-t-1 border-gray-700"}>
                <AppText className={"shade text-[12px] font-[300]"}>2025 eCoach @ EnergyDev</AppText>
                <div className={"flex items-center gap-2"}>
                    <AppText className={"shade text-[12px] font-[300]"}>Term of Service</AppText>
                    <AppText className={"shade text-[12px] font-[300]"}>Privacy Policy</AppText>
                </div>
            </div>
        </footer>
    )
}

export default Footer