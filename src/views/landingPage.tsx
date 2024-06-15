import { Link } from "react-router-dom";
import box from "../assets/voting-box.svg";
import { Button } from "../components/ui/button";
const LandingPage = () => {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full flex flex-col gap-24 items-center justify-center">
        <div className="h-full lg:h-0 md:h-0 flex items-center justify-center">
          <img src={box} alt="votingBox" />
        </div>
        <Link
          to="/voting"
          className="sm:flex sm:justify-end  lg:w-[133px] md:w-[133px] lg:p-0 w-full p-6 items-end  h-24"
        >
          <Button variant="default" size="default" className="w-full py-6">
            Start
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
