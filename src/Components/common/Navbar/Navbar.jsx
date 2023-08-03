import {
  Container,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../../../styles/navbar.css";
import NavSign from "./Navsign";
import NavMenuList from "./NavMenuList";
import { NavLink } from "react-router-dom";

const navhead = [
  "Women",
  "Mens",
  "Kids",
  "Shoes",
  "Activewear",
  "Bags & Accessories",
  "Home",
  "Beauty",
  "Gift",
];

export default function Navbar() {
  return (
    <div>
      <div className="navShip">
        <Text fontSize="1.1rem">
          Free shipping over $89, or shop online and pick up select orders at a
          Nordstrom Rack or Nordstrom store.{" "}
          <span className="underline">Learn More</span>
        </Text>
      </div>
      <Container
        display="flex"
        justifyContent="space-between"
        maxW="95%"
        borderBottom="2px solid #acb4b5"
        padding="1rem 0rem"
      >
        <NavLink to="/">
          <div>
            <Image
              src="https://drive.google.com/uc?export=view&id=1-b3mr0kQ2fDWlUQynCSSHzihlV0aHUuy"
              alt="Logo"
            />
            {/* https://drive.google.com/file/d/1-b3mr0kQ2fDWlUQynCSSHzihlV0aHUuy/view?usp=sharing */}
          </div>
        </NavLink>
        <div style={{ width: "61%" }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input type="tel" placeholder="Search for products or brands" />
          </InputGroup>
        </div>
        <div className="tac">
          {/* <Text>Sign In<ChevronDownIcon/></Text> */}
          <NavSign />
          <NavLink to="/bag">
            <img
              src="https://drive.google.com/uc?export=view&id=15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX"
              alt="15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX"
            />
            {/* https://drive.google.com/file/d/15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX/view?usp=sharing */}
          </NavLink>
        </div>
      </Container>

      <div className="navitems">
        <div>
          <Menu>
            <MenuButton
              fontSize={"17px"}
              color={"#d63835"}
              _hover={{
                textDecorationLine: "underline",
                textDecorationThickness: "2px",
              }}
            >
              Clearance
            </MenuButton>
            <MenuList p={0} minW="0" maxW={"97vw"} ml={"0"}>
              <NavMenuList />
            </MenuList>
          </Menu>
        </div>
        {navhead.map((i) => (
          <div key={i}>
            <Menu>
              <MenuButton
                fontSize={"17px"}
                _hover={{
                  textDecorationLine: "underline",
                  textDecorationThickness: "2px",
                }}
              >
                {i}
              </MenuButton>
              <MenuList p={0} minW="0" maxW={"auto"} ml={"-130px"}>
                <NavMenuList />
              </MenuList>
            </Menu>
          </div>
        ))}
        {/* <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-260px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-390px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-520px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-650px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-780px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-910px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-1040px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu >
          <MenuButton>
            Clearance
          </MenuButton>
          <MenuList p={0} minW="0" maxW={"auto"} ml={"-1170px"} >
          <NavMenuList/>
          </MenuList>
        </Menu>
      </div> */}
        <div>
          <Menu>
            <MenuButton
              fontSize={"17px"}
              color={"#00819d"}
              _hover={{
                textDecorationLine: "underline",
                textDecorationThickness: "2px",
              }}
            >
              Flash Events
            </MenuButton>
            <MenuList p={0} minW="0" maxW={"97vw"} ml={"0"}>
              <NavMenuList />
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}
