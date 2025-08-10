export type CreateJobParamsModel = {
  job(): Promise<void>;
  onFinish?(): Promise<void>;
};

export type CreateJobModel = void;
