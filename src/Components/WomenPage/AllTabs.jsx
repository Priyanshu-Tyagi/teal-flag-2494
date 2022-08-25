import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import AllActivewear from "./Tabs/AllActiveWear";
import CropsAndCapris from "./Tabs/Crops&Capris";
import DressesAndSkirts from "./Tabs/Dresses&Skirts";
import Jackets from "./Tabs/Jackets";
import Leggings from "./Tabs/Leggings";

const tabstyle = {
  fontWeight: "800",
  borderBottom: "4px solid",
  borderColor: "#494949",
};

export default function AllTabs({color,order}) {
  return (
    <div>
      <Tabs>
        <TabList color="#494949">
          <Tab _selected={tabstyle} fontWeight="700">
            All Activewear
          </Tab>
          <Tab _selected={tabstyle} fontWeight="700">
            Crops & Capris
          </Tab>
          <Tab _selected={tabstyle} fontWeight="700">
            Dresses & Skirts
          </Tab>
          <Tab _selected={tabstyle} fontWeight="700">
            Jackets
          </Tab>
          <Tab _selected={tabstyle} fontWeight="700">
            Leggings
          </Tab>
          <Tab _selected={tabstyle} fontWeight="700">
            Shirts & Tees
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AllActivewear color={color} order={order} />
          </TabPanel>

          <TabPanel>
            <CropsAndCapris color={color} order={order}/>
          </TabPanel>

          <TabPanel>
            <DressesAndSkirts color={color} order={order} />
          </TabPanel>

          <TabPanel>
            <Jackets color={color} order={order}/>
          </TabPanel>

          <TabPanel>
            <Leggings color={color} order={order}/>
          </TabPanel>

          <TabPanel>Shirts & Tees</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
