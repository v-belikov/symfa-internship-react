export interface IUserRequest {
  username: string;
  password: string;
  id: string;
  email: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
