import React from "react";
import { Link} from "react-router"
import ECoach from "./pages/ECoach";

const App = () => {
    return (
        <div className={"p-4"}>
            <button className={"p-3 border-1 rounded-md border-blue-200 bg-gray-100 text-xl font-semibold cursor-pointer text-blue-800"}>
                <Link to={"/eCoach"}>
                    eCoach
                </Link>
            </button>

        </div>
    )
}

export default App