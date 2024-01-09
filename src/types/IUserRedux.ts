export interface User {
  id: number;
  name: string;
  isLogin: boolean;
}

export interface StateUser {
  user: User | null;
  isLogin: boolean;
  isLoading: boolean;
  error: string | null;
}
