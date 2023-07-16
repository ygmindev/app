// COMPLETE
export type TaskConfigModel = {
  packageFilename: string;

  taskExtension: string;

  wait: {
    delay: number;
    interval: number;
    timeout: number;
  };
};

export type _TaskConfigModel = void;
