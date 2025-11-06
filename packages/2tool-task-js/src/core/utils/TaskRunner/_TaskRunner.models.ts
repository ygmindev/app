export type _TaskRunnerModel = {
  registry: Record<string, () => Promise<void>>;

  getTask(name: string): (() => Promise<void>) | null;

  registerTask(name: string, task: () => Promise<void>): void;
};
