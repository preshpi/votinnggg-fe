// selected, candidate, setSelected
interface CandidateCardProps {
	selected: boolean;
	candidate?: any;
	setSelected: (id: string) => void;
}
const CandidateCard = ({ selected, setSelected }: CandidateCardProps) => {
	return (
		<div className="flex w-[474px] gap-2 max-w-full rounded-md">
			<div className="w-[114px] bg-gray-400  h-[106px]"></div>
			<div>
				<div className="flex justify-between gap-2">
					<div className="">
						<h1 className="text-lg font-semibold ">Lisa Clarc</h1>
						<p className="text-[13px] text-[#0A77FF]">Party name</p>
					</div>
					<input type="radio" checked={selected} onChange={() => setSelected("1")} />
				</div>
				<p className="line-clamp-2">
					Lisa's proactive support and problem-solving abilities make her an invaluable
					advocate for our customers.
				</p>
			</div>
		</div>
	);
};

export default CandidateCard;
