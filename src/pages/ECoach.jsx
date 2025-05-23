import React from "react";
import Navbar from "../parts/eCoach/Components/Navbar";
import {colors} from "../parts/eCoach/config/colors";
import AppText from "../parts/eCoach/Components/primary/AppText";
import "../parts/eCoach/eCoachStyle.css"
import HeroSection from "../parts/eCoach/Components/HeroSection";
import BottomDetails from "../parts/eCoach/Components/BottomDetails";
import PopularCourses from "../parts/eCoach/sections/PopularCourses";
import About from "../parts/eCoach/sections/About";
import JoinInstructor from "../parts/eCoach/sections/JoinInstructor";
import Community from "../parts/eCoach/sections/Community";
import GetStarted from "../parts/eCoach/sections/GetStarted";
import BlogNews from "../parts/eCoach/sections/BlogNews";
import Instructors from "../parts/eCoach/sections/Instructors";
import Footer from "../parts/eCoach/Components/Footer";
import Review from "../parts/eCoach/sections/Review";

const ECoach = () => {
    return (
        <>
            <Navbar />
            <div className={"z-0 w-[100vw]"}>

                <div style={{backgroundColor: colors.lightBlue}} className={"relative h-100vh bg-blue-100 w-full px-6 lg:px-22 sm:px-15 md:h-145"}>
                    <HeroSection />
                    <BottomDetails />
                </div>

                <div className={"px-6 sm:px-15 lg:px-22"}>
                    <PopularCourses />
                </div>

                <About />
                <Community />
                <Instructors />
                <Review />
                <JoinInstructor />
                <BlogNews />
                <GetStarted />
                <Footer />
            </div>
        </>

    )
}

export default ECoach