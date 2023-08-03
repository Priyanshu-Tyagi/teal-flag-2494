import {
  Grid,
  GridItem,
  MenuDivider,
  MenuItem,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const column1 = ["Back to School", "Flash Event", "New Arrivals", "Best Sellers", "Contemporary Brands", "Trend Brands", "Dresses Under $50", "Denim Under $50", "Sandals Under $50", "Boots Under $100", "Sweaters Under $50", "Coats Under $100", "Wedding Shop", "Nike for the Family", "Rack Essentials", "Shop By Brand", "Nordstrom Made", "Clearance"];

const column2 = ['Blazer', 'Coats & Jackets', 'Dresses', 'Jeans & Denim', 'Jumpsuits & Rompers', `Lingerie, Hosiery & Shapewear`, 'Loungewear', 'Pants & Leggings', 'Shorts', 'Skirts', 'Sleepwear & Robes', 'Sweaters', 'Sweatshirts & Hoodies', 'Swimsuits & Cover-Ups', 'Tops', ' ', 'Plus-Size'];

const column3 = ['Athletic & Running', 'Boots & Booties', 'Clogs', 'Comfort', 'Espadrilles', 'Flats', 'Flip-Flops & Slides', 'Heels', 'Loafers & Oxfords', 'Mules', 'Rain Boots', 'Sandals', 'Slippers', 'Sneakers', 'Wedges', ' ', 'Extended Shoe Sizes & Widths'];

const column4y = ['Axxessories', 'Clothing', 'Shoes'];
const column4d = ['Designer Accessories', 'Designer Bags', 'Designer Clothing', 'Designer Shoes', 'Designer Sunglasses & Eyewear'];
const column4h = ['Handbags', ' ', 'Sunglasses & Eyewear', ' ', 'Jewelry & Watches', ' ', 'Accessories', ' ', 'Beauty'];

const column5o = ['Casual Weekend', 'Lounge & Cozy Styles', 'Night Out', 'Vacation', 'Wear to Work', 'Wedding Guest'];
const column5t = ['Luxe Bohemian', 'Platform Shoes'];

export default function NavMenuList() {
  return (
    <Grid templateColumns="repeat(6, 16%)" gap={1}>


      {/* First Column */}


      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Women: Get Inspired
          </MenuItem>

          <MenuDivider />

          {column1.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                fontWeight="800"
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

        </Stack>
      </GridItem>


      {/* Second Column */}


      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Clothing
          </MenuItem>

          <NavLink to="/women">
            <MenuItem
              _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
              minW="0"
              w={"auto"}
            >
              Activewear
            </MenuItem>
          </NavLink>

          {column2.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}


        </Stack>
      </GridItem>


      {/* Third Column */}


      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Shoes
          </MenuItem>

          {column3.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

        </Stack>
      </GridItem>


      {/* Fourth Column */}


      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Young Adult
          </MenuItem>

          {column4y.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}


          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Designer
          </MenuItem>

          {column4d.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

          {column4h.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                fontWeight="800"
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

        </Stack>
      </GridItem>


      {/* Fifth Column */}


      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Shop by Occasion
          </MenuItem>

          {column5o.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

          <MenuItem
            _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
            fontWeight="800"
            minW="0"
            w={"auto"}
          >
            Shop by Trend
          </MenuItem>

          {column5t.map((i) => (
            <NavLink to="/women">
              <MenuItem
                key={i}
                _focus={{ bg: "none", color: "#00819d", textDecorationLine: "underline", textDecorationThickness: "2px" }}
                minW="0"
                w={"auto"}
              >
                {i}
              </MenuItem>
            </NavLink>
          ))}

        </Stack>
      </GridItem>
      
      
      {/* Sixth Column */}
      
      
      <GridItem>
        <Stack>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
          </MenuItem>
          <MenuItem
            _focus={{ bg: "none" }}
            minW="0"
            w={"auto"}
          >
            <img src="https://n.nordstrommedia.com/id/6379d00e-189e-4f5b-a2ef-fc24f4d818fd.jpg" alt="123456" />
          </MenuItem>
        </Stack>
      </GridItem>
    </Grid>
  );
}
