import React, {useState} from "react";
import Headers from "../Components/primary/Headers";
import CourseCard from "../Components/PopularCourses/CourseCard";
import img from "../config/CourseImg.jpg";
import AppText from "../Components/primary/AppText";
import {HiOutlineBookOpen } from "react-icons/hi";
import {colors} from "../config/colors";
import AppButton from "../Components/primary/Button";
import {AiOutlineArrowRight , AiOutlineCalendar } from "react-icons/ai";


const BlogCard = ({title, datePosted, category , key}) => {
    return (
        <div key={key}
             className={"w-full h-fit border-1 cursor-pointer border-gray-100 hover:bg-white shadow-md"}>
            <div className={"w-full md:h-50 overflow-hidden"}>
                <img className={"w-full object-cover object-center"} src={img}  />
            </div>

            <div className={"w-full p-2 "}>

                <div className={"flex flex-col items-start md:flex-row md:items-center gap-1 my-2 py-2"}>
                    <div className={"flex items-center justify-center gap-1 pr-2"}>
                        <AiOutlineCalendar color={colors.black} />
                        <AppText className={"text-[11px]"} >{datePosted}</AppText>
                    </div>
                    <div className={"flex items-center justify-center gap-1 "}>
                        <HiOutlineBookOpen color={colors.blue} />
                        <AppText className={"text-[11px]"} >{category}</AppText>
                    </div>
                </div>

                <AppText className={"font-bold text-lg"}>{title}</AppText>

                <button
                    className={"flex w-fit py-3 cursor-pointer text-bg-white items-center justify-center gap-2"}
                >
                    <p className={"blue text-sm"}>Read More</p>
                    <AiOutlineArrowRight size={10} className={"text-blue-500"}/>
                </button>
            </div>
        </div>
    )
}

const data = [
    {id: 1 , title: "5 Ways To Become an Authentic Leader" , category: "Education" , date: "February 11,2020"},
    {id: 2 , title: "The Power of Positively Energizing Leaders" , category: "Education", date: "May 11,2022"},
    {id: 3 , title: "7 Procreate Tips That Any Digital Artist Should Know" , category: "Education", date: "October 21,2025"},
]

const BlogNews = () => {
    const [dataDisplay, setDataDisplay] = useState(data)

    return (
        <div className={"w-full flex flex-col items-center bg-white py-17 px-9 md:px-16"}>
            <Headers className={"text-center"} title={"Find your perfect program"} heading={"Popular Courses"} />

            <div className={"mt-2 w-full h-fit grid grid-cols-2 md:grid-cols-3 justify-center gap-3 py-7 px-3"}>
                {
                    dataDisplay.map((value =>
                        <BlogCard
                            key={value.id}
                            title={value.title}
                            datePosted={value.date}
                            category={value.category}
                        />
                    ))
                }
            </div>

            <AppButton title={"Explore All Blog Past"} />

        </div>
    )
}
export default BlogNews