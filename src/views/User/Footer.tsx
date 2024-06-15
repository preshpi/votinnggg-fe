import { Button } from "../../components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-5 gap-6 justify-end">
      <Button
        variant="default"
        size="lg"
        className="bg-transparent border border-[#C8322B] text-[#C8322B] text-[15px] hover:text-white hover:bg-[#C8322B]/90"
      >
        Finish Voting
      </Button>
      <Button variant="default" size="lg" className="font-semibold text-[15px]">
        Submit For Selected Category
      </Button>
    </div>
  );
};

export default Footer;
