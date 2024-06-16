import React from "react";
import CandidateComp from "../../../components/admin/sidebar/candidate/Candidate.Comp";
import { SlArrowRight } from "react-icons/sl";
import AddNewCandidateComp from "../../../components/admin/sidebar/candidate/AddNew.Comp";

const Candidates = () => {
  const [currentActivePage, setCurrentActivePage] = React.useState<
    string | null
  >(null);
  const [addNewCandidate, setAddNewCandidate] = React.useState<boolean>(false);

  const handleAddNew = (param: string) => {
    setCurrentActivePage(param);
    setAddNewCandidate(true);
  };

  const handleRemoveAddNew = () => {
    setAddNewCandidate(false);
    setCurrentActivePage(null);
  };

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-start gap-x-3">
        <p
          className={`font-medium ${!currentActivePage ? "text-blue-600" : ""}`}
        >
          Candidates
        </p>
        {currentActivePage && (
          <>
            <SlArrowRight />
            <p className={`font-medium ${currentActivePage ? "text-blue-600" : ""}`}>{currentActivePage}</p>
          </>
        )}
      </div>

      {!addNewCandidate ? (
        <CandidateComp handleCurrentPage={handleAddNew} />
      ) : (
        <AddNewCandidateComp handleRemoveAddNew={handleRemoveAddNew} />
      )}
    </div>
  );
};

export default Candidates;
