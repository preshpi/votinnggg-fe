import React from "react";
import { SlArrowRight } from "react-icons/sl";
import CategoriesComp from "../../../components/admin/sidebar/categories/Categories.Comp";
import AddNewCategoryComp from "../../../components/admin/sidebar/categories/AddNewCat.Comp";

const Categories = () => {
  const [currentActivePage, setCurrentActivePage] = React.useState<
    string | null
  >(null);
  const [addNewCandidate, setAddNewCandidate] = React.useState<boolean>(false);

  const handleAddNew = (param: string) => {
    setCurrentActivePage(param);
    setAddNewCandidate(true);
  };

  const handleRemoveAddNew = () => {
    setAddNewCandidate(false);
    setCurrentActivePage(null);
  };

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-start gap-x-3">
        <button
          className={`font-medium ${!currentActivePage ? "text-blue-600" : ""}`}
          onClick={handleRemoveAddNew}
        >
          Categories
        </button>
        {currentActivePage && (
          <>
            <SlArrowRight />
            <p
              className={`font-medium ${
                currentActivePage ? "text-blue-600" : ""
              }`}
            >
              {currentActivePage}
            </p>
          </>
        )}
      </div>

      {!addNewCandidate ? (
        <CategoriesComp handleCurrentPage={handleAddNew} />
      ) : (
        <AddNewCategoryComp handleRemoveAddNew={handleRemoveAddNew} />
      )}
    </div>
  );
};

export default Categories;
