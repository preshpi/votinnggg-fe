import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TableFooterComp = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-t-gray-200">
      <button className="flex items-center justify-center text-gray-400 bg-transparent gap-x-2">
        <FaArrowLeft />
        <span>Prev</span>
      </button>

      <div className="flex items-center justify-center gap-x-5">
        {[1, 2, "...", 5, 6].map((item) => (
          <button key={item} className="text-gray-400">
            {item}
          </button>
        ))}
      </div>

      <button className="flex items-center justify-center text-gray-400 bg-transparent gap-x-2">
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default TableFooterComp;
