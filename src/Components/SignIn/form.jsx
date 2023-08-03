import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel className="sign-input-lable">Email address</FormLabel>
      <Input padding={'1.5rem'} type="email" />

      <br />

      {/* PASSWORD */}

      <FormLabel className="sign-input-lable">Password</FormLabel>
      <InputGroup size="md">
        <Input padding={'1.5rem'} pr="4.5rem" type={show ? "text" : "password"} />
        <InputRightElement width="4.5rem">
          <Text
            _hover={{ cursor: "pointer" }}
            color={"#00819d"}
            textDecoration={"underline"}
            fontSize="15px"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Text>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
