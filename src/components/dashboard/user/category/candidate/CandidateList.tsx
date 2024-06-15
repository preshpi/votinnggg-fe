import { useState } from "react";
import CandidateCard from "./CandidateCard";

const CandidateList = () => {
	const [selectedCandidate, setSelectedCandidate] = useState("");

	const handleSelection = (id: string) => {
		setSelectedCandidate(id);
	};
	console.log(selectedCandidate);
	return (
		<div>
			<h1>Candidate List</h1>

			<div className="grid grid-cols-2">
				{[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
					<CandidateCard key={index} setSelected={handleSelection} selected={false} />
				))}
			</div>
		</div>
	);
};

export default CandidateList;
