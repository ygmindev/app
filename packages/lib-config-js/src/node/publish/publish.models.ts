export type PublishConfigModel = {
  assetsPathname?: string;

  name: string;

  publishCommand(): string;
};
