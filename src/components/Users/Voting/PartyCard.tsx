import React from "react";
import { PartyCardProps } from "../../../types/voting";

const PartyCard: React.FC<PartyCardProps> = ({
  partyName,
  numberOfVotes,
  image,
}) => {
  return (
    <div className="bg-[#F8F9FB] p-4 flex flex-col">
      <h3 className="text-[16px] font-semibold text-[#323539]">{partyName}</h3>

      <div className="flex items-center px-6 justify-between pt-3 w-full">
        <img
          src={image}
          alt={partyName}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
        <div className="flex flex-col">
          <p className="pt-2 text-[#323539] text-[15px]">{numberOfVotes}</p>
          <p className="text-[#858C95] text-[13px]">Votes</p>
        </div>
      </div>

      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex gap-3 items-end pt-4 justify-between max-w-[300px]"
        >
          <div className="flex gap-3 items-center">
            <img
              src={image}
              alt={partyName}
              className="w-[24px] h-[24px] rounded-md object-cover"
            />
            <p>Lisa Steve</p>
            <span className="w-[10px] h-[10px] bg-[#0A77FF] rounded-full"></span>
          </div>

          <div className="flex gap-3 items-end ">
            <p className="text-[14px] text-[#323539]">50%</p>
            <p className="text-[#858C95] text-[12px]">1,03,694</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartyCard;
