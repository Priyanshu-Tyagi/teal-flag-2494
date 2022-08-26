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
  const [media, setMedia] = useState({});
  const [name, setName] = useState("");
  const [mprice, setMPrice] = useState("");
  const [off, setOff] = useState("");
  const [mxprice, setMxPrice] = useState("");
  const [head, setHead] = useState("");
  const [review, setReview] = useState();
  const param = useParams();
  useEffect(() => {
    axios
      .get(
        `https://nordstromrackproject.herokuapp.com/allactivewear/${param.id}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setName(res.data.name);
        setMPrice(res.data.pricesById.regular.minItemPrice);
        setOff(res.data.pricesById.regular.minItemPercentOff);
        setMxPrice(res.data.pricesById.compareat.maxItemPrice);
        setReview(res.data.reviewStarRating);
        setMedia(res.data.mediaById);
        setHead(res.data.brandName);
      });
  }, []);

  
    

  //   console.log(data.id)
  // console.log(media)
  return (
    <>
      <Navbar />
      <div className="Product-Details-div">
        <br />
        <br />
        <div>
          <Product_Details
          data={data}
            head={head}
            media={media}
            name={name}
            minprice={mprice}
            off={off}
            maxprice={mxprice}
            review={review}
            // addtobag={handleSubmit}
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
