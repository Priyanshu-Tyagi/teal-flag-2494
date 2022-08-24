import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import { ExclusiveOffer, NewMarkdown } from "../Components/Homepage/Banner";
import { ActiveStyle, BannerCarousel, Carousel1, Carousel2, CarouselBBBP, MoreToKnow, MustHave } from "../Components/Homepage/Carousel";
import { Text } from "@chakra-ui/react";



export default function Homepage(){
    return (
        <div>
            <Navbar />
            <br/>
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
            <div>
                <Text fontSize="3xl" fontWeight="800" color="#393939">
                Active Styles for Every Day
                </Text>
            </div>
            <br/>
            <br/>
            <ActiveStyle />
            <br/>
            <br/>
            <BannerCarousel />
            <br/>
            <br/>
            <div>
                <Text fontSize="3xl" fontWeight="800" color="#393939">
                All the Must-Haves—All at Amazing Prices
                </Text>
            </div>
            <br/>
            <br/>
            <MustHave />
            <br/>
            <br/>
            <div>
                <Text fontSize="3xl" fontWeight="800" color="#393939">
                More to Know
                </Text>
            </div>
            <br/>
            <br/>
            <MoreToKnow />
            <br/>
            <br/>
            <ExclusiveOffer />
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}