import { importConfig } from '#lib-config/core/utils/importConfig/importConfig';
import { type TestConfigModel } from '#lib-config/node/test/test.models';
import { _screen } from '#lib-frontend/test/utils/screen/_screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

export const screen = async (): Promise<ScreenModel> => {
  const { config } = await importConfig<TestConfigModel>('node/test/test');
  const { dimension, imageExtension, outputPath, timeout } = config;
  return _screen({ dimension, imageExtension, outputPath, timeout });
};
