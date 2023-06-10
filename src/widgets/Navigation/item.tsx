import React from "react";
import { NavLink } from "react-router-dom";

interface ItemProps {
  label: string;
  link: string;
}

export const Item: React.FC<ItemProps> = ({ label, link }) => {
  return (
    <NavLink style={{ textDecoration: "none", color: "gray" }} to={link}>
      {label}
    </NavLink>
  );
};
