import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { icons } from "../../../../lib/icons";
import TableFooterComp from "../TableFooter.Comp";

type Props = {};

const CategoriesListTableComp = (props: Props) => {
  return (
    <div className="mt-6">
      <div className="w-full px-3 py-2 bg-white rounded-2xl">
        <p className="w-full px-3 py-2 font-semibold">Categories</p>

        <Table>
          <TableHeader>
            <TableRow className="w-full px-3">
              <TableHead className="w-1/2">Name</TableHead>
              <TableHead className="w-1/2">Tagged Candidates</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <TableRow key={item}>
                <TableCell className="font-medium">
                  <p className="text-sm text-gray-500 capitalize">
                    Candidate name
                  </p>
                </TableCell>
                <TableCell className="w-[200px]">
                  <p className="text-sm text-gray-500 capitalize">
                    12 Candidates
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooterComp />
      </div>
    </div>
  );
};

export default CategoriesListTableComp;
