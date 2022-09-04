export interface ProductData {
  name: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
  productCategoryId: string;
}

export interface ProductImage {
  publicId: string;
  url: string;
}