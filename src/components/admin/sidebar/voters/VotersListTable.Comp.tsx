import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { IoCheckmark } from "react-icons/io5";
import TableFooterComp from "../TableFooter.Comp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { DetailProp } from "../../../../types/voting";
import { icons } from "../../../../lib/icons";

type Props = {
  handleDetailSetup: (detail: DetailProp) => void;
};

const VotersListTableComp = ({ handleDetailSetup }: Props) => {
  // FUNCTIONS
  const handleDetailSetting = (detail: DetailProp) => {
    handleDetailSetup(detail);
  };

  return (
    <div className="mt-6">
      <div className="w-full px-3 py-2 bg-white rounded-2xl">
        <p className="w-full px-3 py-2 font-semibold">Voters</p>

        <Table>
          <TableHeader>
            <TableRow className="w-full px-3">
              <TableHead>Name</TableHead>
              <TableHead>NIN No.</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[0, 1, 2].map((item) => (
              <TableRow
                key={item}
                onClick={() =>
                  handleDetailSetting({
                    name: "Wade Warren",
                    nin: "284855360422",
                    phone: "(405) 555-0128",
                    email: "debbie.baker@example.com",
                    avatar: icons.avatar,
                  })
                }
              >
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    Wade Warren
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    284855360422
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    (405) 555-0128
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    debbie.baker@example.com
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-blue-500 capitalize">New Entry</p>
                </TableCell>
                <TableCell>
                  <span className="text-blue-500">
                    <IoCheckmark />
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-2xl">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </TableCell>
              </TableRow>
            ))}

            <TableRow
              onClick={() =>
                handleDetailSetting({
                  name: "Jenny Wilson",
                  nin: "985074154052",
                  phone: "(308) 555-0121",
                  email: "N/A",
                  avatar: icons.avatar,
                })
              }
            >
              <TableCell>
                <p className="text-sm text-gray-500 capitalize">Jenny Wilson</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500 capitalize">985074154052</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500 capitalize">
                  (308) 555-0121
                </p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500 capitalize">N/A</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500 capitalize">Approved</p>
              </TableCell>
              <TableCell>
                <span>{/* <IoCheckmark /> */}</span>
              </TableCell>
              <TableCell>
                <span className="text-2xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </TableCell>
            </TableRow>

            {[0, 1, 2, 3].map((item) => (
              <TableRow
                key={item}
                onClick={() =>
                  handleDetailSetting({
                    name: "Kathryn Murphy",
                    nin: "078970731391",
                    phone: "(217) 555-0113",
                    email: "alma.lawson@example.com",
                    avatar: icons.avatar,
                  })
                }
              >
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    Kathryn Murphy
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    078970731391
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    (217) 555-0113
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">
                    alma.lawson@example.com
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500 capitalize">Approved</p>
                </TableCell>
                <TableCell>
                  <span>{/* <IoCheckmark /> */}</span>
                </TableCell>
                <TableCell>
                  <span className="text-2xl">
                    <MdOutlineKeyboardArrowRight />
                  </span>
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

export default VotersListTableComp;
