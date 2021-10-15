export type MenuItemProps = {
  label: string;
  link: string;
};

export type ProductProps = {
  available: boolean;
  image: string;
  name: string;
  priceMember: number;
  pricePromotional: number;
  priceStock: number;
};

export type CartProps = {
  total: number;
  items: ProductProps[];
};

export type ToastProps = {
  isVisible: boolean;
  message: string;
  timeout: number;
};

export enum CartActionsEnum {
  ADD = 1,
  DELETE = 2,
  INCREASE = 3,
  DECREASE = 4,
}
