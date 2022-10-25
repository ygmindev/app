export interface _CommandParamsModel {
  command: string;
  isNew?: boolean;
  isSilent?: boolean;
  onData?(value: string): void;
  root?: string;
}
