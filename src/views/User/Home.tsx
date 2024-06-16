import { useState } from "react";
import CandidateList from "../../components/Users/candidates/lists";
import TopBar from "../../components/Users/TopBar";
import Footer from "./Footer";
import CandidateModal from "../../components/Users/candidates/candidateModal";
import { CandidateListProps } from "../../types/candidate";
import Submission from "../../components/Users/candidates/Submission";
import { useNavigate } from "react-router-dom";

const categories: string[] = Array.from(
  { length: 10 },
  (_, i) => `Category ${i + 1}`
);

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidateListProps | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = (candidate: CandidateListProps) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    setSubmitted(true);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  const handleNextCategory = () => {
    if (selectedCandidate) {
      navigate("/voting-finish");
    }
  };
  return (
    <>
      <div className="w-[80%] mx-auto p-5">
        <h3 className="text-center pb-7 font-bold text-[32px] text-[#323539]">
          Cast Your Vote Now
        </h3>
        <TopBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {!submitted ? (
          <CandidateList
            category={selectedCategory}
            onCardClick={handleCardClick}
          />
        ) : (
          <Submission selectedCandidate={selectedCandidate} />
        )}{" "}
        <Footer
          selectedCandidate={selectedCandidate}
          onNextCategory={handleNextCategory}
        />
      </div>
      {showModal && (
        <CandidateModal
          show={selectedCandidate !== null}
          setShow={handleCloseModal}
          candidate={selectedCandidate}
          onSubmit={handleModalSubmit}
        />
      )}
    </>
  );
};

export default Home;
