export type ContainerConfigModel = {
  dockerPathname?: string;
  ignore: Array<string>;
  image?: string;
  password?: string;
  platform?: string;
  server?: string;
  tag?: string;
  username?: string;
};
