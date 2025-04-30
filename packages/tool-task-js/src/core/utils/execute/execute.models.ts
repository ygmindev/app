export type ExecuteParamsModel = {
  command: string;
  isPipe?: boolean;
  onError?(e: Error): void;
  onFinish?(pid: number): void;
  onMessage?(message: string): void;
  onStart?(pid: number): void;
  root?: string;
};

export type ExecuteModel = string;
