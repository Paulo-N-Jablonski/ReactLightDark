import { User } from "./user";

export type StackParamList = {
  Home: undefined;
  UserDetails: {
    user: User;
  };
};