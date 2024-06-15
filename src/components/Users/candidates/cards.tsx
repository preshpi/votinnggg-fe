import React from "react";
import { CandidateListProps } from "../../../types/candidate";
import { RiCheckLine } from "react-icons/ri";

type CardProps = CandidateListProps & {
  onSelect: () => void;
  isSelected: boolean;
};

const Card: React.FC<CardProps> = ({
  image,
  alt,
  name,
  partyName,
  description,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`flex w-full h-full gap-2 p-2 bg-[#F8F9FB] cursor-pointer max-w-full rounded-md ${
        isSelected ? "border-2 border-[#0E69E2]" : ""
      }`}
      onClick={onSelect}
    >
      <img
        src={image}
        alt={alt}
        className="w-32 h-full object-cover rounded-md mb-4"
      />
      <div className="w-full">
        <div className="flex w-full justify-between gap-2">
          <div className="w-full">
            <h1 className="text-lg font-semibold text-[#323539]">{name}</h1>
            <p className="text-[13px] text-[#0A77FF] pt-3">{partyName}</p>
          </div>
          <span
            className={`flex items-center h-[20px] w-[20px] justify-center rounded-full ${
              isSelected ? "border-[#0A77FF]" : "border-[#E5E5E7]"
            } border-2  cursor-pointer`}
          >
            {" "}
            {isSelected && (
              <RiCheckLine
                className={`w-full h-full ${
                  isSelected ? "text-[#0A77FF]" : ""
                }`}
              />
            )}
          </span>
        </div>
        <p className="line-clamp-2 pt-6 text-[#858C95] text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
