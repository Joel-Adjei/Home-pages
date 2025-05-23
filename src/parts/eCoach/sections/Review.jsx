import React, {useState} from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import AppText from "../Components/primary/AppText";
import AppRate from "../Components/primary/AppRate";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";
import {colors} from "../config/colors";
import Headers from "../Components/primary/Headers";
import CommentCard from "../Components/PopularCourses/CommentCard";
import Footer from "../Components/Footer";

const Next = ({style , onClick}) => {
    return <button onClick={onClick} style={{...style}} className={"cursor-pointer absolute p-2 top-[-40px] md:top-[-75px] rounded-lg active:bg-gray-200 right-0"}>
        <HiArrowRight color={"gray"} size={20} />
    </button>
}
const Prev = ({style , onClick}) => {
    return <button onClick={onClick} style={{...style}} className={"cursor-pointer absolute top-[-40px] md:top-[-75px] p-2 rounded-lg active:bg-gray-200 right-14"}>
            <HiArrowLeft color={"gray"} size={20} />
    </button>
}

const Review = () => {
    const [dataDisplay, setDataDisplay] = useState([])

    let settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        initialSlide: 0,
        height: 300,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <div className={"w-full bg-gray-100 pt-15 pb-16 px-16 lg:px-30"}>
            <Headers title={"What our students say"} heading={"Review"} className={"items-start leading-2"} />

            <div className={"w-full"}>
                <Slider {...settings} >
                    <CommentCard
                        type={"student"}
                        key={1}
                        text={``}
                        name={"Ronney Kweku"}
                    />
                    <CommentCard
                        type={"student"}
                        key={1}
                        text={`"jdiqhdhdkhjlhjhjkhjjjjjjjjjjjhkjghjfjsfj" 
                        sjdhasjdhasjgygkjhzGZXfGZFXzGXFzGXfZHXf
                        gZHxfFxHZFXZHGF"`}
                        name={"Ronney Kweku"}
                    />
                    <CommentCard
                        type={"student"}
                        key={1}
                        text={"jdiqhdhdashdasjdhasjdhas"}
                        name={"Ronney Kweku"}
                    />
                    <CommentCard
                        type={"student"}
                        key={1}
                        text={"jdiqhdhdashdasjdhasjdhas"}
                        name={"Ronney Kweku"}
                    />
                    <CommentCard
                        type={"student"}
                        key={1}
                        text={"jdiqhdhdashdasjdhasjdhas"}
                        name={"Ronney Kweku"}
                    />
                </Slider>
            </div>

        </div>
    )
}

export default Review