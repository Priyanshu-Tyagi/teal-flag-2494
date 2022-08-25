import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import "../../../styles/navbar.css";

const navsigndata = [
  {
    navi: "Purchase",
    logo: "https://drive.google.com/uc?export=view&id=1WBLfPToxPWrRBg9ME-4nCePkfiju8PRo",
    //  https://drive.google.com/file/d/1WBLfPToxPWrRBg9ME-4nCePkfiju8PRo/view?usp=sharing
  },
  {
    navi: "Wish List",
    logo: "https://drive.google.com/uc?export=view&id=1spzRTCPlpRtCzOftUyglTgVrW5j74DZb",
    //  https://drive.google.com/file/d/1spzRTCPlpRtCzOftUyglTgVrW5j74DZb/view?usp=sharing
  },
  {
    navi: "The Nordy Club Reards",
    logo: "https://drive.google.com/uc?export=view&id=1RfRBM-VzNkJ5G-Un3lQwHKOBsM9FD3Ah",
    // https://drive.google.com/file/d/1RfRBM-VzNkJ5G-Un3lQwHKOBsM9FD3Ah/view?usp=sharing
  },
  {
    navi: "Shipping Addresses",
    logo: "https://drive.google.com/uc?export=view&id=1ORu537YTVqUt9SeotspYilhsKw9V8h_D",
    // https://drive.google.com/file/d/1ORu537YTVqUt9SeotspYilhsKw9V8h_D/view?usp=sharing
  },
  {
    navi: "Payment Methods",
    logo: "https://drive.google.com/uc?export=view&id=1VQ9p-rpydkTgKZVQ5piwHTWuNMXMao-L",
    // https://drive.google.com/file/d/1VQ9p-rpydkTgKZVQ5piwHTWuNMXMao-L/view?usp=sharing
  },
  {
    navi: "Pay & Manage Nordstrom Card",
    logo: "https://drive.google.com/uc?export=view&id=1oYMWbTrUG4QJ7FocfZTGKJaA5_2-tkX3",
    // https://drive.google.com/file/d/1oYMWbTrUG4QJ7FocfZTGKJaA5_2-tkX3/view?usp=sharing
  },
  {
    navi: "Store Locator",
    logo: "https://drive.google.com/uc?export=view&id=13XrtfhDOn4J02h5YVJKaVUlVLAX7YIh2",
    // https://drive.google.com/file/d/13XrtfhDOn4J02h5YVJKaVUlVLAX7YIh2/view?usp=sharing
  },
];
const navsigndata2 = [
  {
    navi: "Password & Personal Info",
    logo: "https://drive.google.com/uc?export=view&id=1UoimEl2UM-KrjES6435Uw5y2oDevfJWM",
    // https://drive.google.com/file/d/1UoimEl2UM-KrjES6435Uw5y2oDevfJWM/view?usp=sharing
  },
  {
    navi: "Email & Mail Preferences",
    logo: "https://drive.google.com/uc?export=view&id=1-JJ0GcY_mXDBSNeLmlvgcfxbaBHR9_VP",
    // https://drive.google.com/file/d/1-JJ0GcY_mXDBSNeLmlvgcfxbaBHR9_VP/view?usp=sharing
  },
];

export default function NavSign() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        // variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        Sign In {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>

      <MenuItem
          _focus={{
            bg: "none",
          }}
          px="1.5rem"
          minW="0"
          w={"auto"}
        >
          <button className="navsignupbtn">
            Sign In | Create Account
          </button>
        </MenuItem>

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          fontWeight="800"
          minW="0"
          w={"auto"}
        >
          Your Account
        </MenuItem>

        {navsigndata.map((i) => (
          <div key={i.navi} style={{ display: "flex", padding: "0 1.5rem" }}>
            <Image height={"32px"} src={i.logo} alt={i.navi} />
            <MenuItem
              key={i.navi}
              _focus={{
                bg: "none",
                color: "#00819d",
                textDecorationLine: "underline",
                textDecorationThickness: "2px",
              }}
              fontSize="1rem"
              minW="0"
              w={"auto"}
            >
              {i.navi}
            </MenuItem>
          </div>
        ))}

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          minW="0"
          w={"auto"}
        ></MenuItem>

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          minW="0"
          w={"auto"}
        >
          Account Settings
        </MenuItem>

        {navsigndata2.map((i) => (
          <div key={i.navi} style={{ display: "flex", padding: "0 1.5rem" }}>
            <Image height={"32px"} src={i.logo} alt={i.navi} />
            <MenuItem
              key={i.navi}
              _focus={{
                bg: "none",
                color: "#00819d",
                textDecorationLine: "underline",
                textDecorationThickness: "2px",
              }}
              fontSize="1rem"
              minW="0"
              w={"auto"}
            >
              {i.navi}
            </MenuItem>
          </div>
        ))}

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          minW="0"
          w={"auto"}
        ></MenuItem>

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          fontWeight="800"
          minW="0"
          w={"auto"}
        >
          Need Help?
        </MenuItem>

        <MenuItem
          _focus={{
            bg: "none",
            color: "#00819d",
            textDecorationLine: "underline",
            textDecorationThickness: "2px",
          }}
          px="1.5rem"
          fontSize="1rem"
          // fontWeight="800"
          minW="0"
          w={"auto"}
        >
          Contact Us
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
