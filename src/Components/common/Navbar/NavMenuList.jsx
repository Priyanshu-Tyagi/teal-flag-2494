import {
  Grid,
  GridItem,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const column1 = ["Back to School","Flash Event","New Arrivals","Best Sellers","Contemporary Brands","Trend Brands","Dresses Under $50","Denim Under $50","Sandals Under $50","Boots Under $100","Sweaters Under $50","Coats Under $100","Wedding Shop","Nike for the Family","Rack Essentials","Shop By Brand","Nordstrom Made","Clearance"];

const column2 = ["Activewear",'Blazer','Coats & Jackets','Dresses','Jeans & Denim','Jumpsuits & Rompers',`Lingerie, Hosiery & Shapewear`,'Loungewear','Pants & Leggings','Shorts','Skirts','Sleepwear & Robes','Sweaters','Sweatshirts & Hoodies','Swimsuits & Cover-Ups','Tops',' ','Plus-Size'];

const column3 = ['Athletic & Running','Boots & Booties','Clogs','Comfort','Espadrilles','Flats','Flip-Flops & Slides','Heels','Loafers & Oxfords','Mules','Rain Boots','Sandals','Slippers','Sneakers','Wedges',' ','Extended Shoe Sizes & Widths'];

const column4y = ['Axxessories','Clothing','Shoes'];
const column4d = ['Designer Accessories','Designer Bags','Designer Clothing','Designer Shoes','Designer Sunglasses & Eyewear'];
const column4h = ['Handbags',' ','Sunglasses & Eyewear',' ','Jewelry & Watches',' ','Accessories',' ','Beauty'];

const column5o = ['Casual Weekend','Lounge & Cozy Styles','Night Out','Vacation','Wear to Work','Wedding Guest'];
const column5t =['Luxe Bohemian','Platform Shoes'];

export default function NavMenuList() {
  return (
      <Grid templateColumns="repeat(6, 16%)" gap={4}>
        {/* First Column */}
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Women: Get Inspired
            </MenuItem>

            <MenuDivider />

            {column1.map((i)=>(
              <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>
            ))}

          </Stack>
        </GridItem>

        {/* Second Column */}
        
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Clothing
            </MenuItem>


            {column2.map((i)=>(
              <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>
            ))}  


          </Stack>
        </GridItem>      
        
        {/* Third Column */}
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Shoes
            </MenuItem>

            {column3.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}

          </Stack>
        </GridItem>
        {/* Fourth Column */}
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Young Adult
            </MenuItem>

            {column4y.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}


            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Designer
            </MenuItem>

            {column4d.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}

            {column4h.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}

          </Stack>
        </GridItem>
        {/* Fifth Column */}
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Shop by Occasion
            </MenuItem>

            {column5o.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}

            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Shop by Trend
            </MenuItem>

            {column5t.map((i)=>(<MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              minW="0"
              w={"auto"}
            >
              {i}
            </MenuItem>))}

          </Stack>
        </GridItem>
        {/* Sixth Column */}
        <GridItem>
          <Stack>
            <MenuItem
              _focus={{ bg: "none",color:"#00819d",textDecorationLine:"underline",textDecorationThickness:"2px" }}
              fontWeight="800"
              minW="0"
              w={"auto"}
            >
              Women: Get Inspired
            </MenuItem>
          </Stack>
        </GridItem>
      </Grid>
  );
}
