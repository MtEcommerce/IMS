import { useState } from "react";
import styled from "../layout.module.scss";

const SideMenu = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);

  return (
    <div className={"relative h-full"}>
      <aside
        className={`${styled.aside} ${!showSideMenu && styled.asideCollapse}`}
      >
        <p>Side Menu</p>
      </aside>
      <button
        className={`${styled.toggleButton} border-2 ${
          showSideMenu ? "bg-green-400" : "bg-rose-400"
        }`}
        onClick={() => setShowSideMenu((prev) => !prev)}
      >
        {showSideMenu ? "T" : "F"}
      </button>
    </div>
  );
};

export default SideMenu;
