import { type TestConfigModel } from '#lib-config/node/test/test.models';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';

export type _ScreenParamsModel = Pick<
  TestConfigModel,
  'dimension' | 'imageExtension' | 'outputPath'
>;

export type _ScreenModel = {
  close: CallablePromiseModel;

  goto: CallablePromiseModel<void, string>;

  press: CallablePromiseModel<void, string>;

  snapshot(params: { match?: boolean; name: string }): Promise<void>;

  type(testID: string, value: string): Promise<void>;
};
