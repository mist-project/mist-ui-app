export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type ApiResponse<T> = {
  data: T;
  Meta: null;
};
