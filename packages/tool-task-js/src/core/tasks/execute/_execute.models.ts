export type _ExecuteParamsModel = {
  command: string;
  isInteractive?: boolean;
  isSilent?: boolean;
  root?: string;
  onFinish?(pid: number): void;
  onStart?(pid: number): void;
};

export type _ExecuteModel = string;
