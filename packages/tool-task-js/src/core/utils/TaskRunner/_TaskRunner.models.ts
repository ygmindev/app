export type _TaskRunnerModel = {
  getTask(name: string): (() => Promise<void>) | null;

  registerTask(name: string, task: () => Promise<void>): void;

  registry: Record<string, () => Promise<void>>;
};
