import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container, Stack, Text } from "@chakra-ui/react";
import { BBrandBPrice, Carousel1data, Carousel2data } from "./CarouselData";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Button color="black"> {" > "} </Button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{color:"black"}} onClick={onClick}>
        <Button color="black">{" < "}</Button>
      </div>
    );
  }

//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,



export class Carousel1 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight:true,
      speed: 1500,
      autoplaySpeed: 4000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="carouseldiv">
        <Slider {...settings}>
          {Carousel1data.map((i) => (
            <div key={i.id}>
              <div>
                <img className="carouselimg" src={i.img} alt={i.head} />
              </div>
              <div style={{ width: "38%" }}>
                <Stack>
                  <Text
                    padding={"0"}
                    justifyContent="left"
                    textAlign={"left"}
                    fontSize="2xl"
                    width="auto"
                    fontWeight="800"
                    ml=".5rem"
                    color="gray.600"
                  >
                    {i.head}
                  </Text>
                  <Text
                    padding={".5rem"}
                    justifyContent="left"
                    textAlign={"left"}
                    fontSize="l"
                    width="auto"
                    color="gray.500"
                  >
                    {i.desc}
                  </Text>
                  <div style={{ display: "flex" }}>
                    {i.undert.map((j) => (
                      <Text
                        width="auto"
                        ml=".5rem"
                        color="#00819d"
                        textDecorationLine="underline"
                        textDecorationThickness="2px"
                        _hover={{ textDecorationThickness: "3px" }}
                      >
                        {j}
                      </Text>
                    ))}
                  </div>
                </Stack>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export class Carousel2 extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight:true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
      return (
        <div className="carouseldiv">
          <Slider {...settings}>
            {Carousel2data.map((i) => (
              <div key={i.id}>
                <div>
                  <img className="carouselimg" src={i.img} alt={i.head} />
                </div>
                <div style={{ width: "38%" }}>
                  <Stack>
                    <Text
                      padding={"0"}
                      justifyContent="left"
                      textAlign={"left"}
                      fontSize="2xl"
                      width="auto"
                      fontWeight="800"
                      ml=".5rem"
                      color="gray.600"
                    >
                      {i.head}
                    </Text>
                    <Text
                      padding={".5rem"}
                      justifyContent="left"
                      textAlign={"left"}
                      fontSize="l"
                      width="auto"
                      color="gray.500"
                    >
                      {i.desc}
                    </Text>
                    <div style={{ display: "flex" }}>
                      {i.undert.map((j) => (
                        <Text
                          width="auto"
                          ml=".5rem"
                          color="#00819d"
                          textDecorationLine="underline"
                          textDecorationThickness="2px"
                          _hover={{ textDecorationThickness: "3px" }}
                        >
                          {j}
                        </Text>
                      ))}
                    </div>
                  </Stack>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }

export class CarouselBBBP extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: false,
      speed: 1500,
      adaptiveHeight:true,
      autoplaySpeed: 4000,
      cssEase: "linear",
        nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="carouseldiv">
        <Slider {...settings}>
          {BBrandBPrice.map((i) => (
            <div key={i}>
              <img src={i} alt={i} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
