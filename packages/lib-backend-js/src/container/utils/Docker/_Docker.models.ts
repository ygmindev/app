import { type DockerBuildParamsModel } from '@lib/backend/container/utils/Docker/Docker.models';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type _DockerParamsModel = {
  container: ContainerConfigModel;
};

export type _DockerModel = {
  build(params?: DockerBuildParamsModel): Promise<void>;

  delete(): Promise<void>;

  publish(isBuild?: boolean): Promise<void>;

  run<TType>(args?: Array<string>, env?: PartialModel<EnvironmentConfigModel>): Promise<TType>;
};
