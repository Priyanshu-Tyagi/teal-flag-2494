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
} from "@chakra-ui/react";

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
        <MenuItem>
          10
        </MenuItem>
        <MenuItem>
          2
        </MenuItem>
        <MenuItem>
          3
        </MenuItem>
        <MenuItem>
          4
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
