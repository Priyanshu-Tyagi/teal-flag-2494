import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/common/Footer/Footer";
import Navbar from "../Components/common/Navbar/Navbar";
import { ExclusiveOffer } from "../Components/Homepage/Banner";
import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AddToBag() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://630489f8761a3bce77e9dd0f.mockapi.io/bag`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <br />
      <br />
      <div style={{ width: "78%", margin: "auto" }}>
        <div>
          <img
            src="https://drive.google.com/uc?export=view&id=1b0KMSKIF0ShM0HWF6ubL3nGRQP9XYt8w"
            alt="1b0KMSKIF0ShM0HWF6ubL3nGRQP9XYt8w"
          />
          {/* https://drive.google.com/file/d/1b0KMSKIF0ShM0HWF6ubL3nGRQP9XYt8w/view?usp=sharing */}
        </div>
        <div>
          <img
            src="https://drive.google.com/uc?export=view&id=1hxbGiRfFEv4iBDg-tGJI_dopZORR2JcX"
            alt="1hxbGiRfFEv4iBDg-tGJI_dopZORR2JcX"
          />
          {/* https://drive.google.com/file/d/1hxbGiRfFEv4iBDg-tGJI_dopZORR2JcX/view?usp=sharing */}
        </div>
        <br />
      </div>
      <br />
      <br />
      <div style={{ width: "78%", margin: "auto" }}>
        {data.map((i) => (
          <>
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                borderBottom: "1px solid #95a2a5",
              }}
            >
              <div>
                <img width={"50%"} src={i.media} alt={i.media} />
              </div>
              <div style={{ marginLeft: "-2rem" }}>
                <Text color={"#494949"} fontSize={".9rem"} textAlign={"left"}>
                  {i.head}
                </Text>
                <Text color={"#494949"} fontSize={".9rem"} textAlign={"left"}>
                  {i.name}
                </Text>
                <Text color={"#494949"} fontSize={".9rem"} textAlign={"left"}>
                  Item: {Math.ceil(Math.random() * 1000000)}
                </Text>
                <br />
                <img
                  src="https://drive.google.com/uc?export=view&id=1Wlkigj7Q5ztLDdtudNdJN-I4T_hmM_aN"
                  alt="1Wlkigj7Q5ztLDdtudNdJN-I4T_hmM_aN"
                />
                {/* https://drive.google.com/file/d/1Wlkigj7Q5ztLDdtudNdJN-I4T_hmM_aN/view?usp=sharing */}
                <div style={{ display: "flex" }}>
                  <Text
                    color={"#00819d"}
                    marginLeft={"1rem"}
                    marginRight={"3rem"}
                    _hover={{ color: "#07b5db", cursor: "pointer" }}
                  >
                    Remove
                  </Text>
                  <Text
                    color={"#00819d"}
                    _hover={{ color: "#07b5db", cursor: "pointer" }}
                  >
                    Save for later
                  </Text>
                </div>
              </div>
              <div style={{ paddingLeft: "7rem" }}>
                <img
                  src="https://drive.google.com/uc?export=view&id=1jRD4a6qedMXdYWKC_D8Rnua9WCf3qLKO"
                  alt="1jRD4a6qedMXdYWKC_D8Rnua9WCf3qLKO"
                />
                {/* https://drive.google.com/file/d/1jRD4a6qedMXdYWKC_D8Rnua9WCf3qLKO/view?usp=sharing */}
              </div>
              <div>
                <Text
                  fontWeight={"700"}
                  fontSize={"1.2rem"}
                  textAlign={"right"}
                  marginRight={"1rem"}
                >
                  ${i.minprice}
                </Text>
                <br />
                <Text
                  fontSize={"1rem"}
                  textAlign={"right"}
                  marginRight={"1rem"}
                >
                  Now: ${i.minprice}
                </Text>
                <Text
                  fontSize={"1rem"}
                  textDecorationLine={"line-through"}
                  textDecorationThickness={"1px"}
                  textAlign={"right"}
                  marginRight={"1rem"}
                >
                  *${i.maxprice}
                </Text>
              </div>
              <br />
            </div>
          </>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          <div style={{ marginTop: "2rem", width: "40%" }}>
            <img
              src="https://drive.google.com/uc?export=view&id=1pNa0V06V_CBM0rMSEOpc85WmmqmneFaV"
              alt="1pNa0V06V_CBM0rMSEOpc85WmmqmneFaV"
            />
            {/* https://drive.google.com/file/d/1pNa0V06V_CBM0rMSEOpc85WmmqmneFaV/view?usp=sharing */}
          </div>
          <div style={{ marginTop: "2rem", width: "35%" }}>
            <div
              style={{
                borderBottom: "1px solid #95a2a5",
                marginBottom: ".6rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",
                }}
              >
                <Text fontSize={"1.1rem"}>Subtotal</Text>
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
                <img
                  src="https://drive.google.com/uc?export=view&id=1S-sy8IltDcHp2H5srX65INou0olY1kLY"
                  alt="1S-sy8IltDcHp2H5srX65INou0olY1kLY"
                />
                {/* https://drive.google.com/file/d/1S-sy8IltDcHp2H5srX65INou0olY1kLY/view?usp=sharing */}
              </div>
              <div>
                <Link to={"/checkout"}>
                <Button
                  width="100%"
                  color="white"
                  py={"1rem"}
                  backgroundColor={"#00819d"}
                  borderRadius={"0"}
                  _hover={{
                    backgroundColor: "white",
                    color: "#00819d",
                    border: "2px solid #00819d",
                  }}
                >
                  Check Out
                </Button></Link>
              </div>
              <div>
                <img
                  src="https://drive.google.com/uc?export=view&id=15vYvxRqUaRzoe0fCv17o7XkuK0hW2krN"
                  alt="15vYvxRqUaRzoe0fCv17o7XkuK0hW2krN"
                />
                {/* https://drive.google.com/file/d/15vYvxRqUaRzoe0fCv17o7XkuK0hW2krN/view?usp=sharing */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <ExclusiveOffer />
      <br />
      <br />
      <Footer />
    </>
  );
}
