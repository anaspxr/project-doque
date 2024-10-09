export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
}

export interface UserData extends User {
  password: string;
}
