export interface _LaunchModel {
  close(): Promise<void>;
  open(route: string): Promise<void>;
}
