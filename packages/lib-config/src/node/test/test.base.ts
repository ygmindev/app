import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { _test } from '@lib/config/node/test/_test';
import type { _TestConfigModel, TestConfigModel } from '@lib/config/node/test/test.models';
import { extensions } from '@lib/platform/core/utils/extensions/extensions';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const config: TestConfigModel = () => ({
  bundleConfig: bundleConfig(),

  cachePath: fromWorking('.cache/test'),

  coverageOutputPath: fromWorking('coverage'),

  fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

  match: process.env.TEST_MATCH || '*',

  mockPath: fromConfig('node/test/params/__mocks__'),

  root: fromWorking(),

  testExtensions: permuteString(['.e2e', '.spec'], extensions()),

  timeout: 60e3,
});

export const _config: _TestConfigModel = () => _test(config());
