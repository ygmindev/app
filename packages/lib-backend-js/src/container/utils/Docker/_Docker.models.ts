import { type ContainerConfigModel } from '@lib/config/container/container.models';

export type _DockerParamsModel = {
  container: ContainerConfigModel;
};

export type _DockerModel = {
  build(): Promise<void>;

  delete(): Promise<void>;

  publish(isBuild?: boolean): Promise<void>;

  run<TType>(args?: Array<string>): Promise<TType>;
};
