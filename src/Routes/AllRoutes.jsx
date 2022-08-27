import {Routes,Route} from "react-router-dom"
import AddToBag from "./AddToBag"
import CheckOut from "./CheckOut"
import Homepage from "./Homepage"
import PrivateRoute from "./PrivateRoute"
import SignIn from "./SignIn"
import Single_Product_Page from "./SingleProductPage"
import WomenPage from "./WomenPage"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/women" element={<WomenPage/>} />
            <Route path="/bag" element={<AddToBag />} />
            <Route path="/women/:id" element={<Single_Product_Page />} />
            <Route path="/checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    )
}