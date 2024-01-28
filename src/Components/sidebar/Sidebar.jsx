import React from "react";
import logo from "./images/setting.svg";
import keyImg from "./images/key-square.svg";
import d3Img from "./images/3d-square.svg";
import discount from "./images/discount-shape.svg";
import question from "./images/message-question.svg";
import userImg from "./images/user-square.svg";
import wallet from "./images/wallet-money.svg";
import "./style.css";

function Sidebar() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" width={37} />
        <span style={{ fontSize: "26px", fontWeight: "bold" }}>
          Dashboard
          <span style={{ fontSize: "10px", color: "#9197B3", marginLeft: "3px" }}>
            v.01
          </span>
        </span>
      </div>
      <div className="links">
        <div className="title">
          <img src={keyImg} alt="" width={24} />
          <span>Dashboard</span>
        </div>
        <ul className="items">
          <li>
          <img src={d3Img} alt="" width={24} />
          <span>Product</span>
          </li>
          <li>
          <img src={userImg} alt="" width={24} />
          <span>Customers</span>
          </li>
          <li>
          <img src={wallet} alt="" width={24} />
          <span>Income</span>
          </li>
          <li>
          <img src={discount} alt="" width={24} />
          <span>Promote</span>
          </li>
          <li>
          <img src={question} alt="" width={24} />
          <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
