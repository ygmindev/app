import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    delay: 5000,

    dimension: { height: 5000, width: 1440 },

    elementTimeout: 7000,

    isHeadless: false,

    isIgnoreMedia: true,

    navigationTimeout: 60000,

    // proxies: [
    //   {
    //     password: 'baqs1fbshyxq',
    //     url: 'http://38.154.227.167:5868',
    //     username: 'nvtjqvdh',
    //   },
    // ],

    snapshotPath: joinPaths([fileConfig.buildPath, 'snapshots']),
  } satisfies ScreenConfigModel,
});

export { config };
