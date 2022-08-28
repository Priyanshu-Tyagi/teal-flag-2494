import {
    Container,
    Image,
  } from "@chakra-ui/react";
  import "../../../styles/navbar.css";
  import { NavLink } from "react-router-dom";

export default function Navbar2() {
  return (
    <div>
      <Container
      backgroundColor={"white"}
        display="flex"
        justifyContent="space-between"
        maxW="100%"
        borderBottom="2px solid #acb4b5"
        padding="1rem 1rem"
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
        <NavLink to="/bag">
          <img
            src="https://drive.google.com/uc?export=view&id=15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX"
            alt="15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX"
          />
          {/* https://drive.google.com/file/d/15IbQEr6POwfJwaRI2f98m2YcTlCaz9FX/view?usp=sharing */}
        </NavLink>
      </Container>
    </div>
  );
}
