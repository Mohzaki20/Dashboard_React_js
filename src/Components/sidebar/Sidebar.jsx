import React from "react";
import logo from "./images/setting.svg";
import keyImg from "./images/key-square.svg";
import d3Img from "./images/3d-square.svg";
import discount from "./images/discount-shape.svg";
import question from "./images/message-question.svg";
import userImg from "./images/user-square.svg";
import wallet from "./images/wallet-money.svg";
import arrow from "./images/chevron-right.svg";
import arrowDown from "./images/chevron-down 2.svg";
import personal from "./images/personalImg.svg";

import "./style.css";

function Sidebar() {
  return (
    <div className="container">
      <div>
        <div className="logo">
          <img src={logo} alt="" width={37} />
          <span style={{ fontSize: "26px", fontWeight: "bold" }}>
            Dashboard
            <span
              style={{ fontSize: "10px", color: "#9197B3", marginLeft: "3px" }}
            >
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
              <div>
                <img src={d3Img} alt="" width={24} />
                <span>Product</span>
              </div>
              <img src={arrow} alt="" width={16} />
            </li>
            <li>
              <div>
                <img src={userImg} alt="" width={24} />
                <span>Customers</span>
              </div>
              <img src={arrow} alt="" width={16} />
            </li>
            <li>
              <div>
                <img src={wallet} alt="" width={24} />
                <span>Income</span>
              </div>
              <img src={arrow} alt="" width={16} />
            </li>
            <li>
              <div>
                <img src={discount} alt="" width={24} />
                <span>Promote</span>
              </div>
              <img src={arrow} alt="" width={16} />
            </li>
            <li>
              <div>
                <img src={question} alt="" width={24} />
                <span>Help</span>
              </div>
              <img src={arrow} alt="" width={16} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="box">
          <p>Upgrade to PRO to get access all Features!</p>
          <button>Get Pro Now!</button>
        </div>
        <div className="userItem">
          <div>
            <img src={personal} alt="" />
            <span>
              <div className="name">Mohammad</div>
              <p className="title">Product Manager</p>
            </span>
          </div>

          <img src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
