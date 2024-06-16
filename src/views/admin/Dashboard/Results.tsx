import React from "react";
import PageTitleComp from "../../../components/admin/sidebar/PageTitle.Comp";
import CandidateAnalComp from "../../../components/admin/sidebar/results/CandidateAnal.Comp";

const Results = () => {
  const [currentState, setCurrentState] = React.useState<string>("ca");

  return (
    <div className="px-4 py-5">
      <p className={"font-medium text-blue-600"}>Results</p>

      <div className="flex items-center justify-between mt-5">
        <PageTitleComp
          title="Voting Result Page"
          subTitle="View the latest results and statistics from the recent vote."
        />

        <div className="flex items-baseline justify-center gap-x-2">
          <p className="text-2xl font-medium text-blue-500">207,388</p>
          <p className="text-sm text-gray-400">Total Voters</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-[24px] border-b border-gray-300 gap-x-44">
        <button
          className={`${
            currentState === "ca"
              ? "bg-[#ECF4FC] text-blue-500 font-semibold border-b-4 border-blue-500"
              : ""
          } px-3 py-2 text-gray-400`}
          onClick={() => setCurrentState("ca")}
        >
          Candidate Analytics
        </button>
        <button
          className={`${
            currentState === "va"
              ? "bg-[#ECF4FC] text-blue-500 font-semibold border-b-4 border-blue-500"
              : ""
          } px-3 py-2 text-gray-400`}
          onClick={() => setCurrentState("va")}
        >
          Voter Analytics
        </button>
      </div>

      {currentState === "ca" ? <CandidateAnalComp /> : <></>}
    </div>
  );
};

export default Results;
