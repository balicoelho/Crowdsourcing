declare interface IAction {
  img: string;
  title: string;
  author: string;
  description: string;
  address: AddressType;
  ammountCollected: number;
  totalGoal: number;
  deadline: string;
}

declare interface AddressType {
  uf: string;
  city: string;
  neighborhood: string;
}
