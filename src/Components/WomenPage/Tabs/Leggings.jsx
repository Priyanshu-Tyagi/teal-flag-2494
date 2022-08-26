import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { getLeggings } from "../../../api/api";
import Pagination from "../../common/Pagination";

export default function Leggings({color,order}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLeggings({
      page: page,
      limit: 16,
      q:color,
      sort:'units',
      order:order
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [page,color,order]);

  // let media=[];

  // data.map((item)=>{
  //     for(let key in item.mediaById){
  //         media.push(item.mediaById[key]);
  //     }
  // })
  // setTimeout(()=>{console.log(media)},3000)

  // console.log(data[0].mediaById)
  // console.log(data[0].mediaById[Object.keys(data[0].mediaById)[0]].src)
  // Object.keys(data[0].mediaById).forEach((key,index)=>{console.log(data[0].mediaById[key].src)})

  return (
    <div className="inside-tab-main-div">
      <Grid templateColumns="repeat(4, 1fr)" gap={"3.5rem"}>
      {data.map((i) => (
          <GridItem key={i.id}>
            <div>
              <div>
                <img
                  src={i.mediaById[Object.keys(i.mediaById)[0]].src}
                  alt={i.mediaById[Object.keys(i.mediaById)[0]].id}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <h2 className="product-head">{i.brandName}</h2>
                <p className="product-name">{i.name}</p>
                <p className="product-new-price">
                  ${i.price.totalPriceRange.max.units}.
                  {i.price.totalPriceRange.max.nanos == 0 ? "00" : "97"}
                  <span className="product-off-percent">
                    {"  ("}
                    {i.price.totalPercentOffRange.max}
                    {"% off)"}
                  </span>
                </p>
                <p className="product-original-price">
                  ${i.price.regular.priceRange.max.units}.
                  {i.price.regular.priceRange.max.nanos == 0 ? "00" : "97"}
                </p>
                <ReactStars
                  {...{ size: 25, activeColor: "#00819d", isHalf: true, value: i.reviewStarRating, edit: false }}
                />
              </div>
            </div>
          </GridItem>
        ))}
      </Grid>
      <br />
      <Pagination current={page} onChange={(a) => setPage(a)} length="3" />
    </div>
  );
}
