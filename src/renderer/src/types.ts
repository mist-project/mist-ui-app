export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ApiResponse<T> = {
  data: T;
  Meta: null;
};

export type Appserver = {
  id: string;
  name: string;
  is_owner: boolean;
};

export type Channel = {
  id: string;
  name: string;
  appserver_id: string;
};

export type AppserverRole = {
  id: string;
  name: string;
  appserver_id: string;
};
