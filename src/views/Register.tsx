import { useState } from "react";
import Page1 from "./Register/Page1";
import Page2 from "./Register/Page2";
import { BiCheck } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
	const [step, setStep] = useState<0 | 1>(1);
	const [completed] = useState<boolean>(false);
	const handleNext = () => {
		setStep(1);
	};

	return (
		<div>
			{completed ? (
				<div>
					<BiCheck />
					<h1>Registration Successful</h1>
					<p>
						Your registration as a voter has been successful. Now you can Sign In
						through the sign In link or using the button below.
					</p>
					<div>
						<p>Sign In Now</p>
						<span>
							{" "}
							<BsArrowRight />
						</span>
					</div>
				</div>
			) : (
				<form action="">
					{step === 0 && <Page1 next={handleNext} />}
					{step === 1 && <Page2 />}
					<p>
						Already have an account? <span>Log in</span>
					</p>
				</form>
			)}
		</div>
	);
};

export default Register;
