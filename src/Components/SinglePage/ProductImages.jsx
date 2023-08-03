import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function Product_Images({ media }) {
  // console.log(media);
  // let imgarr = [];
  // Object.keys(media).forEach((key, index) => {
  //   if (media[key].group !== "alt") {
  //     imgarr.push(media[key].src);
  //   }
  // });
  // let finalimgarr=[];
  // if(imgarr.length>6){for(let i=0;i<6;i++){finalimgarr.push(imgarr[i])}}else{for(let i=0;i<imgarr.length;i++){finalimgarr.push(imgarr[i])}} 
  // // console.log(imgarr);

  return (
    <Grid templateColumns="repeat(3,1fr)" gap={"2rem"} padding={"1rem"}>
      {media.map((i) => (
        <GridItem key={i}><img src={i} alt={i} /></GridItem>
      ))}
    </Grid>
  );
}
