import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    delay: 4000,

    delayDefault: 500,

    dimension: { height: 2000, width: 1000 },

    isHeadless: true,

    snapshotPath: joinPaths([fileConfig.buildPath, 'snapshots']),

    timeout: 10000,
  } satisfies ScreenConfigModel,
});

export { config };
