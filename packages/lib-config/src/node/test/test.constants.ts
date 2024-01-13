import { type TestConfigModel } from '@lib-config/node/test/test.models';

export const TEST_CONFIG: Pick<
  TestConfigModel,
  | 'delay'
  | 'dimension'
  | 'eteExtension'
  | 'fileExtensions'
  | 'isBrowser'
  | 'snapshotPrefix'
  | 'specExtension'
  | 'timeout'
> = {
  delay: 500,

  dimension: { height: 800, width: 1280 },

  eteExtension: '.ete',

  fileExtensions: ['.gif', '.jpeg', '.jpg', '.otf', '.png', '.svg', '.ttf', '.woff', '.woff2'],

  isBrowser: true,

  snapshotPrefix: 'snapshot',

  specExtension: '.spec',

  timeout: 120e3,
};
