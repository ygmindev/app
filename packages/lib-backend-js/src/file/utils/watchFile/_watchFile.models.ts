export type _WatchFileParamsModel = [
  params: Array<string>,
  options: {
    patterns?: Array<string>;
    onAdd?(pathname: string): Promise<void>;
    onChange?(pathname: string): Promise<void>;
    onDelete?(pathname: string): Promise<void>;
  },
];

export type _WatchFileModel = void;
