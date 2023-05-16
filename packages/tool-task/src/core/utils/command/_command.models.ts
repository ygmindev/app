export interface _CommandParamsModel {
  command: string;
  isSilent?: boolean;
  onData?(value: string): void;
  root?: string;
}
