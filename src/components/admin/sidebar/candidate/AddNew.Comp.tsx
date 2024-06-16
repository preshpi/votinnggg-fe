import React from "react";
import PageTitleComp from "../PageTitle.Comp";
import { Button } from "../../../ui/button";
import { icons } from "../../../../lib/icons";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Textarea } from "../../../ui/textarea";

type Props = {
  handleRemoveAddNew: () => void;
};

const AddNewCandidateComp = ({ handleRemoveAddNew }: Props) => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between w-full">
        <PageTitleComp
          title=" Add Candidate"
          subTitle="By filling out below information create a new candidate profile."
        />
        <div className="flex items-center justify-center gap-x-3">
          <Button variant={"outline"} onClick={handleRemoveAddNew}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-full px-12 py-12 bg-white rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                <img src={icons.defaultAvatar} alt="avatar" />
              </div>
              <div>
                <p className="text-base font-medium text-black">
                  Add Candidate Avatar
                </p>
                <p className="text-sm text-gray-400">
                  Upload clear photos in JPG, PNG, or GIF format. Minimum
                  resolution: 800x600 pixels. Max file size: 2 MB.
                </p>
              </div>
            </div>

            <Button variant={"outline"}>Change avatar</Button>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between w-full gap-x-5">
              <div className="flex flex-col w-full gap-y-2">
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Insert name"
                  className="py-6 bg-[#F8F9FB]"
                />
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <Label htmlFor="name">Party*</Label>
                <Select>
                  <SelectTrigger className="w-full py-6 bg-[#F8F9FB]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a party</SelectLabel>
                      <SelectItem value="one">Party one</SelectItem>
                      <SelectItem value="two">Party two</SelectItem>
                      <SelectItem value="three">Party three</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <Label htmlFor="name">Category*</Label>
                <Select>
                  <SelectTrigger className="w-full py-6 bg-[#F8F9FB]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a category</SelectLabel>
                      <SelectItem value="one">Category one</SelectItem>
                      <SelectItem value="two">Category two</SelectItem>
                      <SelectItem value="three">Category three</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col w-full mt-5 gap-y-2">
              <Label htmlFor="description">Description*</Label>

              <Textarea
                id="description"
                placeholder="About the candidate"
                rows={8}
                className="py-3 bg-[#F8F9FB] resize-none"
              />
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Maximum 300 characters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCandidateComp;
