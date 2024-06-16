import React from "react";
import { VotingCardProps } from "../../../types/voting";
import badge1 from "../../../assets/badges/Status1.svg";
import badge2 from "../../../assets/badges/Status2.svg";
import badge3 from "../../../assets/badges/Status3.svg";

const VotingCard: React.FC<VotingCardProps> = ({
  name,
  partyName,
  departmentName,
  numberOfVotes,
  image,
  id,
}) => {
  let badgeImage = null;

  if (id === 1) {
    badgeImage = badge1;
  } else if (id === 2) {
    badgeImage = badge2;
  } else if (id === 3) {
    badgeImage = badge3;
  }

  return (
    <div className="flex  w-full h-full gap-2 p-2 max-w-full">
      <div>
        <img
          src={image}
          alt={name}
          className="w-[70px]   h-[70px] object-cover rounded-md mb-4"
        />
        {/* fix the absolute issue to show the badge at the bottom right of the image */}

        {/* {badgeImage && (
          <img
            src={badgeImage}
            alt="badge"
            className="w-[33px] h-[33px] right-0 object-cover absolute"
          />
        )} */}
      </div>

      <div className="w-full">
        <div className="flex w-full justify-between gap-2">
          <div className="w-full">
            <h1 className="text-lg font-semibold text-[#323539]">{name}</h1>
            <p className="text-[13px] text-[#858C95] pt-1">{partyName}</p>
            <p className="text-[13px] text-[#323539] px-3 py-1 mt-2 bg-[#F8F9FB] rounded max-w-fit">
              {departmentName}
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="pt-2 text-[#0A77FF] text-[15px]">{numberOfVotes}</p>
            <p className="text-[#858C95] text-[13px]">Votes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingCard;
