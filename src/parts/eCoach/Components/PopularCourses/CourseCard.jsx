import React from "react";
import {colors} from "../../config/colors";
import AppText from "../primary/AppText";
import {HiOutlineUsers , HiOutlineBookOpen} from "react-icons/hi";
import AppButton from "../primary/Button";
import img from "../../config/CourseImg.jpg"
import {AiFillStar} from "react-icons/ai";

let colored = [3,5,5,5,5]
let empty = [3,5,5,5,5]

const CourseCard = ({title, numOfStudent, lessons , rate , key , price}) => {
    colored.length = Math.trunc(rate)
    console.log(colored.length)
    empty.length = Number(5 - colored.length)
    return (
        <div style={{backgroundColor: colors.lightBlue}}
             key={key}
             className={"w-full bg-white shadow-lg"}>
            <div className={"w-full h-50 overflow-hidden"}>
                <img className={"w-full object-cover object-center"} src={img}  />
            </div>

            <div className={"w-full p-2"}>
                <AppText className={"font-bold text-sm"}>{title}</AppText>

                <div className={"flex gap-2"}>
                    <div className={"flex"}>
                        {
                             colored.map(()=>
                                <AiFillStar repeatCount={4}  color={"yellow"} />
                            )
                        }
                        {
                            empty.map(()=>
                                <AiFillStar color={"lightgray"} />
                            )
                        }
                    </div>

                    <AppText className={"text-[10px]"}>{rate}</AppText>
                </div>

                <div className={"flex items-center gap-1 py-2"}>
                    <div className={"flex items-center justify-center gap-y pr-2"}>
                        <HiOutlineUsers color={colors.black} />
                        <AppText className={"text-[9px]"} >{numOfStudent}</AppText>
                    </div>
                    <div className={"flex items-center justify-center gap-1 "}>
                        <HiOutlineBookOpen color={colors.black} />
                        <AppText className={"text-[9px]"} >{lessons} Lessons</AppText>
                    </div>
                </div>

                <div style={{backgroundColor: "lightgray"}} className={"w-full h-[1px] my-3"}> </div>

                <div>
                    <AppButton title={'$'+price} showIcon={false} />
                </div>
            </div>



        </div>
    )
}

export default CourseCard