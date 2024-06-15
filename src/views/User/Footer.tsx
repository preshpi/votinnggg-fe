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
    <div className="flex items-center w-full p-5 gap-6 justify-end">
      <Button
        variant="default"
        size="lg"
        className="bg-transparent border border-[#C8322B] text-[#C8322B] text-[15px] hover:text-white hover:bg-[#C8322B]/90"
      >
        Finish Voting
      </Button>

      <Button
        onClick={onNextCategory}
        variant="default"
        size="lg"
        className="font-semibold text-[15px]"
      >
        {!selectedCandidate ? "Submit For Selected Category" : "Next Category"}
      </Button>
    </div>
  );
};

export default Footer;
