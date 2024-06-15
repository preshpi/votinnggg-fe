
import FormInput from "../../components/FormInput";
import { Button } from "../../components/ui/button";

interface Page1Props {
	next: () => void;
}
const Page1 = ({ next }: Page1Props) => {
	return (
		<div>
			<h1>General Information</h1>
			<FormInput label="Your Name" placeholder="Insert Name" inputType="text" />
			<FormInput
				label="NIN (National Identification Number)"
				placeholder="123 45672 112"
				inputType="text"
			/>
			<FormInput label="Your Phone Numebr" placeholder="123 45672 112" inputType="text" />
			<FormInput label="Email Address" placeholder="123 45672 112" inputType="text" />

			<Button className="" onClick={next}>
				Continue
			</Button>
		</div>
	);
};

export default Page1;
