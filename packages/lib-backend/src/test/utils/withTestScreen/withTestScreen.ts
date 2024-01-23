import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type WithTestScreenModel,
  type WithTestScreenParamsModel,
} from '@lib/backend/test/utils/withTestScreen/withTestScreen.models';
import { config as testConfig } from '@lib/config/node/test/test.base';
import { slug } from '@lib/frontend/route/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';

export const withTestScreen = async (
  callback: WithTestScreenParamsModel,
): Promise<WithTestScreenModel> => {
  const { outputPath, snapshotPath, snapshotPrefix } = testConfig();
  return withScreen((screen) =>
    callback({
      ...screen,
      snapshot: async () => {
        const img = await screen.snapshot();
        expect(img).toMatchImageSnapshot({
          customDiffDir: fromWorking(outputPath, 'diffs'),
          customReceivedDir: fromWorking(outputPath, 'received'),
          customSnapshotIdentifier: ({ counter, currentTestName }) =>
            joinPaths([slug(currentTestName), `${snapshotPrefix}-${counter.toString()}`]),
          customSnapshotsDir: fromWorking(snapshotPath),
        });
        return img;
      },
    }),
  );
};
