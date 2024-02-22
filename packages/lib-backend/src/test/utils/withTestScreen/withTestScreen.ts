// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
// import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type WithTestScreenModel,
  type WithTestScreenParamsModel,
} from '@lib/backend/test/utils/withTestScreen/withTestScreen.models';
// import { config as screenConfig } from '@lib/config/crawling/screen/screen';
import { config as testConfig } from '@lib/config/node/test/test.base';
// import { slug } from '@lib/shared/core/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';

export const withTestScreen = async (
  ...[callback, options]: WithTestScreenParamsModel
): Promise<WithTestScreenModel> => {
  const { outputPath } = testConfig();
  return withScreen(
    (screen) =>
      callback({
        ...screen,
        snapshot: async (params) => {
          const img = await screen.snapshot({ ...params, filename: undefined });
          // expect(img).toMatchImageSnapshot({
          //   customDiffDir: fromWorking(outputPath, 'diffs'),
          //   customReceivedDir: fromWorking(outputPath, 'received'),
          //   customSnapshotIdentifier: ({ counter, currentTestName }) =>
          //     joinPaths([slug(currentTestName), counter.toString(), params?.filename]),
          //   customSnapshotsDir: fromWorking(screenConfig.snapshotPath),
          // });
          return img;
        },
      }),
    options,
  );
};
