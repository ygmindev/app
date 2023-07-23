import { type TestConfigModel } from '#lib-config/node/test/test.models';

export type _ScreenParamsModel = Pick<
  TestConfigModel,
  'delay' | 'dimension' | 'isBrowser' | 'outputPath' | 'snapshotPrefix' | 'timeout'
>;

export type _ScreenModel = {
  close(): Promise<void>;

  goto(params: string): Promise<void>;

  press(params: string): Promise<void>;

  snapshot(params?: { match?: boolean }): Promise<void>;

  type(testID: string, value: string): Promise<void>;
};
