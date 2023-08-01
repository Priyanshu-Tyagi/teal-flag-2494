// import { Grid, GridItem } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { getAllActivewear } from "../../../api/api";
// import Pagination from "../../common/Pagination";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";

// export default function AllActivewear({ color, order }) {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     getAllActivewear({
//       page: page,
//       limit: 16,
//       q: color,
//       sort: "units",
//       order: order,
//     }).then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   }, [page, color, order]);

//   // let media=[];

//   // data.map((item)=>{
//   //     for(let key in item.mediaById){
//   //         media.push(item.mediaById[key]);
//   //     }
//   // })
//   // setTimeout(()=>{console.log(media)},3000)

//   // console.log(data[0].mediaById)
//   // console.log(data[0].mediaById[Object.keys(data[0].mediaById)[0]].src)
//   // Object.keys(data[0].mediaById).forEach((key,index)=>{console.log(data[0].mediaById[key].src)})

// if (!data || Object.keys(data).length === 0) {
//     return <div>Loading...</div>;
//   } {
//   return (
//     <div className="inside-tab-main-div">
//       <Grid templateColumns="repeat(4, 1fr)" gap={"3.5rem"}>
//         {data.map((i) => (
//           <Link to={`/women/${i.id}`}>
//             <GridItem key={i.id}>
//               <div>
//                 <div>
//                   <img
//                     style={{ height:'350px'}}
//                     src={i.mediaById[0]}
//                     alt={i.mediaById[0]}
//                   />
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <h2 className="product-head">{i.brandName}</h2>
//                   <p className="product-name">{i.name}</p>
//                   <p className="product-new-price">
//                     ${((1-(Number(i.pricesById.maxItemPercentOff)/100))*i.pricesById.maxItemPercentOff).toFixed(2)}
//                     <span className="product-off-percent">
//                       {"  ("}
//                       {i.pricesById.maxItemPercentOff}
//                       {"% off)"}
//                     </span>
//                   </p>
//                   <p className="product-original-price">
//                     ${i.pricesById.maxItemPrice}
//                   </p>
//                   <ReactStars
//                     {...{ size: 25, activeColor: "#00819d", isHalf: true, value: i.reviewStarRating, edit: false }}
//                   />
//                 </div>
//               </div>
//             </GridItem>
//           </Link>
//         ))}
//       </Grid>
//       <br />
//       <Pagination current={page} onChange={(a) => setPage(a)} length="3" />
//     </div>
//   );
// }
// }