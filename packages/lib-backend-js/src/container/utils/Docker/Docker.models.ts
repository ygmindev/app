import { type _DockerModel } from '@lib/backend/container/utils/Docker/_Docker.models';
import { type ContainerConfigModel } from '@lib/config/container/container.models';

export type DockerModel = _DockerModel;

export type DockerBuildParamsModel = Pick<ContainerConfigModel, 'dockerfilename'>;
