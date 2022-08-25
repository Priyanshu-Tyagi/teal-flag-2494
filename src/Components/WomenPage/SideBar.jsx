import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { AccordionData, ColorData, ColorName, WOinner } from "./sidebardata";

export default function SideBar({setColor,setOrder}) {
  return (
    <div>
      <Accordion allowToggle>
        {AccordionData.map((i) => (
          <AccordionItem key={i.head}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="700">
                      {i.head}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      justifyContent: "left",
                      marginLeft: "1rem",
                    }}
                  >
                    {i.inner.map((d) => (
                      <div key={d} className="other-text">
                        {d}
                      </div>
                    ))}
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="700">
                    Color
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("black")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="Color-text">Black</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("pink")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "pink" }}
                  ></div>
                  <div className="Color-text">Pink</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("red")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "red" }}
                  ></div>
                  <div className="Color-text">Red</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("white")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "white" }}
                  ></div>
                  <div className="Color-text">White</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("ivory")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "ivory" }}
                  ></div>
                  <div className="Color-text">Ivory</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("beige")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "beige" }}
                  ></div>
                  <div className="Color-text">Beige</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("brown")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "brown" }}
                  ></div>
                  <div className="Color-text">Brown</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("purple")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "purple" }}
                  ></div>
                  <div className="Color-text">Purple</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("blue")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "blue" }}
                  ></div>
                  <div className="Color-text">Blue</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("green")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "green" }}
                  ></div>
                  <div className="Color-text">Green</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("wellow")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "yellow" }}
                  ></div>
                  <div className="Color-text">Yellow</div>
                </div>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                  onClick={()=>setColor("orange")}
                >
                  <div
                    className="color-box"
                    style={{ backgroundColor: "orange" }}
                  ></div>
                  <div className="Color-text">Orange</div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="700">
                    Price
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div
                  style={{
                    justifyContent: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <div className="other-text" onClick={()=>setOrder("DESC")}>High - Low</div>

                  <div className="other-text" onClick={()=>setOrder("ASC")}>Low - High</div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        {WOinner.map((i) => (
          <AccordionItem key={i}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="700">
                      {i}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
