export interface ICategory {
  id: number;
  name: string;
  desciption: string;
}
class test {
  products: ICategory[] = [
    {
      id: 1,
      name: 'Laptops',
      desciption: 'This is description',
    },
    {
      id: 2,
      name: 'Tablets',
      desciption: 'This is description',
    },
    {
      id: 3,
      name: 'Mobiles',
      desciption: 'This is description',
    },
  ];
}

export enum DiscountOffers {
  'No Discount' = 0,
  '10%' = 10,
  '15%' = 20,
}
