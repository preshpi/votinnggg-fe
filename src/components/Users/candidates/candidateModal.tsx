import { useRef } from "react";
import { candidateModalProps } from "../../../types/candidate";
import Overlay from "../Overlay";
import { motion } from "framer-motion";
import { slideDownAnimation } from "../../../lib/animations";
import { PiInfoThin } from "react-icons/pi";

const CandidateModal: React.FC<candidateModalProps> = ({
  show,
  setShow,
  candidate,
  onSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  if (!candidate) return null;

  const handleCancel = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Overlay show={show} setShow={setShow} modalRef={modalRef}>
      {show && (
        <motion.section
          variants={slideDownAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={modalRef}
          className="flex w-full max-w-[400px] flex-col gap-5 items-center rounded-[10px] bg-white p-5"
        >
          <div>
            <PiInfoThin className="text-[#EEA23E] w-[32px] h-[32px]" />
            <h3 className="text-[#323539] font-medium text-[20px] pt-5">
              Are you sure?
            </h3>
            <p className="text-[#858C95] text-[16px]">
              Are you sure you want to vote the following selected candidate?
              This action can not be undone.
            </p>
          </div>

          <div
            className="flex w-full h-full shadow gap-2 p-2 bg-[#F8F9FB] cursor-pointer max-w-full rounded-md 
        "
          >
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-32 h-full object-cover rounded-md mb-4"
            />
            <div className="w-full">
              <div className="flex w-full justify-between gap-2">
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-[#323539]">
                    {candidate.name}
                  </h1>
                  <p className="text-[13px] text-[#0A77FF] pt-3">
                    {candidate.partyName}
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 pt-6 text-[#858C95] text-[13px]">
                {candidate.description}
              </p>
            </div>
          </div>

          <div className="w-full gap-3 flex h-full">
            <button
              onClick={handleCancel}
              className="w-full bg-transparent rounded-md text-[#323539] font-semibold py-2 border border-[#E5E5E7]"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-full py-2 rounded-md  font-semibold text-[#FFFFFF] bg-[#0A77FF]"
            >
              Submit
            </button>
          </div>
        </motion.section>
      )}
    </Overlay>
  );
};

export default CandidateModal;
