import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';

export type ContainerConfigModel = {
  dockerPathname?: string;
  environment?: Partial<EnvironmentConfigModel>;
  ignore?: Array<string>;
  image?: string;
  password?: string;
  platform?: string;
  server?: string;
  tag?: string;
  username?: string;
};
