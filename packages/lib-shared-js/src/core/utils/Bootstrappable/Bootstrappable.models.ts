export type BootstrappableModel = {
  cleanUp(): Promise<void>;
  initialize(): Promise<void>;
  onCleanUp?(): Promise<void>;
  onInitialize?(): Promise<void>;
};
