export type _ProgressParamsModel = {
  name: string;
};

export type _ProgressModel = {
  increment(value?: number): void;
  start(end: number, start?: number): void;
  stop(): void;
  update(value: number): void;
};
