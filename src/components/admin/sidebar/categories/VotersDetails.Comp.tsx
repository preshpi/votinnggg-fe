import React from "react";
import PageTitleComp from "../PageTitle.Comp";
import { Button } from "../../../ui/button";
import { DetailProp } from "../../../../types/voting";
import { icons } from "../../../../lib/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";

type Props = {
  handleShowDetails: () => void;
  details: DetailProp;
};

const VotersDetails = ({ handleShowDetails, details }: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleReject = () => {};

  return (
    <>
      <Dialog onOpenChange={handleModal} open={showModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <img src={icons.warning} alt="warning" className="" />
              <p className="mt-3">Are you sure?</p>
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to reject this voter? This action can not be
              undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-center w-full gap-x-5">
            <Button variant={"outline"} onClick={handleModal}>
              Cancel
            </Button>
            <Button className="text-white bg-red-500" onClick={handleReject}>
              Reject
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-5">
        <div className="flex items-center justify-between w-full">
          <PageTitleComp title={`${details.name} details`} />
          <div className="flex items-center justify-center gap-x-3">
            <Button
              variant={"outline"}
              className="text-red-500 border-red-500"
              onClick={handleModal}
            >
              Reject
            </Button>
            <Button>Approve</Button>
          </div>
        </div>

        <div className="w-full px-12 py-12 mt-6 bg-white rounded-2xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start w-1/2 gap-x-6">
              <div className="w-[100px] h-[100px] overflow-hidden rounded-lg">
                <img
                  src={icons.avatarLarge}
                  alt={details.name}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="text-base font-semibold text-black">
                    {details.name}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm text-gray-500">NIN No.</p>
                  <p className="text-base font-semibold text-black">
                    {details.nin}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2 gap-y-5">
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-base font-semibold text-black">
                  {details.phone}
                </p>
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-base font-semibold text-black">
                  {details.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotersDetails;
