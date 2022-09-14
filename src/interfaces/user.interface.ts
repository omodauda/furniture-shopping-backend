export interface UserProfile {
  fullName: string;
  email: string;
  photo: string | null;
  addresses: object[];
  orders: object[];
}