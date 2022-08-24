import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import { NewMarkdown } from "../Components/Homepage/Banner";
import { Carousel1, Carousel2, CarouselBBBP } from "../Components/Homepage/Carousel";
import { Text } from "@chakra-ui/react";


export default function Homepage(){
    return (
        <div>
            <Navbar />
            <NewMarkdown/>
            <br/>
            <br/>
            <Carousel1 />
            <br/>
            <br/>
            <div>
                <Text fontSize="3xl" fontWeight="800" color="#393939">
                Here Today, Gone in a Flash
                </Text>
            </div>
            <br/>
            <br/>
            <CarouselBBBP />
            <br/>
            <br/>
            <Carousel2 />
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}