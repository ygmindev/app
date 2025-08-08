import { type ContainerConfigModel } from '@lib/config/container/container.models';

export type _DockerParamsModel = ContainerConfigModel & {
  ignore?: Array<string>;
  rootDir?: string;
  workingDir?: string;
};

export type _DockerModel = {
  build(): Promise<void>;
  publish(): Promise<void>;
};
