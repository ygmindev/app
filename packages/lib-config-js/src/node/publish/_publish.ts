import {
  type _PublishConfigModel,
  type PublishConfigModel,
} from '@lib/config/node/publish/publish.models';

export const _publish = ({ assetsPathname, name }: PublishConfigModel): _PublishConfigModel => ({
  assets: assetsPathname
    ? {
        binding: 'ASSETS',
        directory: assetsPathname,
      }
    : undefined,

  compatibility_date: '2025-04-01',

  name,

  no_bundle: true,
});
