import { config } from '#lib-config/node/test/test.base';
import { APP_URI } from '#lib-frontend/http/http.constants';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _withScreen } from '#lib-frontend/test/utils/withScreen/_withScreen';
import {
  type WithScreenModel,
  type WithScreenParamsModel,
} from '#lib-frontend/test/utils/withScreen/withScreen.models';

export const withScreen = async (
  ...[callback, options]: WithScreenParamsModel
): Promise<WithScreenModel> => {
  const { dimension, isBrowser, outputPath, snapshotPath, snapshotPrefix, timeout } = config();
  await _withScreen(
    (screen) =>
      callback({
        ...screen,
        goto: async (route) => screen.goto(`${APP_URI}${trimPathname(route)}`),
      }),
    {
      ...options,
      dimension,
      isBrowser,
      outputPath,
      snapshotPath,
      snapshotPrefix,
      timeout,
    },
  );
};