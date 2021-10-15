import { ProductProps } from '@/types';

export const calculateTotal = (items: ProductProps[]) => {
  return items.reduce((acc, curr) => {
    return acc + curr.priceMember;
  }, 0);
};
