export type _ExecuteParamsModel = {
  command: string;
  isSilent?: boolean;
  onFinish?(pid: number): void;
  onStart?(pid: number): void;
  root?: string;
};

export type _ExecuteModel = string;
