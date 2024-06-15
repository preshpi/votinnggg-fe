import phone from "../../../assets/phone.svg";
import { CandidateListProps } from "../../../types/candidate";

interface SubmissionProps {
  selectedCandidate: CandidateListProps | null;
}
const Submission: React.FC<SubmissionProps> = ({ selectedCandidate }) => {
  return (
    <div className="flex items-center flex-col pt-7 gap-5 justify-center w-full h-full mx-auto max-w-[474px]">
      <img src={phone} alt={"phone"} />
      <div className="text-center ">
        <h3 className="font-[500] text-[#323539] text-[20px]">
          Vote Submission Successful.{" "}
        </h3>

        <p className="text-[14px] text-[#858C95] pt-3">
          Your vote of this category has been submitted of the below candidate.
          Move to the next category or finish your voting.
        </p>
      </div>

      <div
        className="flex w-full h-full shadow gap-2 p-2 bg-[#F8F9FB] cursor-pointer max-w-full rounded-md 
        "
      >
        <img
          src={selectedCandidate?.image}
          alt={selectedCandidate?.name}
          className="w-32 h-full object-cover rounded-md mb-4"
        />
        <div className="w-full">
          <div className="flex w-full justify-between gap-2">
            <div className="w-full">
              <h1 className="text-lg font-semibold text-[#323539]">
                {selectedCandidate?.name}
              </h1>
              <p className="text-[13px] text-[#0A77FF] pt-3">
                {selectedCandidate?.partyName}
              </p>
            </div>
          </div>
          <p className="line-clamp-2 pt-6 text-[#858C95] text-[13px]">
            {selectedCandidate?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submission;
