import FormInput from "../components/FormInput";
import { Button } from "../components/ui/button";

const Login = () => {
	return (
		<div>
			<h1>Lets Sign In</h1>
			<FormInput label="Your Name" placeholder="1234 5679 9012" inputType="text" />
			<FormInput label="Your Phone Number" placeholder="+1 514 5285698" inputType="text" />
			<FormInput label="Your Phone Numebr" placeholder="123 45672 112" inputType="text" />
			<FormInput label="Email Address" placeholder="123 45672 112" inputType="text" />

			<Button className="">Sign Up</Button>
			<Button className="" variant="outline">
				Cancel
			</Button>
			<p>
				Don't have an account? <span>Register</span>
			</p>
		</div>
	);
};

export default Login;
