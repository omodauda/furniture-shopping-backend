export interface Order {
  total: number;
  orders: OrderItem[];
  deliveryAddressId: string;
}

export interface OrderItem {
  quantity: number;
  productId: string;
}