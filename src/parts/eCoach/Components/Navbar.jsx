import React, {useState} from "react";
import {BiChevronDown, BiListUl} from "react-icons/bi";
import {AiFillCloseCircle} from "react-icons/ai";
import AppButton from "./primary/Button";
import AppText from "./primary/AppText";
import {colors} from "../config/colors";

const li = [
    {
        title:  "Home",
        a: "#home"
    },
    {
        title:  "Courses",
        a: "#courses"
    },
    {
        title:  "About",
        a: "#about"
    },
    {
        title:  "Instructors",
        a: "#instructors"
    },
    {
        title:  "Reviews",
        a: "#review"
    },
]
// const li = ["Demos" , "All Pages" , "Courses", "Shop" , "Blog", "Contact Us"]

const Navbar = () => {
    const [displayMobileNav , setDisplayMobileNav] = useState("hidden")
    return (
        <nav className={"sticky z-50 top-0 w-full py-2 bg-white flex items-center justify-between px-6 sm:px-15 border-b-1 border-gray-200"}>
            {/*Logo*/}
            <div className={"logo flex items-center justify-center"}>
                <button
                    className={"md:hidden"}
                    onClick={()=> setDisplayMobileNav("flex")}
                >
                    <BiListUl size={35} className={"text-blue-500"} />
                </button>

                <p className={"text-orange-300 font-bold text-2xl"}>e
                    <span  className={"text-blue-400"}>Coach</span>
                </p>
            </div>

            <div className={"flex items-center gap-5"} >
                <ul className={`${displayMobileNav} fixed bottom-0 top-0 left-0 w-full h-[100lvh] flex-col bg-gray-100 items-center 
                                md:flex md:flex-row md:relative md:size-fit md:bg-transparent`}>
                    <button
                        className={"md:hidden cursor-pointer absolute top-1 right-1"}
                        onClick={()=> setDisplayMobileNav("hidden")}
                    >
                        <AiFillCloseCircle size={50} className={"text-blue-500"} />
                    </button>
                    {
                        li.map(((value, index) =>
                            <li className={"w-full hover:bg-gray-200 cursor-pointer flex items-center gap-2 px-3 py-2 md:w-fit md:py-0"} key={index}>
                                <a href={value.a}
                                   onClick={()=> setDisplayMobileNav("hidden")}
                                >
                                    <AppText className={"text-sm p-3"}>
                                        {value.title}
                                    </AppText>
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <div style={{backgroundColor: colors.blue}}>
                    <AppButton title={"Login/Register"} showIcon={false} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar