import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewDiv from "../Components/checkout/ReviewContainer";
import Navbar2 from "../Components/common/Navbar/NavbarLite";
import "../styles/Chekout.css";

export default function CheckOut() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://630489f8761a3bce77e9dd0f.mockapi.io/bag`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="checkout-main-div">
      <Navbar2 />
      {/* <br /><br /> */}
      <div className="partition-container">
        <div className="other-part-container">
          <div style={{ backgroundColor: "white" }}>
            <Text paddingLeft={"1rem"} className="Checkout-head">
              Checkout
            </Text>
            <Text paddingLeft={"1rem"} className="Checkout-blue-text">
              Edit Shopping Bag
            </Text>
            <Text paddingLeft={"1rem"} className="Checkout-sub-head">
              Pickup or delivery
            </Text>
            <img
              width="100%"
              src="https://drive.google.com/uc?export=view&id=1SAw6ulQJVhPK9oLxJ6s0H371p69M1FF0"
              alt="1SAw6ulQJVhPK9oLxJ6s0H371p69M1FF0"
            />
            {/* https://drive.google.com/file/d/1SAw6ulQJVhPK9oLxJ6s0H371p69M1FF0/view?usp=sharing */}
            <div style={{display:"flex",marginLeft:"3rem",marginBottom:"3rem",marginTop:"1rem"}}>
              {data.map((i) => (
                <img width={"9%"} src={i.media} alt={i.media} />
              ))}
            </div>
          </div>
          <div>
            <img
              width="100%"
              src="https://drive.google.com/uc?export=view&id=1W-HvvflMQ8_3X_bsAPSSOvypq5nlczY8"
              alt="1W-HvvflMQ8_3X_bsAPSSOvypq5nlczY8"
            />
            {/* https://drive.google.com/file/d/1W-HvvflMQ8_3X_bsAPSSOvypq5nlczY8/view?usp=sharing */}
          </div>
          <div>
            <img
              width="100%"
              src="https://drive.google.com/uc?export=view&id=1-H_UL4NlWSCMDLWIy3vp8fGx8XYM0TGd"
              alt="1-H_UL4NlWSCMDLWIy3vp8fGx8XYM0TGd"
            />
            {/* https://drive.google.com/file/d/1-H_UL4NlWSCMDLWIy3vp8fGx8XYM0TGd/view?usp=sharing */}
          </div>
          <div>
            <img
              width="100%"
              src="https://drive.google.com/uc?export=view&id=1Zwo7MwFnIlmo4gYIOTBmNSLtWVMfQSwR"
              alt="1Zwo7MwFnIlmo4gYIOTBmNSLtWVMfQSwR"
            />
            {/* https://drive.google.com/file/d/1Zwo7MwFnIlmo4gYIOTBmNSLtWVMfQSwR/view?usp=sharing */}
          </div>
          <div>
            <img
              width="100%"
              src="https://drive.google.com/uc?export=view&id=12inL19uylyNhfJiZov2tDQzkGNCYoZdK"
              alt="12inL19uylyNhfJiZov2tDQzkGNCYoZdK"
            />
            {/* https://drive.google.com/file/d/12inL19uylyNhfJiZov2tDQzkGNCYoZdK/view?usp=sharing */}
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div style={{ width: "60%", paddingLeft: "1rem" }}>
              <ReviewDiv />
            </div>
          </div>
        </div>
        <div className="review-part-container">
          <ReviewDiv />
        </div>
      </div>
    </div>
  );
}
