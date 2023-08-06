import { type TestConfigModel } from '#lib-config/node/test/test.models';
import { type ScreenModel } from '#lib-frontend/test/utils/withScreen/withScreen.models';

export type _WithScreenParamsModel = [
  callback: (screen: ScreenModel) => Promise<void>,
  options?: Pick<
    TestConfigModel,
    'dimension' | 'isBrowser' | 'outputPath' | 'snapshotPath' | 'snapshotPrefix' | 'timeout'
  >,
];

export type _WithScreenModel = void;
