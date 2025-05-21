import React from "react";
import Navbar from "../parts/eCoach/Components/Navbar";
import {colors} from "../parts/eCoach/config/colors";
import AppText from "../parts/eCoach/Components/primary/AppText";
import HeroSection from "../parts/eCoach/Components/HeroSection";
import BottomDetails from "../parts/eCoach/Components/BottomDetails";
import PopularCourses from "../parts/eCoach/sections/PopularCourses";

const ECoach = () => {
    return (
        <>
            <Navbar />
            <div className={"z-0"}>

                <div style={{backgroundColor: colors.lightBlue}} className={"relative h-100vh bg-blue-100 w-full px-6 sm:px-15 md:h-145"}>
                    <HeroSection />
                    <BottomDetails />
                </div>

                <div className={"px-6 sm:px-15"}>
                    <PopularCourses />
                </div>

            </div>
        </>

    )
}

export default ECoach