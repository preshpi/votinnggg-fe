import React from "react";

type Props = {
  title: string;
  subTitle?: string;
};

const PageTitleComp = ({ title, subTitle }: Props) => {
  return (
    <div>
      <p className="text-2xl font-semibold capitalize">{title}</p>
      <p className="text-gray-300 text-sm mt-0.5">{subTitle}</p>
    </div>
  );
};

export default PageTitleComp;
