import { config } from '#lib-config/node/test/test.base';
import { APP_URI } from '#lib-frontend/http/http.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _screen } from '#lib-frontend/test/utils/screen/_screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

export const screen = async (): Promise<ScreenModel> => {
  const { dimension, isBrowser, outputPath, snapshotPath, snapshotPrefix, timeout } = config();
  const screen = await _screen({
    dimension,
    isBrowser,
    outputPath,
    snapshotPath,
    snapshotPrefix,
    timeout,
  });
  return {
    ...screen,

    goto: async (route) => screen.goto(`${APP_URI}${trimPathname(route)}`),
  };
};
