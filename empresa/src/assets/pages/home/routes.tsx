import { createBrowserRouter } from "react-router-dom";

import { Home } from "./home/index.tsx";
import { Sobre } from "./sobre/index.tsx";

const router = createBrowserRouter ({
    (

        poth:"/home",
        element: <home/>
    )
    (
        path : "/sobre",
        element: <sobre/>
    )

})