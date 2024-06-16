import VotingCard from "./VotingCards";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { candidates, parties } from "./data";
import PartyCard from "./PartyCard";

const VotingList = () => {
  const firstThreeCandidates = candidates.slice(0, 3);
  const [viewByDepart, setViewByDepart] = useState(false);
  const [viewByParty, setViewByParty] = useState(false);

  const handleViewByDepartment = () => {
    setViewByDepart(!viewByDepart);
  };

  const handleViewByParty = () => {
    setViewByParty(!viewByParty);
  };

  return (
    <div className="pt-7 flex flex-col gap-5">
      <div className="bg-[#FFFFFF] rounded-md shadow p-3">
        <h3 className="font-[600] text-[18px] text-[#323539]">
          {" "}
          Top 3 Candidates
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {firstThreeCandidates.map((candidate, index) => (
            <VotingCard key={index} {...candidate} />
          ))}
        </div>
      </div>
      <div className="bg-[#FFFFFF] rounded-md shadow p-3">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-[600] text-[18px] text-[#323539]">
            {" "}
            Winners By Department
          </h3>
          <button
            onClick={handleViewByDepartment}
            className="text-[#0A77FF] flex items-center gap-3"
          >
            {viewByDepart ? (
              <span className="text-[#0A77FF] flex gap-3 items-center justify-center">
                View All <MdKeyboardArrowDown />
              </span>
            ) : (
              <span className="text-[#0A77FF] flex gap-3 items-center justify-center">
                Collapse <MdKeyboardArrowUp />
              </span>
            )}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {viewByDepart
            ? candidates.map((candidate, index) => (
                <VotingCard key={index} {...candidate} />
              ))
            : candidates
                .slice(0, 4)
                .map((candidate, index) => (
                  <VotingCard key={index} {...candidate} />
                ))}
        </div>
      </div>

      <div className="bg-[#FFFFFF] rounded-md shadow p-3">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-[600] text-[18px] text-[#323539]">
            {" "}
            Votes By Party{" "}
          </h3>
          <button
            onClick={handleViewByParty}
            className="text-[#0A77FF] flex items-center gap-3"
          >
            {viewByParty ? (
              <span className="text-[#0A77FF] flex gap-3 items-center justify-center">
                View All <MdKeyboardArrowDown />
              </span>
            ) : (
              <span className="text-[#0A77FF] flex gap-3 items-center justify-center">
                Collapse <MdKeyboardArrowUp />
              </span>
            )}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {viewByParty
            ? parties.map((party) => <PartyCard key={party.id} {...party} />)
            : parties
                .slice(0, 3)
                .map((party) => <PartyCard key={party.id} {...party} />)}
        </div>
      </div>
    </div>
  );
};

export default VotingList;
