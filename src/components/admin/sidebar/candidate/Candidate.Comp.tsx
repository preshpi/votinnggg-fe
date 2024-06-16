import React from "react";
import { Button } from "../../../ui/button";
import CandidateListTableComp from "./CandidateListTable.Comp";
import PageTitleComp from "../PageTitle.Comp";

type Props = {
  handleCurrentPage: (title: string) => void;
};

const CandidateComp = ({ handleCurrentPage }: Props) => {
  // FUNCTIONS
  const handleAddNew = () => {
    handleCurrentPage("Add candidate");
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <PageTitleComp
          title=" All Candidate List"
          subTitle="A comprehensive list of all candidates."
        />

        <Button onClick={handleAddNew}>Add New</Button>
      </div>

      <CandidateListTableComp />
    </div>
  );
};

export default CandidateComp;
