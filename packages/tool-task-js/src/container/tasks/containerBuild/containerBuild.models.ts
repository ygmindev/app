import { type ContainerConfigModel } from '@lib/config/container/container.models';

export type ContainerBuildParamsModel = Pick<ContainerConfigModel, 'dockerfilename'>;

export type ContainerBuildModel = {};
