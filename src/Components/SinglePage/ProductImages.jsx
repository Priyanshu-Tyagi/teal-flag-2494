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


  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current, // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: '../../../public/loader.json' // the path to the animation json

  //   })
  // }, [])


  if (!media || Object.keys(media).length === 0) {
    // return <div>Loading...</div>;
    return (
      <></>
        // <Lottie animationData={loaderAnimation} loop={true}></Lottie>
      )
  }

  return (
    <Grid templateColumns="repeat(3,1fr)" gap={"2rem"} padding={"1rem"}>
      {media.map((i) => (
        <GridItem key={i}><img src={i} alt={i} /></GridItem>
      ))}
    </Grid>
  );
}
