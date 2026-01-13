export type UseUrlModel = {
  hash?: string;
  push(params: string): void;
  replace(params: string): void;
};
