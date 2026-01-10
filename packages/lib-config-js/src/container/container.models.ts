export type ContainerConfigModel = {
  dirname: string;
  ignore: Array<string>;
  image?: string;
  password?: string;
  platform?: string;
  server?: string;
  tag?: string;
  username?: string;
};
