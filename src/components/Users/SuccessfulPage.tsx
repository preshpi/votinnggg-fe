import { Link } from "react-router-dom";
import BigPhone from "../../assets/BigPhone.svg";
import { IoArrowForward } from "react-icons/io5";
const SuccessfulPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img src={BigPhone} alt="phone" />{" "}
      <div className="pt-5 max-w-[328px]">
        <h3 className="text-[20px] text-[#323539]">Voting Finish</h3>
        <p className="text-[14px] text-[#858C95]">
          Your voting has been finished. Now you can see the real-time voting
          count from the below link.
        </p>
        <Link
          to="/result"
          className="cursor-pointer text-[#0A77FF] font-semibold text-[15px]"
        >
          See Result <IoArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPage;
