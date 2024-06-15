import { useEffect } from "react";
import { useSidebar } from "../../../provider/sidebarProvider";
import useDimension from "../../../hook/useDimension";
import { AnimatePresence, motion } from "framer-motion";
import { dashBoardSidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useSidebar();

  const { height } = useDimension();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setShowSidebar(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          className={`${
            showSidebar ? "flex" : "hidden"
          } fixed top-0 z-20 flex h-full w-full max-w-[247px] flex-col overflow-y-auto bg-[#fff] py-4 pb-8 lg:sticky lg:flex lg:min-h-[100vh]`}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeInOut",
          }}
          style={{ maxHeight: height }}
        >
          <div className=" font-size-[14px] mt-8 flex flex-col gap-y-2">
            {dashBoardSidebarData.map((menuItem) => (
              <SidebarItem
                key={menuItem.id}
                icon={menuItem.icon}
                title={menuItem.title}
                path={menuItem.path}
                submenus={menuItem.submenus}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
