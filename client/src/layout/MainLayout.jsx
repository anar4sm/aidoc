import { sidebarData } from "../data/sidebar";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/SideItem";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar>
        {sidebarData.map((section, index) => (
          <div key={index}>
            <ul className="flex-1 px-3">
              {section.items.map((item, itemIndex) => (
                <SidebarItem
                  key={itemIndex}
                  icon={<item.icon size={20} />}
                  text={item.text}
                  route={item.route}  // Pass the route here!
                  alert={item.alert}
                />
              ))}
            </ul>
            {index === 0 && <hr className="my-3 border-gray-200" />}
          </div>
        ))}
      </Sidebar>

      {/* Right Content Area */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
