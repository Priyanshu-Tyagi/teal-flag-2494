import { Image, Select, Text } from "@chakra-ui/react";
// import { useState } from "react";
import ReactStars from "react-rating-stars-component";
// import { addtobag } from "../../api/api";
import "../../styles/SingleProductPage.css";
import Product_Images from "./ProductImages";


export default function Product_Details({ data }) {
  console.log("prev-single", data)

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  } {
    return (

      <div className="Product-Details-inner-div">
        <div className="image-div">
          <Product_Images media={data.mediaById} />
        </div>
        <div className="details-div" style={{ textAlign: "left" }}>
          <p className="sproduct-name">{data.name}</p>
          <p className="sproduct-head">{data.brandName}</p>
          <p className="sproduct-new-price">
            ${(data.pricesById.maxItemPrice - ((Number(data.pricesById.maxItemPercentOff) / 100) * data.pricesById.maxItemPrice)).toFixed(2)}
            <span className="sproduct-off-percent">
              {"  ("}
              {data.pricesById.maxItemPercentOff}
              {"% off)"}
            </span>
          </p>
          <p className="sproduct-original-price">${data.pricesById.maxItemPrice}</p>
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
}