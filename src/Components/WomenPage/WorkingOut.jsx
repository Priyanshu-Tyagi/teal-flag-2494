import { Text } from "@chakra-ui/react";
import "../../styles/WomenPage.css";

const WorkingOutData = [
  {
    head: "Running & Training",
    img: "https://drive.google.com/uc?export=view&id=1NY66JIPfaxgI7xPXJNFabIV4dG_z6exf",
    // https://drive.google.com/file/d/1NY66JIPfaxgI7xPXJNFabIV4dG_z6exf/view?usp=sharing
  },
  {
    head: "Yoga & Barre",
    img: "https://drive.google.com/uc?export=view&id=1hTKSSDsLX-yVbi5F5eLZiX1rCn-kT4as",
    // https://drive.google.com/file/d/1hTKSSDsLX-yVbi5F5eLZiX1rCn-kT4as/view?usp=sharing
  },
  {
    head: "Hiking & Outdoors",
    img: "https://drive.google.com/uc?export=view&id=1Y80iEliAbso2uK-9-AXYBdYa-BJNng39",
    // https://drive.google.com/file/d/1Y80iEliAbso2uK-9-AXYBdYa-BJNng39/view?usp=sharing
  },
  {
    head: "Athleisure",
    img: "https://drive.google.com/uc?export=view&id=1KXsU7r-rNMS0egBvN94b0GdgZ0ION_ur",
    // https://drive.google.com/file/d/1KXsU7r-rNMS0egBvN94b0GdgZ0ION_ur/view?usp=sharing
  },
  {
    head: "New Arrivals",
    img: "https://drive.google.com/uc?export=view&id=1iE2KDosmmY5jMBWBmux3Pm7VUDdFJ1eo",
    // https://drive.google.com/file/d/1iE2KDosmmY5jMBWBmux3Pm7VUDdFJ1eo/view?usp=sharing
  },
];

export default function WorkingOut() {
  return (
    <div className="Working-main-div">
      {WorkingOutData.map((i) => (
        <div>
          <div>
            <img className="carouselimg" src={i.img} alt={i.head} />
          </div>
          <div>
            <Text
              padding={"0"}
              justifyContent="left"
              textAlign={"left"}
              width="auto"
              ml=".5rem"
              color="gray.600"
              textDecorationLine="underline"
              textDecorationThickness="2px"
              _hover={{
                textDecorationThickness: "3px",
                cursor: "pointer",
              }}
            >
              {i.head}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
