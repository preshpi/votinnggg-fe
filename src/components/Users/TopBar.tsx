import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const categories: string[] = Array.from(
  { length: 10 },
  (_, i) => `Category ${i + 1}`
);

type TopBarProps = {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
};

const TopBar = ({
  setSelectedCategory,
  selectedCategory,
  setCurrentIndex,
  currentIndex,
}: TopBarProps) => {
  const handleNext = () => {
    if (currentIndex < categories.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="p-2 border-2 border-[#E5E5E7] text-[#000000] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdOutlineArrowBackIos />
      </button>
      <div className="flex overflow-hidden w-full max-w-[960px] gap-3 mx-4">
        {categories
          .slice(currentIndex, currentIndex + 5)
          .map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 py-2 w-full text-[12px] lg:text-[15px] rounded-[6px] font-[500] ${
                selectedCategory === category
                  ? "bg-[#ECF4FC] text-[#0A77FF] w-full"
                  : "bg-[#F8F9FB] text-[#323539] w-full"
              }`}
            >
              {category}
            </button>
          ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex >= categories.length - 5}
        className="p-2 border-2 border-[#E5E5E7] text-[#000000]  rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default TopBar;
