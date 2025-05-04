import { type Unstable_RawConfig } from 'wrangler';

export type PublishConfigModel = {
  assetsPathname?: string;

  configPathname: string;

  name: string;

  publishCommand(): string;
};

export type _PublishConfigModel = Unstable_RawConfig;
