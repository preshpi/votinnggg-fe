import React from "react";
import { Button } from "../../../ui/button";
import PageTitleComp from "../PageTitle.Comp";
import CategoriesListTableComp from "./CategoriesListTable.Comp";

type Props = {
  handleCurrentPage: (title: string) => void;
};

const CategoriesComp = ({ handleCurrentPage }: Props) => {
  // FUNCTIONS
  const handleAddNew = () => {
    handleCurrentPage("Add Category");
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <PageTitleComp
          title=" All Categories List"
          subTitle="A comprehensive list of all candidates categories."
        />

        <Button onClick={handleAddNew}>Add New</Button>
      </div>

      <CategoriesListTableComp />
    </div>
  );
};

export default CategoriesComp;
