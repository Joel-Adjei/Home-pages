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
    webDevelopment: [
        { id: 1, title: "Full-Stack Web Development", rate: 4.8, lessons: 120, price: "$149", registeredStudent: 34000 },
        { id: 2, title: "Frontend with React", rate: 4.6, lessons: 85, price: "$99", registeredStudent: 21000 },
        { id: 3, title: "Backend with Node.js", rate: 4.7, lessons: 70, price: "$109", registeredStudent: 18000 },
        { id: 4, title: "HTML & CSS for Beginners", rate: 4.5, lessons: 40, price: "$59", registeredStudent: 15000 },
        { id: 5, title: "JavaScript Mastery", rate: 4.8, lessons: 95, price: "$129", registeredStudent: 27000 },
        { id: 6, title: "Responsive Web Design", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 13000 },
        { id: 7, title: "Modern Layouts with Flexbox & Grid", rate: 4.7, lessons: 60, price: "$79", registeredStudent: 11000 },
        { id: 8, title: "TypeScript for Web Developers", rate: 4.6, lessons: 55, price: "$89", registeredStudent: 9000 },
        { id: 9, title: "Next.js Crash Course", rate: 4.8, lessons: 80, price: "$99", registeredStudent: 17000 },
        { id: 10, title: "Progressive Web Apps (PWA)", rate: 4.5, lessons: 50, price: "$89", registeredStudent: 7000 },
        { id: 11, title: "Authentication & Security in Web Apps", rate: 4.7, lessons: 60, price: "$109", registeredStudent: 12000 },
        { id: 12, title: "APIs and RESTful Services", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 13000 },
        { id: 13, title: "Webpack & Module Bundlers", rate: 4.4, lessons: 45, price: "$79", registeredStudent: 8000 },
        { id: 14, title: "Tailwind CSS Complete Guide", rate: 4.7, lessons: 55, price: "$89", registeredStudent: 11000 },
        { id: 15, title: "Bootstrap in Practice", rate: 4.5, lessons: 40, price: "$69", registeredStudent: 9500 },
        { id: 16, title: "JAMstack Fundamentals", rate: 4.6, lessons: 60, price: "$99", registeredStudent: 8700 },
        { id: 17, title: "E-commerce Web Dev with Stripe", rate: 4.8, lessons: 75, price: "$119", registeredStudent: 14500 },
        { id: 18, title: "Web Accessibility (WCAG)", rate: 4.5, lessons: 40, price: "$59", registeredStudent: 5200 },
        { id: 19, title: "Headless CMS with GraphQL", rate: 4.7, lessons: 70, price: "$109", registeredStudent: 9000 },
        { id: 20, title: "Freelancing as a Web Developer", rate: 4.6, lessons: 50, price: "$89", registeredStudent: 7800 }
    ],
    dataScience: [
        { id: 21, title: "Data Science Bootcamp", rate: 4.9, lessons: 150, price: "$199", registeredStudent: 50000 },
        { id: 22, title: "Python for Data Analysis", rate: 4.7, lessons: 90, price: "$89", registeredStudent: 25000 },
        { id: 23, title: "Machine Learning with Scikit-Learn", rate: 4.8, lessons: 100, price: "$129", registeredStudent: 32000 },
        { id: 24, title: "SQL for Data Science", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 19000 },
        { id: 25, title: "Statistics for Data Science", rate: 4.7, lessons: 75, price: "$99", registeredStudent: 21000 },
        { id: 26, title: "Data Visualization with Python", rate: 4.8, lessons: 80, price: "$109", registeredStudent: 15000 },
        { id: 27, title: "Excel for Data Analysis", rate: 4.5, lessons: 50, price: "$69", registeredStudent: 11000 },
        { id: 28, title: "Data Wrangling with Pandas", rate: 4.6, lessons: 60, price: "$89", registeredStudent: 12500 },
        { id: 29, title: "Big Data with Hadoop", rate: 4.5, lessons: 90, price: "$119", registeredStudent: 13500 },
        { id: 30, title: "Apache Spark for Data Science", rate: 4.6, lessons: 85, price: "$129", registeredStudent: 14000 },
        { id: 31, title: "Tableau for Data Visualization", rate: 4.7, lessons: 70, price: "$99", registeredStudent: 17000 },
        { id: 32, title: "Power BI Essentials", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 16000 },
        { id: 33, title: "Time Series Analysis", rate: 4.8, lessons: 75, price: "$109", registeredStudent: 10000 },
        { id: 34, title: "Natural Language Processing", rate: 4.7, lessons: 95, price: "$129", registeredStudent: 22000 },
        { id: 35, title: "AI & Data Ethics", rate: 4.5, lessons: 40, price: "$59", registeredStudent: 5000 },
        { id: 36, title: "Data Science with R", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 13000 },
        { id: 37, title: "Capstone Project in Data Science", rate: 4.9, lessons: 60, price: "$149", registeredStudent: 9000 },
        { id: 38, title: "Career Prep for Data Analysts", rate: 4.6, lessons: 50, price: "$69", registeredStudent: 8700 },
        { id: 39, title: "Geospatial Data Science", rate: 4.5, lessons: 70, price: "$99", registeredStudent: 7000 },
        { id: 40, title: "Data Engineering for Beginners", rate: 4.6, lessons: 85, price: "$119", registeredStudent: 9500 }
    ],
    cybersecurity: [
        { id: 41, title: "Ethical Hacking Fundamentals", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 20000 },
        { id: 42, title: "Cybersecurity Essentials", rate: 4.7, lessons: 80, price: "$109", registeredStudent: 18000 },
        { id: 43, title: "Penetration Testing Advanced", rate: 4.8, lessons: 95, price: "$139", registeredStudent: 16000 },
        { id: 44, title: "Network Security Basics", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 14000 },
        { id: 45, title: "CompTIA Security+ Certification", rate: 4.7, lessons: 85, price: "$129", registeredStudent: 23000 },
        { id: 46, title: "Web App Security", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 12000 },
        { id: 47, title: "Social Engineering & Phishing", rate: 4.5, lessons: 50, price: "$79", registeredStudent: 8000 },
        { id: 48, title: "Incident Response & Recovery", rate: 4.6, lessons: 70, price: "$109", registeredStudent: 11000 },
        { id: 49, title: "SIEM Tools with Splunk", rate: 4.7, lessons: 80, price: "$119", registeredStudent: 13000 },
        { id: 50, title: "Firewalls and VPNs", rate: 4.6, lessons: 60, price: "$89", registeredStudent: 9000 },
        { id: 51, title: "Malware Analysis Fundamentals", rate: 4.8, lessons: 90, price: "$139", registeredStudent: 10000 },
        { id: 52, title: "Cloud Security with AWS", rate: 4.7, lessons: 75, price: "$129", registeredStudent: 14000 },
        { id: 53, title: "Linux Security Essentials", rate: 4.5, lessons: 55, price: "$89", registeredStudent: 8500 },
        { id: 54, title: "Digital Forensics Introduction", rate: 4.6, lessons: 60, price: "$99", registeredStudent: 7000 },
        { id: 55, title: "Zero Trust Security Model", rate: 4.6, lessons: 50, price: "$89", registeredStudent: 6500 },
        { id: 56, title: "Kali Linux for Pentesters", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 9500 },
        { id: 57, title: "Cyber Threat Intelligence", rate: 4.6, lessons: 65, price: "$99", registeredStudent: 7400 },
        { id: 58, title: "OWASP Top 10 Explained", rate: 4.5, lessons: 50, price: "$79", registeredStudent: 9800 },
        { id: 59, title: "Ethical Hacking with Metasploit", rate: 4.7, lessons: 70, price: "$119", registeredStudent: 8800 },
        { id: 60, title: "Security Auditing & Compliance", rate: 4.6, lessons: 60, price: "$99", registeredStudent: 8200 }
    ],
    aiAndMachineLearning: [
        { id: 61, title: "AI for Beginners", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 17000 },
        { id: 62, title: "Deep Learning Specialization", rate: 4.9, lessons: 130, price: "$179", registeredStudent: 28000 },
        { id: 63, title: "Natural Language Processing", rate: 4.7, lessons: 95, price: "$129", registeredStudent: 22000 },
        { id: 64, title: "Neural Networks from Scratch", rate: 4.8, lessons: 100, price: "$139", registeredStudent: 15000 },
        { id: 65, title: "Computer Vision with TensorFlow", rate: 4.7, lessons: 85, price: "$119", registeredStudent: 14000 },
        { id: 66, title: "AI with Python", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 18000 },
        { id: 67, title: "Machine Learning A-Z", rate: 4.8, lessons: 110, price: "$149", registeredStudent: 26000 },
        { id: 68, title: "Reinforcement Learning", rate: 4.6, lessons: 90, price: "$129", registeredStudent: 12000 },
        { id: 69, title: "GANs for Image Generation", rate: 4.7, lessons: 85, price: "$119", registeredStudent: 10500 },
        { id: 70, title: "AI in Finance", rate: 4.5, lessons: 60, price: "$99", registeredStudent: 8500 },
        { id: 71, title: "AI for Healthcare", rate: 4.6, lessons: 75, price: "$109", registeredStudent: 9200 },
        { id: 72, title: "AutoML & No-Code AI", rate: 4.4, lessons: 50, price: "$89", registeredStudent: 8000 },
        { id: 73, title: "TensorFlow Developer Certificate Prep", rate: 4.8, lessons: 100, price: "$139", registeredStudent: 9700 },
        { id: 74, title: "Intro to Transformers (BERT, GPT)", rate: 4.7, lessons: 90, price: "$129", registeredStudent: 10000 },
        { id: 75, title: "AI Ethics & Bias", rate: 4.5, lessons: 45, price: "$69", registeredStudent: 6100 },
        { id: 76, title: "MLOps for AI Engineers", rate: 4.6, lessons: 80, price: "$119", registeredStudent: 8700 },
        { id: 77, title: "Deploying ML Models to Production", rate: 4.7, lessons: 90, price: "$129", registeredStudent: 9500 },
        { id: 78, title: "Speech Recognition Systems", rate: 4.6, lessons: 70, price: "$109", registeredStudent: 7200 },
        { id: 79, title: "AI for Robotics", rate: 4.7, lessons: 85, price: "$119", registeredStudent: 6800 },
        { id: 80, title: "Build Chatbots with Dialogflow", rate: 4.6, lessons: 65, price: "$99", registeredStudent: 8900 }
    ],
    mobileDevelopment: [
        { id: 81, title: "Android App Development with Kotlin", rate: 4.7, lessons: 90, price: "$109", registeredStudent: 18000 },
        { id: 82, title: "iOS Development with Swift", rate: 4.8, lessons: 95, price: "$129", registeredStudent: 16000 },
        { id: 83, title: "React Native for Beginners", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 14000 },
        { id: 84, title: "Flutter App Development", rate: 4.7, lessons: 100, price: "$119", registeredStudent: 19000 },
        { id: 85, title: "Building UI in Jetpack Compose", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 8000 },
        { id: 86, title: "SwiftUI Fundamentals", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 9000 },
        { id: 87, title: "Firebase for Mobile Apps", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 9500 },
        { id: 88, title: "Publishing Apps to App Stores", rate: 4.5, lessons: 50, price: "$79", registeredStudent: 7000 },
        { id: 89, title: "Mobile App Testing & Debugging", rate: 4.6, lessons: 70, price: "$89", registeredStudent: 8000 },
        { id: 90, title: "Cross-Platform Mobile Development", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 9500 },
        { id: 91, title: "Flutter + Firebase Fullstack", rate: 4.8, lessons: 90, price: "$119", registeredStudent: 12000 },
        { id: 92, title: "Advanced iOS Animations", rate: 4.6, lessons: 65, price: "$99", registeredStudent: 6700 },
        { id: 93, title: "Android Architecture Components", rate: 4.7, lessons: 80, price: "$109", registeredStudent: 8900 },
        { id: 94, title: "React Native with Expo", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 7400 },
        { id: 95, title: "Design Patterns for Mobile Devs", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 8300 },
        { id: 96, title: "Offline Mobile Apps", rate: 4.5, lessons: 50, price: "$79", registeredStudent: 5900 },
        { id: 97, title: "State Management in Flutter", rate: 4.7, lessons: 70, price: "$99", registeredStudent: 9100 },
        { id: 98, title: "Geolocation & Maps in Apps", rate: 4.6, lessons: 60, price: "$89", registeredStudent: 8200 },
        { id: 99, title: "Payment Integration in Apps", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 8700 },
        { id: 100, title: "Mobile App Performance Optimization", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 7500 }
    ],
    cloudComputing: [
        { id: 101, title: "AWS Certified Solutions Architect", rate: 4.8, lessons: 120, price: "$149", registeredStudent: 30000 },
        { id: 102, title: "Azure Fundamentals (AZ-900)", rate: 4.7, lessons: 90, price: "$119", registeredStudent: 19000 },
        { id: 103, title: "Google Cloud Associate Engineer", rate: 4.6, lessons: 95, price: "$129", registeredStudent: 17000 },
        { id: 104, title: "DevOps on AWS", rate: 4.7, lessons: 100, price: "$139", registeredStudent: 15000 },
        { id: 105, title: "Kubernetes on Google Cloud", rate: 4.8, lessons: 110, price: "$149", registeredStudent: 18000 },
        { id: 106, title: "Cloud Security Fundamentals", rate: 4.6, lessons: 80, price: "$109", registeredStudent: 13000 },
        { id: 107, title: "Terraform for Cloud Infrastructure", rate: 4.7, lessons: 85, price: "$119", registeredStudent: 14000 },
        { id: 108, title: "Serverless Apps with AWS Lambda", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 11000 },
        { id: 109, title: "Cloud Storage Solutions", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 9000 },
        { id: 110, title: "CI/CD Pipelines in the Cloud", rate: 4.7, lessons: 80, price: "$109", registeredStudent: 10000 },
        { id: 111, title: "Monitoring & Logging in AWS", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 9200 },
        { id: 112, title: "Multi-cloud Strategies", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 8000 },
        { id: 113, title: "Intro to Cloud Computing", rate: 4.4, lessons: 55, price: "$79", registeredStudent: 11000 },
        { id: 114, title: "Containers in the Cloud", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 9700 },
        { id: 115, title: "Cloud Cost Optimization", rate: 4.5, lessons: 50, price: "$79", registeredStudent: 8500 },
        { id: 116, title: "Cloud Networking Essentials", rate: 4.6, lessons: 65, price: "$89", registeredStudent: 9100 },
        { id: 117, title: "Edge Computing and IoT", rate: 4.5, lessons: 70, price: "$99", registeredStudent: 7600 },
        { id: 118, title: "Deploying ML Models to the Cloud", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 8600 },
        { id: 119, title: "Azure DevOps Projects", rate: 4.6, lessons: 80, price: "$109", registeredStudent: 8800 },
        { id: 120, title: "Cloud Architecture Patterns", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 9300 }
    ],
    gameDevelopment: [
        { id: 1, title: "Unity Game Development", rate: 4.7, lessons: 100, price: "$119", registeredStudent: 25000 },
        { id: 2, title: "Unreal Engine for Beginners", rate: 4.8, lessons: 110, price: "$129", registeredStudent: 21000 },
        { id: 3, title: "2D Game Development with Godot", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 12000 },
        { id: 4, title: "Game Physics in Unity", rate: 4.5, lessons: 70, price: "$89", registeredStudent: 9500 },
        { id: 5, title: "C# for Game Development", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 14000 },
        { id: 126, title: "Game Monetization Techniques", rate: 4.4, lessons: 60, price: "$79", registeredStudent: 7000 },
        { id: 127, title: "Multiplayer Games with Photon", rate: 4.6, lessons: 85, price: "$109", registeredStudent: 10000 },
        { id: 128, title: "AI in Game Design", rate: 4.7, lessons: 90, price: "$119", registeredStudent: 11000 },
        { id: 129, title: "Unreal Engine Blueprint Visual Scripting", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 8700 },
        { id: 130, title: "Mobile Game Development", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 13000 },
        { id: 131, title: "Game Asset Creation in Blender", rate: 4.7, lessons: 95, price: "$109", registeredStudent: 9000 },
        { id: 132, title: "VR Game Development", rate: 4.6, lessons: 90, price: "$129", registeredStudent: 8400 },
        { id: 133, title: "Creating Puzzle Games", rate: 4.4, lessons: 60, price: "$89", registeredStudent: 7200 },
        { id: 134, title: "Game UI Design Principles", rate: 4.5, lessons: 55, price: "$79", registeredStudent: 8100 },
        { id: 135, title: "Isometric Game Development", rate: 4.6, lessons: 70, price: "$89", registeredStudent: 7800 },
        { id: 136, title: "Character Animation for Games", rate: 4.7, lessons: 90, price: "$119", registeredStudent: 9600 },
        { id: 137, title: "Level Design Masterclass", rate: 4.6, lessons: 85, price: "$99", registeredStudent: 8800 },
        { id: 138, title: "Audio Design in Games", rate: 4.5, lessons: 60, price: "$79", registeredStudent: 6900 },
        { id: 139, title: "Game Development with JavaScript", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 10500 },
        { id: 140, title: "Publish Games to Steam", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 8200 }
    ],
    blockchainWeb3: [
        { id: 141, title: "Blockchain Basics", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 15000 },
        { id: 142, title: "Ethereum & Smart Contracts", rate: 4.8, lessons: 100, price: "$129", registeredStudent: 17000 },
        { id: 143, title: "Solidity for Beginners", rate: 4.7, lessons: 90, price: "$109", registeredStudent: 14000 },
        { id: 144, title: "Build DApps with Web3.js", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 12000 },
        { id: 145, title: "NFT Development", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 13000 },
        { id: 146, title: "Hyperledger Fabric for Enterprises", rate: 4.6, lessons: 85, price: "$119", registeredStudent: 9000 },
        { id: 147, title: "Polygon for Scalable DApps", rate: 4.5, lessons: 70, price: "$99", registeredStudent: 8200 },
        { id: 148, title: "Crypto Wallet Development", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 7500 },
        { id: 149, title: "Intro to DAOs", rate: 4.4, lessons: 55, price: "$79", registeredStudent: 6000 },
        { id: 150, title: "Blockchain Security", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 10000 },
        { id: 151, title: "IPFS & Decentralized Storage", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 6700 },
        { id: 152, title: "Web3 Identity and Authentication", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 7300 },
        { id: 153, title: "Defi Protocols Explained", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 9100 },
        { id: 154, title: "Chainlink Oracle Integration", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 8000 },
        { id: 155, title: "Solana Development Basics", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 7700 },
        { id: 156, title: "Rust for Blockchain Devs", rate: 4.6, lessons: 90, price: "$119", registeredStudent: 6800 },
        { id: 157, title: "Smart Contract Auditing", rate: 4.7, lessons: 95, price: "$129", registeredStudent: 8200 },
        { id: 158, title: "Zero-Knowledge Proofs 101", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 5800 },
        { id: 159, title: "Developing Cross-chain Apps", rate: 4.6, lessons: 80, price: "$109", registeredStudent: 7200 },
        { id: 160, title: "Intro to Web3 Design Patterns", rate: 4.4, lessons: 50, price: "$79", registeredStudent: 6500 }
    ],
    uiuxDesign: [
        { id: 1, title: "UI/UX Design for Beginners", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 16000 },
        { id: 2, title: "Figma UI Design Masterclass", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 14000 },
        { id: 3, title: "UX Research Methods", rate: 4.6, lessons: 80, price: "$99", registeredStudent: 11000 },
        { id: 4, title: "Wireframing with Adobe XD", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 9000 },
        { id: 5, title: "Responsive Design Principles", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 9500 },
        { id: 6, title: "Prototyping in Figma", rate: 4.7, lessons: 80, price: "$109", registeredStudent: 10000 },
        { id: 7, title: "Color Theory for UI Designers", rate: 4.5, lessons: 55, price: "$79", registeredStudent: 8700 },
        { id: 8, title: "Typography in Web Design", rate: 4.4, lessons: 50, price: "$79", registeredStudent: 7600 },
        { id: 9, title: "Design Systems & Style Guides", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 9400 },
        { id: 10, title: "User-Centered Design Thinking", rate: 4.7, lessons: 90, price: "$119", registeredStudent: 12000 },
        { id: 11, title: "Accessibility in UI/UX", rate: 4.6, lessons: 60, price: "$89", registeredStudent: 8200 },
        { id: 12, title: "Mobile UX Best Practices", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 8500 },
        { id: 13, title: "UX Writing Fundamentals", rate: 4.5, lessons: 55, price: "$79", registeredStudent: 7000 },
        { id: 14, title: "Design Critique & Feedback", rate: 4.4, lessons: 50, price: "$79", registeredStudent: 6000 },
        { id: 15, title: "Advanced Figma Techniques", rate: 4.7, lessons: 85, price: "$109", registeredStudent: 8700 },
        { id: 16, title: "Building Portfolios for Designers", rate: 4.5, lessons: 65, price: "$89", registeredStudent: 9300 },
        { id: 17, title: "UI Animation with Principle", rate: 4.6, lessons: 70, price: "$99", registeredStudent: 7800 },
        { id: 18, title: "Journey Mapping & Personas", rate: 4.6, lessons: 75, price: "$99", registeredStudent: 8800 },
        { id: 19, title: "Freelancing as a UI/UX Designer", rate: 4.5, lessons: 60, price: "$89", registeredStudent: 9200 },
        { id: 20, title: "UI Trends & Visual Design", rate: 4.4, lessons: 55, price: "$79", registeredStudent: 7100 }
    ]
}


