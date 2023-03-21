import React from "react";
import { categories } from "../../Utils/constants";
import "./Sidebar.scss";

const Sidebar = ({ selectedCategory, setselectedCategory}) => {
  return (
    <div className="container-sidebar">
      {categories.map((item) => {
        return (
          <li
            key={item.name}
            className="sidebar-item"
            onClick={() => {
              setselectedCategory(item.name);
            }}
            style={{ background: item.name === selectedCategory && "red" }}
          >
            <span
              className="sidebar-icon"
              style={{ color: item.name === selectedCategory && "white" }}
            >
              {item.icon}
            </span>
            <span
              className="sidebar-name"
              style={{ color: item.name === selectedCategory && "white" }}
            >
              {item.name}
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default Sidebar;
