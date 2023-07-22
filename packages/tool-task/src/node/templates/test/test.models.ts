import { type TestConfigModel } from '#lib-config/node/test/test.models';

export type TestParamsModel = Pick<TestConfigModel, 'testExtensions'> & {
  configFilePath?: string;
  isPrompt?: boolean;
  isWatch?: boolean;
  testMatch?: string;
};
