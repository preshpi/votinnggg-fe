import { useState } from "react";
import CandidateList from "../../components/Users/candidates/lists";
import TopBar from "../../components/Users/TopBar";
import Footer from "./Footer";

const categories: string[] = Array.from(
  { length: 10 },
  (_, i) => `Category ${i + 1}`
);

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-[80%] mx-auto p-5">
      <h3 className="text-center font-bold text-[32px] text-[#323539]">
        Cast Your Vote Now
      </h3>
      <TopBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <CandidateList category={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Home;
