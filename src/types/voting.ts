export type VotingCardProps = {
  id: number;
  name: string;
  partyName: string;
  departmentName: string;
  numberOfVotes: number;
  image: string;
};

export type PartyCardProps = {
  id: number;
  partyName: string;
  numberOfVotes: number;
  image: string;
};

export type DetailProp = {
  name: string;
  email: string;
  nin: string;
  phone: string;
  avatar: string;
};
