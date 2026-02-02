import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type _DockerParamsModel = ContainerConfigModel;

export type _DockerModel = {
  build(): Promise<void>;

  delete(): Promise<void>;

  publish(): Promise<void>;

  run<TType>(args?: Array<string>, env?: PartialModel<EnvironmentConfigModel>): Promise<TType>;
};
