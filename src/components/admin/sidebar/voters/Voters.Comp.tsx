import React from "react";
import PageTitleComp from "../PageTitle.Comp";
import VotersListTableComp from "./VotersListTable.Comp";
import { DetailProp } from "../../../../types/voting";

type VotersProp = {
  handleDetailSetup: (detail: DetailProp) => void;
};

const VotersComp = ({ handleDetailSetup }: VotersProp) => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <PageTitleComp
          title=" All Voters List"
          subTitle="A comprehensive list of all voters."
        />
      </div>

      <VotersListTableComp handleDetailSetup={handleDetailSetup} />
    </div>
  );
};

export default VotersComp;
