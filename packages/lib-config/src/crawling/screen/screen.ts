import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    cachePath: joinPaths([fileConfig.buildPath, 'cache']),

    delay: 4000,

    delayDefault: 500,

    dimension: { height: 2000, width: 1200 },

    isHeadless: true,

    isIgnoreImage: true,

    isIgnoreStyle: true,

    maxConcurrency: 3,

    snapshotPath: joinPaths([fileConfig.buildPath, 'snapshots']),

    timeout: 15000,
  } satisfies ScreenConfigModel,
});

export { config };
