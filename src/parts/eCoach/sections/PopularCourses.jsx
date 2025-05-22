import React, {useState} from "react";
import Headers from "../Components/primary/Headers";
import CourseCard from "../Components/PopularCourses/CourseCard";
import AppButton from "../Components/primary/Button";
import { data} from "../config/data";

const PopularCourses = () => {
    const [dataDisplay, setDataDisplay] = useState(data.webDevelopment)
    const [active, setActive] = useState("webDevelopment")

    const activeStyle = "border-1 border-transparent"
    const notActiveStyle = "courseOpt bg-white py-0 text-blue-500 border-1 border-gray-200"
    return (
        <div className={"w-full text-center pt-35 bg-white pb-20"}>
            <Headers title={"Find your perfect program"} heading={"Popular Courses"} />

            <div className={"w-full"}>
                <div className={"courseOptions w-full overflow-x-scroll flex md:justify-center gap-2 py-2"}>
                    <AppButton title={"Web Development"}
                               onClick={()=> {
                                   setDataDisplay(data.webDevelopment)
                                   setActive("webDevelopment")
                               }}
                               className={active === "webDevelopment" ? active : notActiveStyle }
                               showIcon={false}
                    />
                    <AppButton title={"Data Science"}
                               onClick={()=> {
                                   setDataDisplay(data.dataScience)
                                   setActive("dataScience")
                               }}
                               className={active === "dataScience" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"cybersecurity"}
                               onClick={()=> {
                                   setDataDisplay(data.cybersecurity)
                                   setActive("cybersecurity")
                               }}
                               className={active === "cybersecurity" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"Ai And Machine Learning"}
                               onClick={()=> {
                                   setDataDisplay(data.aiAndMachineLearning)
                                   setActive("aiAndMachineLearning")
                               }}
                               className={active === "aiAndMachineLearning" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"Cloud Computing"}
                               onClick={()=> {
                                   setDataDisplay(data.cloudComputing)
                                   setActive("cloudComputing")
                               }}
                               className={active === "cloudComputing" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"view All Courses"}
                               onClick={()=> {
                                   setActive("allCourses")
                               }}
                               className={active === "AllCourses" ? active : notActiveStyle}
                               showIcon={false}
                    />
                </div>

                <div className={"courseDisplay mt-2 w-full h-200 lg:h-fit overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 py-7 px-3"}>
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