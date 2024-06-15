import candidates from "../../../assets/icons/candidates.svg";
import voter from "../../../assets/icons/voter.svg";
import result from "../../../assets/icons/result.svg";
import categories from "../../../assets/icons/categories.svg";

export const dashBoardSidebarData = [
  {
    id: 1,
    title: "Candidates",
    icon: candidates,
    path: "/dashboard",
    className: "",
    submenus: [],
  },
  {
    id: 2,
    title: "Categories",
    icon: categories,
    path: "/dashboard/categories",
    className: "",
    submenus: [],
  },
  {
    id: 3,
    title: "Voter",
    icon: voter,
    path: "/dashboard/voter",
    className: "",
    submenus: [],
  },
  {
    id: 4,
    title: "Result",
    icon: result,
    path: "/dashboard/results",
    className: "",
    submenus: [],
  },
];
