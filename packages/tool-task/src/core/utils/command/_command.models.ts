export interface _CommandParamsModel {
  command: string;
  isNew?: boolean;
  isSilent?: boolean;
  onData?(value: string): void;
  onError?(value: string): void;
  root?: string;
}
