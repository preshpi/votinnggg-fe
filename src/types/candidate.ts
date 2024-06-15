import { Dispatch, SetStateAction } from "react";

export type CandidateListProps = {
  id?: string;
  image: string;
  alt: string;
  name: string;
  partyName: string;
  description: string;
};

export type CategoryMap = {
  [key: string]: CandidateListProps[];
};

export type CategoryViewProps = {
  category: string;
  onCardClick: (candidate: CandidateListProps) => void;

};

export interface candidateModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  candidate: CandidateListProps | null;
  onSubmit: () => void;
}