const PopularCourses = () => {
    const [dataDisplay, setDataDisplay] = useState(data.webDevelopment)
    const [active, setActive] = useState("webDevelopment")

    const activeStyle = "border-1 border-transparent"
    const notActiveStyle = "courseOpt bg-white py-0 text-blue-500 border-1 border-gray-200"
    return (
        <div className={"w-full pt-20 "}>
            <Headers title={"Find your perfect program"} heading={"Popular Courses"} />

            <div className={"w-full"}>
                <div className={"courseOptions w-full overflow-x-scroll flex gap-2 py-2"}>
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
                    <AppButton title={"cyber-Security"}
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
                    <AppButton title={"Mobile Development"}
                               onClick={()=> {
                                   setDataDisplay(data.mobileDevelopment)
                                   setActive("mobileDevelopment")
                               }}
                               className={active === "mobileDevelopment" ? active : notActiveStyle}
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
                    <AppButton title={"Game Development"}
                               onClick={()=> {
                                   setDataDisplay(data.gameDevelopment)
                                   setActive("gameDevelopment")
                               }}
                               className={active === "gameDevelopment" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"Blockchain Web3"}
                               onClick={()=> {
                                   setDataDisplay(data.blockchainWeb3)
                                   setActive("blockchainWeb3")
                               }}
                               className={active === "blockchainWeb3" ? active : notActiveStyle}
                               showIcon={false}
                    />
                    <AppButton title={"UX/UI Design"}
                               onClick={()=> {
                                   setDataDisplay(data.uiuxDesign)
                                   setActive("uiuxDesign")
                               }}
                               className={active === "uiuxDesign" ? active : notActiveStyle}
                               showIcon={false}
                    />
                </div>

                <div className={"courseDisplay mt-2 w-full h-200 overflow-y-scroll grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 py-7 px-3"}>
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