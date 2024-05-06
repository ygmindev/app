import { type TestConfigModel } from '@lib/config/node/test/test.models';

export const TEST_CONFIG: Pick<
  TestConfigModel,
  'delay' | 'eteExtension' | 'fileExtensions' | 'specExtension' | 'timeout'
> = {
  delay: 500,

  eteExtension: '.ete',

  fileExtensions: ['.gif', '.jpeg', '.jpg', '.otf', '.png', '.svg', '.ttf', '.woff', '.woff2'],

  specExtension: '.spec',

  timeout: 120e3,
};
