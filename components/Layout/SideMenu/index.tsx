import { FC, useEffect } from "react";
import { ISideMenuData } from "../Aside/config/sideMenuData";

interface ISideMenu {
    sideMenuData: ISideMenuData[];
}

const SideMenu: FC<ISideMenu> = () => {
    return <div>SideMenu</div>;
};

export default SideMenu;
