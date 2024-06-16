import React from "react";
import PageTitleComp from "../PageTitle.Comp";
import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

type Props = {
  handleRemoveAddNew: () => void;
};

const AddNewCategoryComp = ({ handleRemoveAddNew }: Props) => {
  const [inputCount, setInputCount] = React.useState<number[]>([1]);

  const handleMathCount = (type: "INC" | "DEC", index?: number) => {
    switch (type) {
      case "INC":
        setInputCount((prevVal) => [...prevVal, prevVal.length + 1]);
        break;
      case "DEC":
        if (inputCount.length > 1) {
          setInputCount((prevVal) => prevVal.filter((_, i) => i !== index));
        }
        break;
      default:
        break;
    }
  };

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
          {inputCount.map((val, index) => (
            <div className="flex flex-col w-1/2 mt-5 gap-y-2" key={val}>
              <Label htmlFor="cat01">Category Name*</Label>

              <div className="flex items-center justify-start gap-x-2">
                <Input
                  type="text"
                  id="cat01"
                  placeholder="Insert category name"
                  className="py-6 bg-[#F8F9FB] w-[80%]"
                />

                {inputCount.length > 1 && (
                  <button
                    className="text-2xl text-gray-500"
                    onClick={() => handleMathCount("DEC", index)}
                  >
                    <CiCircleMinus />
                  </button>
                )}

                {inputCount.length === index + 1 && (
                  <button
                    className="text-2xl text-gray-500"
                    onClick={() => handleMathCount("INC")}
                  >
                    <CiCirclePlus />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddNewCategoryComp;
