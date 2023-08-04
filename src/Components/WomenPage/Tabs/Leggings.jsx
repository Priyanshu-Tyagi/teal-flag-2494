import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { getLeggings } from "../../../api/api";
import Pagination from "../../common/Pagination";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../../../json/loader.json"

export default function Leggings({ color, order }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLeggings({
      page: page,
      limit: 16,
      q: color,
      sort: 'units',
      order: order
    }).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, [page, color, order]);

  // let media=[];

  // data.map((item)=>{
  //     for(let key in item.mediaById){
  //         media.push(item.mediaById[key]);
  //     }
  // })
  // setTimeout(()=>{// console.log(media)},3000)

  // // console.log(data[0].mediaById)
  // // console.log(data[0].mediaById[Object.keys(data[0].mediaById)[0]].src)
  // Object.keys(data[0].mediaById).forEach((key,index)=>{// console.log(data[0].mediaById[key].src)})

  const style = {
    width: "300px",
    height: "300px",
  }

  if (!data || Object.keys(data).length === 0) {
    // return <div>Loading...</div>;
    setTimeout(() => {
      return (
        <div style={{ zIndex: "10", marginLeft: "40%" }}>
          <Lottie style={style} animationData={loaderAnimation} loop={true}></Lottie>
        </div>
      )
    }, 2000)
  }
  return (
    <div className="inside-tab-main-div">
      <Grid templateColumns="repeat(4, 1fr)" gap={"3.5rem"}>
        {data.map((i) => (
          <Link to={`/women/${i.id}`}>
            <GridItem key={i.id}>
              <div>
                <div>
                  <img
                    height={'200px'}
                    src={i.mediaById[0]}
                    alt={i.mediaById[0]}
                  />
                </div>
                <div style={{ textAlign: "left" }}>
                  <h2 className="product-head">{i.brandName}</h2>
                  <p className="product-name">{i.name}</p>
                  <p className="product-new-price">
                    ${(i.pricesById.maxItemPrice - ((Number(i.pricesById.maxItemPercentOff) / 100) * i.pricesById.maxItemPrice)).toFixed(2)}
                    <span className="product-off-percent">
                      {"  ("}
                      {i.pricesById.maxItemPercentOff}
                      {"% off)"}
                    </span>
                  </p>
                  <p className="product-original-price">
                    ${i.pricesById.maxItemPrice}
                  </p>
                  <ReactStars
                    {...{ size: 25, activeColor: "#00819d", isHalf: true, value: i.reviewStarRating, edit: false }}
                  />
                </div>
              </div>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <br />
      <Pagination current={page} onChange={(a) => setPage(a)} length="3" />
    </div>
  );
}
