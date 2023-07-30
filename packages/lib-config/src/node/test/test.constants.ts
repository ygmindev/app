import { type TestConfigModel } from '#lib-config/node/test/test.models';

export const TEST_CONFIG: Pick<TestConfigModel, 'snapshotPath' | 'snapshotPrefix'> = {
  snapshotPath: 'snapshots',

  snapshotPrefix: 'snapshot',
};
