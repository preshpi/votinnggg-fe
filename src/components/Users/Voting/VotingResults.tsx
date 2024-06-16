import VotingList from "./VotingList";

const VotingResults = () => {
  return (
    <div className="p-5">
      <header className="flex lg:flex-row flex-col lg:items-center justify-between w-full">
        <div>
          <h3 className="text-[28px] text-[#323539] font-semibold">
            Voting Result Page
          </h3>
          <p className="text-[#858C95] text-[16px]">
            View the latest results and statistics from the recent vote.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#0A77FF] text-[28px] font-medium">207,388</p>
          <p className="text-[#858C95] text-[14px]">Voters</p>
        </div>
      </header>
      <VotingList />
    </div>
  );
};

export default VotingResults;
