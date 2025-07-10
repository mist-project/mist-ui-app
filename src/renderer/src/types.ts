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
