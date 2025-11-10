export type TaskConfigModel = {
  outDir: string;

  promptsExtension: string;

  taskExtension: string;

  wait: {
    delay: number;
    interval: number;
    timeout: number;
  };

  workflowExtension: string;
};
