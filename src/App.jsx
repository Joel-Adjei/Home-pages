import React from "react";
import { Link} from "react-router"
import ECoach from "./pages/ECoach";

const App = () => {
    return (
        <div>
            <button>
                <Link to={"/eCoach"}>
                    eCoach
                </Link>
            </button>

        </div>
    )
}

export default App