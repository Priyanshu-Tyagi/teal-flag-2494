import "../../../styles/Footer.css";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const column1 = [
  "Order Status",
  "Guest Returns",
  "Shipping & Return Policy",
  "Gift Cards",
  "FAQ",
  "Contact Us",
];

const column2 = [
  "About Our Brand",
  "The Nordy Club",
  "Store Locator",
  "All Brands",
  "Careers",
  "Get Email Updates",
  "Nordstrom Blog",
  "Nordy Podcast",
];

const column3 = [
  "Corporate Social Responsibility",
  "Diversity, Inclusion & Belonging",
  "Shoes That Fit",
  "Big Brothers Big Sisters",
  "Donate Clothes",
];

const column4 = [
  "Apply for a Nordstrom Card",
  "Pay My Bill",
  "Manage my Nordstrom Card",
];

const column5 = [
  "Nordstrom",
  "Nordstrom Canada",
  "HauteLook",
  "Investor Relations",
  "Press Releases",
  "Nordstrom Media Network",
];

export default function Footer() {
  return (
    <div className="maindivsize">
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>{/* Dummy */}</div>
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <div>Get Email Updates:</div>
          <div className="inputdiv">
            <input
              className="footerinput"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <button className="footersignupbtn">Sing up</button>
          </div>
        </div>
      </div>

      {/* FOOTER GRID */}

      <div style={{ width: "90%",backgroundColor:"#f9f9f9" }}>
        <Grid templateColumns="repeat(6, 1fr)" >
          {/* first Column */}

          <Stack>
            <GridItem>
              <Text fontSize="xl" fontWeight="800">
                Customer Service
              </Text>
            </GridItem>

            {column1.map((i) => (
              <GridItem>
                <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} p=".5rem" fontSize="l">
                  {i}
                </Text>
              </GridItem>
            ))}
          </Stack>

          {/* Second Column */}

          <Stack>
            <GridItem>
              <Text fontSize="xl" fontWeight="800">
                About Us
              </Text>
            </GridItem>

            {column2.map((i) => (
              <GridItem>
                <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} p=".5rem" fontSize="l">
                  {i}
                </Text>
              </GridItem>
            ))}
          </Stack>

          {/* Third Column */}

          <Stack>
            <GridItem>
              <Text fontSize="xl" fontWeight="800">
                Nordstrom Rack & The Community
              </Text>
            </GridItem>

            {column3.map((i) => (
              <GridItem>
                <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} p=".5rem" fontSize="l">
                  {i}
                </Text>
              </GridItem>
            ))}
          </Stack>

          {/* Fourth Column */}

          <Stack>
            <GridItem>
              <Text fontSize="xl" fontWeight="800">
                Nordstrom Card
              </Text>
            </GridItem>

            {column4.map((i) => (
              <GridItem>
                <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} p=".5rem" fontSize="l">
                  {i}
                </Text>
              </GridItem>
            ))}
          </Stack>

          {/* Fifth Column */}

          <Stack>
            <GridItem>
              <Text fontSize="xl" fontWeight="800">
                Nordstrom, Inc.
              </Text>
            </GridItem>

            {column5.map((i) => (
              <GridItem>
                <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} p=".5rem" fontSize="l">
                  {i}
                </Text>
              </GridItem>
            ))}
          </Stack>

          {/* Sixth Column */}

          <Stack>
            <GridItem display={"flex"}>
                <Image height={"32px"} src="https://drive.google.com/uc?export=view&id=1-Doup0VdQdfe9MZVZpuE8iJjw68fZW3f" alt="mobile png"/>
              {/* https://drive.google.com/file/d/1-Doup0VdQdfe9MZVZpuE8iJjw68fZW3f/view?usp=sharing */}
              <Text _hover={{ color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }} align="center" fontSize="l" fontWeight="600">
              
                Download Our App
              </Text>
            </GridItem>

              <GridItem>
                <img src="https://drive.google.com/uc?export=view&id=1xIlfu6ZcqLEi19Ns9be-UITwdsEocE17" alt="Social Logos" />
                {/* https://drive.google.com/file/d/1xIlfu6ZcqLEi19Ns9be-UITwdsEocE17/view?usp=sharing */}
              </GridItem>
          </Stack>
        </Grid>
      </div>
    </div>
  );
}
