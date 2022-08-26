import { Text } from "@chakra-ui/react";
import "../../styles/WomenPage.css";
import AllTabs from "./AllTabs";
import WorkingOut from "./WorkingOut";

export default function AllWomenProducts({color,order}) {
  return (
    <div>
      <br />
      <br />
      <div>
        <Text fontSize="1.5rem" fontWeight="800" color="#494949">
          For Working Out (and Chilling Out).
        </Text>
      </div>
      <br />
      <br />
      <WorkingOut />
      <br />
      <br />
      <div>
        <div>
          <Text
            fontSize="1.5rem"
            fontWeight="800"
            color="#494949"
            padding={"0"}
            justifyContent="left"
            textAlign={"left"}
            width="auto"
            ml=".5rem"
          >
            Activewear & Workout Clothes for Women
          </Text>
        </div>
        <AllTabs color={color} order={order} />
      </div>
    </div>
  );
}
