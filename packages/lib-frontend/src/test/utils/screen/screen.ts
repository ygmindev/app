import { config } from '#lib-config/node/test/test.base';
import { _screen } from '#lib-frontend/test/utils/screen/_screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

export const screen = async (): Promise<ScreenModel> => {
  const { delay, dimension, isBrowser, outputPath, snapshotPath, snapshotPrefix, timeout } =
    config();
  return _screen({
    delay,
    dimension,
    isBrowser,
    outputPath,
    snapshotPath,
    snapshotPrefix,
    timeout,
  });
};
