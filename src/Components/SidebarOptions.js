import React from "react";
import "./SidebarOption.css"

function SidebarOptions({ active,text, Icon }) {
  return (
    <div className={`SidebarOptions ${active && 'SidebarOption-Active'}`}>
      <Icon />
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarOptions;
