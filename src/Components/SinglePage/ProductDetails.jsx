import { Image, Select, Text } from "@chakra-ui/react";
// import { useState } from "react";
import ReactStars from "react-rating-stars-component";
// import { addtobag } from "../../api/api";
import "../../styles/SingleProductPage.css";
import Product_Images from "./ProductImages";

export default function Product_Details({
  name,
  minprice,
  off,
  maxprice,
  review,
  media,
  head,
//   addtobag
}) 

{
  console.log([name,
    minprice,
    off,
    maxprice,
    review,
    media,
    head])
    // const [datas, setDatas] = useState({
    //     minprice: minprice,
    //     off: off,
    //     maxprice: maxprice,
    //     review: review,
    //     media: media,
    //     head: head,
    //     name: name,
    //   });
    //   function handleSubmit() {
    //     addtobag(datas);
    //   }

  console.log(typeof review);
  return (
    <div className="Product-Details-inner-div">
      <div className="image-div">
        <Product_Images media={media} />
      </div>
      <div className="details-div" style={{ textAlign: "left" }}>
        <p className="sproduct-name">{name}</p>
        <p className="sproduct-head">{head}</p>
        <p className="sproduct-new-price">
          ${minprice}
          <span className="sproduct-off-percent">
            {"  ("}
            {off}
            {"% off)"}
          </span>
        </p>
        <p className="sproduct-original-price">${maxprice}</p>
        <ReactStars
          {...{
            size: 25,
            activeColor: "#00819d",
            isHalf: true,
            value: Math.random() * 4 + 0.5,
            edit: false,
          }}
        />
        <br />
        <div>
          <Image
            width={"80%"}
            src="https://drive.google.com/uc?export=view&id=17Xh50qS622QMqYBuR3JPdxb_YEgRi7K_"
            alt="https://drive.google.com/uc?export=view&id=17Xh50qS622QMqYBuR3JPdxb_YEgRi7K_"
          />
          {/* https://drive.google.com/file/d/17Xh50qS622QMqYBuR3JPdxb_YEgRi7K_/view?usp=sharing */}
        </div>

        <br />
        <br />

        <div>
          <Select width={"90%"} variant="outline" placeholder="Size">
            <option value="xsmall">
              <Text>X-Small</Text>
            </option>
            <option value="small">
              <Text>Small</Text>
            </option>
            <option value="medium">
              <Text>Medium</Text>
            </option>
            <option value="large">
              <Text>Large</Text>
            </option>
          </Select>
        </div>

        <br />
        <br />
        <button className="addtobagbtn">
          Add to Bag
        </button>
      </div>
    </div>
  );
}
