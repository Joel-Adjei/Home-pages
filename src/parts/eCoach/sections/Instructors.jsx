import React, {useState} from "react";
import Headers from "../Components/primary/Headers";
import img from "../config/CourseImg.jpg";
import AppText from "../Components/primary/AppText";
import gideon from "../config/intrImg-Joseph-3.jpg"
import joseph from "../config/intrImg-Joseph.jpg"
import Ronney from "../config/intrImg-Ronney.png"
import Amos from "../config/intrImg-Amos.png"

const Card = ({className , name, field , img , key}) => {
    return (
        <div key={key}
             className={"w-full h-60 sm:h-90 lg:w-65 "+ className}>
            <div className={"w-full  h-[80%] bg-gray-400 overflow-hidden"}>
                <img className={"size-full object-cover object-center"} src={img}  />
            </div>

            <div className={"w-full mt-3"}>
                <AppText className={"font-bold leading-5 text-[18px]"}>{name}</AppText>
                <AppText className={"blue text-[12px] mt-1 leading-4 text-blue-600"}>{field}</AppText>
            </div>
        </div>
    )
}

const data = [
    {id: 1 , name: "Caneron Williamson" , field: "Wordpress Developer" , img:gideon },
    {id: 2 ,name: "Ronney Apreku" , field: "UI Designerr" , img:Ronney},
    {id: 3 , name: "Joel Adjei" , field: "FullStack Engineer", img:gideon},
    {id: 4 ,name: "Joseph Terpkson" , field: "System Administrator" , img:joseph},
    {id: 5 , name: "Theresa Webb" , field: "Frontend Developer", img:gideon},
    {id: 6 ,name: "Amos Gyasi" , field: "Python Developer", img:Amos}
]

const Instructors = () => {
    const [dataDisplay, setDataDisplay] = useState(data)

    return (
        <div id={"instructors"} className={"w-full flex flex-col items-center bg-white py-17 px-9 md:px-16 lg:px-30"}>
            <Headers title={"Meet our experts"} heading={"Instructors"} className={"text-center"} />

            <div className={"mt-2 w-full h-fit grid grid-cols-2 md:grid-cols-3 place-items-center justify-center gap-8 lg:gap-0 pb-7"}>
                {
                    dataDisplay.map((value =>
                        <>
                            {value.id === 2 || value.id === 5 ?
                                <Card
                                    className={"md:mt-10"}
                                    key={value.id}
                                    name={value.name}
                                    field={value.field}
                                    img={value.img}
                                />
                                :<Card
                                    key={value.id}
                                    name={value.name}
                                    field={value.field}
                                    img={value.img}
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