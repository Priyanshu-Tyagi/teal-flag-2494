import { useState } from "react";
import Footer from "../Components/common/Footer/Footer";
import Navbar from "../Components/common/Navbar/Navbar";
import AllWomenProducts from "../Components/WomenPage/AllWomenProducts";
import SideBar from "../Components/WomenPage/SideBar";
import "../styles/WomenPage.css";

export default function WomenPage() {
  const [color, setColor] = useState("");
  const [order, setOrder] = useState("ASC");
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="Women-main-div">
        <div className="side-bar-part">
          <SideBar
            setColor={(c) => setColor(c)}
            setOrder={(o) => setOrder(o)}
          />
        </div>
        <div className="All-Products-Main-Parts">
          <AllWomenProducts color={color} order={order}/>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
