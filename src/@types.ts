// Config Type
export type Config = {
  BASE_URL: string;
  SEARCH_USERS: string;
  GET_USER: string;
};

export type UserProps = {
  avatar_url: string;
  login: string;
  id?: number;
  location: string;
};
