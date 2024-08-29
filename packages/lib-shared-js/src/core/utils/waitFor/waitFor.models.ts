export type WaitForParamsModel = {
  condition(): boolean;
  interval?: number;
  timeout?: number;
};
