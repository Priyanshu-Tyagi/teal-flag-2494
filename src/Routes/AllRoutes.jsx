import {Routes,Route} from "react-router-dom"
import AddToBag from "./AddToBag"
import Homepage from "./Homepage"
import WomenPage from "./WomenPage"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/women" element={<WomenPage/>} />
            <Route path="/bag" element={<AddToBag />} />
        </Routes>
    )
}