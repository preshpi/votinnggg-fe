import React from "react";
import CandidateCardComp from "./CandidateCard.Comp";
import { IoIosArrowUp } from "react-icons/io";

type Props = {};

const CandidateAnalComp = (props: Props) => {
  const [collapse, setCollapse] = React.useState<boolean>(false);

  const tempArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const itemsToShow = collapse ? tempArr : tempArr.slice(0, 3);

  return (
    <div className="mt-3">
      <div className="w-full px-5 py-6 bg-white shadow-lg rounded-xl">
        <p className="text-xl font-semibold text-black capitalize">
          Top 3 Candidates
        </p>

        <div className="flex items-center justify-center w-full mt-5 gap-x-5">
          {[0, 1, 2].map((item, index) => (
            <CandidateCardComp key={item} index={index} colorText />
          ))}
        </div>
      </div>

      <div className="w-full px-5 py-6 mt-6 bg-white shadow-lg rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-black capitalize">
            winners by department
          </p>

          <button
            className="flex items-center justify-center px-3 text-blue-500 gap-x-5"
            onClick={() => setCollapse((prev) => !prev)}
          >
            <span className="font-medium">
              {collapse ? "Collapse" : "View All"}
            </span>
            <span
              className={`${
                !collapse ? "rotate-180" : "rotate-0"
              } duration-300`}
            >
              <IoIosArrowUp />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-start w-full mt-5 gap-y-6 gap-x-5">
          {itemsToShow.map((item) => (
            <CandidateCardComp key={item} colorText={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateAnalComp;
