import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ReviewDiv() {
  return (
    <div style={{ backgroundColor:"white",padding:"1rem",color:"#494949" }}>
        <Text color="#494949" fontSize="1.5rem" textAlign="left">Review order</Text>
      <div
        style={{
          borderBottom: "1px solid #95a2a5",
          marginBottom: ".6rem",
          marginTop:".8rem"
        }}
      >
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".5rem",
          }}
        >
          <Text fontSize={"1.1rem"}>Your items</Text>
          <Text fontSize={"1.1rem"}>$66.91</Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".5rem",
          }}
        >
          <Text fontSize={".9rem"}>Shipping</Text>
          <Text fontSize={".9rem"}>$6.69</Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: ".5rem",
          }}
        >
          <Text fontSize={".9rem"}>Estimated tax</Text>
          <Text fontSize={".9rem"}>$8.03</Text>
        </div>
        <br />
      </div>
      <br />
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text fontSize={"1.2rem"}>Estimated total</Text>
          <Text fontSize={"1.2rem"}>$81.63</Text>
        </div>

        <div>
          <Link to={"/"}>
            <Button
              onClick={()=>alert("Order Placed Successfully")}
              width="100%"
            //   color="white"
              py={"1.5rem"}
              marginTop="1rem"
              backgroundColor={"#2c2e2f"}
              borderRadius={"0"}
              _hover={{
                backgroundColor: "#4d5052",
                // color: "#00819d",
                border: "2px solid #2c2e2f",
              }}
            >
              <img src="https://drive.google.com/uc?export=view&id=1PlYyNqyXre0kYUDQkRGPzJL_B2rkwQae" alt="1PlYyNqyXre0kYUDQkRGPzJL_B2rkwQae" />
              {/* https://drive.google.com/file/d/1PlYyNqyXre0kYUDQkRGPzJL_B2rkwQae/view?usp=sharing */}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
