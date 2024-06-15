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
    if (currentIndex < categories.length - 7) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="p-3 border-2 border-[#E5E5E7] text-[#000000] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdOutlineArrowBackIos />
      </button>
      <div className="flex overflow-hidden mx-4">
        {categories
          .slice(currentIndex, currentIndex + 7)
          .map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 p-2 rounded-[6px] font-[500] ${
                selectedCategory === category
                  ? "bg-[#ECF4FC] text-[#0A77FF]"
                  : "bg-[#F8F9FB] text-[#323539]"
              }`}
            >
              {category}
            </button>
          ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex >= categories.length - 7}
        className="p-3 border-2 border-[#E5E5E7] text-[#000000]  rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default TopBar;
