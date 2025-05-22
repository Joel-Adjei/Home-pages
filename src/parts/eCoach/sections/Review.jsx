import React, {useState} from "react";
import AppText from "../Components/primary/AppText";
import AppRate from "../Components/primary/AppRate";
import {HiOutlineUser, HiStar} from "react-icons/hi";
import {colors} from "../config/colors";
import Headers from "../Components/primary/Headers";
import CourseCard from "../Components/PopularCourses/CourseCard";
import Button from "../Components/primary/Button";
import AppButton from "../Components/primary/Button";
import { data} from "../config/data";


const Review = () => {
    const [dataDisplay, setDataDisplay] = useState(data.webDevelopment)
    const [active, setActive] = useState("webDevelopment")

    return (
        <div className={"w-full pt-35 bg-white pb-20"}>
            <Headers title={"Find your perfect program"} heading={"Popular Courses"} />

        </div>
    )
}

export default Review