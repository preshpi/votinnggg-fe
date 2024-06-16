import React from "react";
import { SlArrowRight } from "react-icons/sl";
import VotersComp from "../../../components/admin/sidebar/voters/Voters.Comp";
import VotersDetails from "../../../components/admin/sidebar/categories/VotersDetails.Comp";
import { DetailProp } from "../../../types/voting";

const Voters = () => {
  const [showDetailState, setShowDetailState] = React.useState<boolean>(false);
  const [details, setDetails] = React.useState<DetailProp>({
    name: "",
    email: "",
    nin: "",
    phone: "",
    avatar: "",
  });

  const handleShowDetails = () => {
    setShowDetailState(false);
    setDetails({
      name: "",
      email: "",
      nin: "",
      phone: "",
      avatar: "",
    });
  };

  const handleDetailSetup = (detail: DetailProp) => {
    setDetails(detail);
    setShowDetailState(true);
  };

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-start gap-x-3">
        <button
          className={`font-medium ${!showDetailState ? "text-blue-600" : ""}`}
          onClick={handleShowDetails}
        >
          Voters
        </button>
        {showDetailState && (
          <>
            <SlArrowRight />
            <p
              className={`font-medium ${
                showDetailState ? "text-blue-600" : ""
              }`}
            >
              Details
            </p>
          </>
        )}
      </div>

      {!showDetailState ? (
        <VotersComp handleDetailSetup={handleDetailSetup} />
      ) : (
        <VotersDetails
          handleShowDetails={handleShowDetails}
          details={details}
        />
      )}
    </div>
  );
};

export default Voters;
