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

const CandidateListTableComp = (props: Props) => {
  return (
    <div className="mt-6">
      <div className="w-full px-3 py-2 bg-white rounded-2xl">
        <p className="w-full px-3 py-2 font-semibold">Candidates</p>

        <Table>
          <TableHeader>
            <TableRow className="px-3">
              <TableHead className="w-[100px]">Party</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Deadline</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <TableRow key={item}>
                <TableCell className="font-medium">
                  <img src={icons.usaflag} alt="party flag" className="" />
                </TableCell>
                <TableCell className="w-[200px]">
                  <div className="flex items-center justify-start gap-x-2">
                    <div className="w-6 h-6 overflow-hidden rounded">
                      <img src={icons.avatar} alt="avatar" className="" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black capitalize">
                        Lisa Steeve
                      </p>
                      <p className="text-gray-300 capitalize text xs">
                        Party name here
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-400">
                  Transitions between paragraphs are crucial for maintaining a
                  smooth and coherent flow of ideas. These transitions can be
                  achieved through various techniques, such as using
                  transitional words and phrases (e.g., "however," "in
                  contrast"), referring back to previous points, or employing
                  thematic connections.
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

export default CandidateListTableComp;
