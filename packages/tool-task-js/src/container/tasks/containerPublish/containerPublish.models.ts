import { type ContainerConfigModel } from '@lib/config/container/container.models';

export type ContainerPublishParamsModel = Pick<ContainerConfigModel, 'dockerfilename' | 'image'>;

export type ContainerPublishModel = {};
