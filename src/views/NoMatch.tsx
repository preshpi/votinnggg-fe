import { useNavigate } from "react-router";
const NoMatch = () => {
	const navigate = useNavigate();
	return (
		<div className="flex h-screen w-full flex-col bg-[#F8FAFC] px-4 md:px-12">
			
			<div className="flex h-fit max-w-[600px] flex-col items-center gap-y-6 self-center rounded-lg border border-[#EAF5FF] bg-[#EAF5FF] bg-opacity-20 p-12">
				
				<h1 className="text-2xl font-semibold text-gray-400">
					Oops! This Page cannot be found
				</h1>
				<button
					className="w-fit rounded-md border border-blue-800 px-4 py-2 text-lg text-blue-800"
					onClick={() => navigate("/dashboard")}
				>
					Go to Home Page
				</button>
			</div>
		</div>
	);
};

export default NoMatch;
