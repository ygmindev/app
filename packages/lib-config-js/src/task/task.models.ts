export type TaskConfigModel = {
  queue: string;

  taskExtension: string;

  tasksPathname: string;

  wait: {
    delay: number;
    interval: number;
    timeout: number;
  };

  workerCountDefault: number;

  workflowExtension: string;

  workflowsPathname: string;
};
