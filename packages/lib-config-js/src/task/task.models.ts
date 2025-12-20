export type TaskConfigModel = {
  promptsExtension: string;

  taskExtension: string;

  tasksPathname: string;

  wait: {
    delay: number;
    interval: number;
    timeout: number;
  };

  workflowExtension: string;

  workflowsPathname: string;
};
