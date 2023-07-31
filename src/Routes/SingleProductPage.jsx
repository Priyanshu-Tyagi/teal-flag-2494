import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addtobag } from "../api/api";
import Footer from "../Components/common/Footer/Footer";
import Navbar from "../Components/common/Navbar/Navbar";
import { ExclusiveOffer } from "../Components/Homepage/Banner";
import Product_Details from "../Components/SinglePage/ProductDetails";

export default function Single_Product_Page() {
  const [data,setData] = useState({});
  const param = useParams();
   useEffect(() => {
    axios
      .get(
        `https://western-topaz-plutonium.glitch.me/all/${param.id}`
      )
      .then((res) => {
        console.log("check this ",res.data);
        setData(res.data);
      });
  }, []);


    console.log(data)


  return (
    <>
      <Navbar />
      <div className="Product-Details-div">
        <br />
        <br />
        <div>
          <Product_Details
          data={data}
          />
        </div>
        <br /><br />
        <div>
            <img src="https://drive.google.com/uc?export=view&id=1E5AcZ9npcJT_nAr4J3Ygl9QqQBQPN1CF" alt="1E5AcZ9npcJT_nAr4J3Ygl9QqQBQPN1CF" />
            {/* https://drive.google.com/file/d/1E5AcZ9npcJT_nAr4J3Ygl9QqQBQPN1CF/view?usp=sharing */}
        </div>
        <br />
        <br />
        <ExclusiveOffer />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
