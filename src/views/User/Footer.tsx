import { Button } from "../../components/ui/button";
import { CandidateListProps } from "../../types/candidate";

interface FooterProps {
  selectedCandidate: CandidateListProps | null;
  onNextCategory: () => void;
}

const Footer: React.FC<FooterProps> = ({
  selectedCandidate,
  onNextCategory,
}) => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full py-7 gap-6 justify-center lg:justify-end">
      <Button
        variant="default"
        size="lg"
        onClick={onNextCategory}
        className="bg-transparent border border-[#C8322B] lg:w-[135px] w-full text-[#C8322B] text-[15px] hover:text-white hover:bg-[#C8322B]/90"
      >
        Finish Voting
      </Button>

      <Button
        variant="default"
        size="lg"
        className="font-semibold text-[15px] w-full lg:w-[258px]"
      >
        {!selectedCandidate ? "Submit For Selected Category" : "Next Category"}
      </Button>
    </div>
  );
};

export default Footer;
