import React from "react";
import { icons } from "../../../../lib/icons";

type Props = {
  index?: number;
  colorText: boolean;
};

const CandidateCardComp = ({ index, colorText }: Props) => {
  return (
    <div className="flex items-center justify-between w-[360px] pr-5 border-r border-r-gray-200 last:border-r-0">
      <div className="flex items-center justify-start gap-x-5">
        <div className="relative">
          <div className="w-[80px] h-[80px] overflow-hidden rounded-xl">
            <img src={icons.avatarLarge} alt="avatar" />
          </div>
          {index !== undefined && (
            <img
              src={
                index === 0
                  ? icons.firstBadge
                  : index === 1
                  ? icons.secondBadge
                  : icons.thirdBadge
              }
              alt="badge"
              className="absolute -bottom-2 -right-2"
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-medium text-black capitalize">
            Lisa Steve
          </p>
          <p className="text-gray-400">Party name here</p>
          <button className="px-2 py-1 text-sm text-black bg-gray-100 rounded-md">
            Department Name
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <p
          className={`font-medium ${
            colorText ? "text-blue-500" : "text-gray-400"
          }`}
        >
          50,587
        </p>
        <p className="text-sm text-gray-400">Votes</p>
      </div>
    </div>
  );
};

export default CandidateCardComp;
