import React, {useState} from "react";
import Headers from "../Components/primary/Headers";
import img from "../config/CourseImg.jpg";
import AppText from "../Components/primary/AppText";
import {colors} from "../config/colors";
import AppButton from "../Components/primary/Button";

const Card = ({className , name, field , key}) => {
    return (
        <div key={key}
             className={"w-full h-50 sm:h-90 md:w-20 cursor-pointer hover:bg-white "+ className}>
            <div className={"w-full h-[80%] bg-gray-400 overflow-hidden"}>
                {/*<img className={"w-full object-cover object-center"} src={img}  />*/}
            </div>

            <div className={"w-full my-2"}>
                <AppText className={"font-bold leading-5 text-[18px]"}>{name}</AppText>
                <AppText className={"blue text-[14px] text-blue-600"}>{field}</AppText>
            </div>
        </div>
    )
}

const data = [
    {id: 1 , name: "Caneron Williamson" , field: "Wordpress Developer" },
    {id: 2 ,name: "Devon Lane" , field: "UI Designerr"},
    {id: 3 , name: "Joel Adjei" , field: "FullStack Engineer"},
    {id: 4 ,name: "Devon Lane" , field: "Frontend Developer"},
    {id: 5 , name: "Theresa Webb" , field: "UI Designer"},
    {id: 6 ,name: "Darlene Robertson" , field: "Python Developer"}
]

const Instructors = () => {
    const [dataDisplay, setDataDisplay] = useState(data)

    return (
        <div className={"w-full flex flex-col items-center bg-white py-17 px-9 md:px-16"}>
            <Headers title={"Meet our experts"} heading={"Instructors"} />

            <div className={"mt-2 w-full h-fit grid grid-cols-2 md:grid-cols-3 justify-center gap-8 pb-7 px-3"}>
                {
                    dataDisplay.map((value =>
                        <>
                            {value.id === 2 || value.id === 5 ?
                                <Card
                                    className={"md:mt-8"}
                                    key={value.id}
                                    name={value.name}
                                    field={value.field}
                                />
                                :<Card
                                    key={value.id}
                                    name={value.name}
                                    field={value.field}
                                />
                            }
                        </>

                    ))
                }
            </div>
        </div>
    )
}
export default Instructors