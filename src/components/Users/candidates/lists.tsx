import { useState } from "react";
import { contentMap } from "../../../lib/data";
import {
  CandidateListProps,
  CategoryViewProps,
} from "../../../types/candidate";
import Card from "./cards";

const CandidateList: React.FC<CategoryViewProps> = ({
  category,
  onCardClick,
}) => {
  const content = contentMap[category] || {};
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidateListProps | null>(null);

  const handleSelectCandidate = (candidate: CandidateListProps) => {
    setSelectedCandidate(candidate);
    onCardClick(candidate); 
  };

  return (
    <div className="pt-6 w-full">
      <h4 className="text-[24px] font-semibold text-[#323539]">
        Candidate List
      </h4>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {content.map((candidate) => (
          <div key={candidate.id}>
            <Card
              image={candidate.image}
              alt={candidate.name}
              name={candidate.name}
              partyName={candidate.partyName}
              description={candidate.description}
              onSelect={() => handleSelectCandidate(candidate)}
              isSelected={
                selectedCandidate !== null &&
                selectedCandidate.id === candidate.id
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
