import React, {useState} from "react";
import AppText from "../Components/primary/AppText";
import AppRate from "../Components/primary/AppRate";
import {HiOutlineUser, HiStar} from "react-icons/hi";
import {colors} from "../config/colors";
import Headers from "../Components/primary/Headers";
import CourseCard from "../Components/PopularCourses/CourseCard";
import Button from "../Components/primary/Button";
import AppButton from "../Components/primary/Button";

const data = {
    programming : [
        {id: 1 ,title:"Data structure and Algorithm", price: "50.00" , rate: 4, lessons: 22, student: "2,300" },
        {id: 1 ,title:"Java Programming", price: "50.00" , rate: 3, lessons: 22, student: "2,300" },
    ],
    dataSci :[
        {id: 1 ,title:"Data structure and Algorithm", price: "50.00" , rate: 2.5, lessons: 22, student: "2,300" },
    ]
}
const PopularCourses = () => {
    const [dataDisplay, setDataDisplay] = useState(data.programming)
    return (
        <div className={"w-full pt-20 "}>
            <Headers title={"Find your perfect program"} heading={"Popular Courses"} />

            <div className={"w-full"}>
                <div className={"w-full flex gap-2"}>
                    <AppButton title={"programming"}
                               onClick={()=>setDataDisplay(data.programming)}
                               className={" bg-white py-0"}
                               showIcon={false}
                    />
                    <AppButton title={"Data Science"}
                               onClick={()=>setDataDisplay(data.dataSci)}
                               showIcon={false}
                    />
                </div>
                <div className={"w-full grid grid-cols-5 gap-3 py-7 px-3"}>
                {
                    dataDisplay.map((value =>
                                <CourseCard
                                    key={value.id}
                                    title={value.title}
                                    price={value.price}
                                    lessons={value.lessons}
                                    numOfStudent={value.student}
                                    rate={value.rate}
                                />
                    ))
                }
                </div>
            </div>

        </div>
    )
}

export default PopularCourses