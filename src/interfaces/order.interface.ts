export interface Order {
  total: number;
  orders: OrderItem[]
}

export interface OrderItem {
  quantity: number;
  productId: string;
}