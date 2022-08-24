import {Routes,Route} from "react-router-dom"
import Homepage from "./Homepage"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    )
}