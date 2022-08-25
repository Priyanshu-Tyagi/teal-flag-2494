import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getJackets } from "../../../api/api";
import Pagination from "../../common/Pagination";

export default function Jackets({color,order}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getJackets({
      page: page,
      limit: 16,
      q:color,
      sort:'units',
      order:order
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [page,order,color]);

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
              <div>
                <h2>{i.brandName}</h2>
                <p>{i.name}</p>
                <p>
                  {i.price.totalPriceRange.max.units}.
                  {i.price.totalPriceRange.max.nanos == 0 ? "00" : "97"}
                  <span>
                    {"  ("}
                    {i.price.totalPercentOffRange.max}
                    {"% off)"}
                  </span>
                </p>
                <p>
                  $ {i.price.regular.priceRange.max.units}.
                  {i.price.regular.priceRange.max.nanos == 0 ? "00" : "97"}
                </p>
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
