import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';
import { config as fileConfig } from '@lib/config/file/file';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { config } = defineConfig({
  config: {
    delay: 2000,

    dimension: { height: 5000, width: 1440 },

    elementTimeout: 5000,

    isHeadless: false,

    isIgnoreMedia: true,

    navigationTimeout: 60000,

    // proxies: [
    //   {
    //     password: 'baqs1fbshyxq',
    //     url: 'http://185.199.229.156',
    //     username: 'nvtjqvdh',
    //   },
    // ],

    snapshotPath:
      process.env.NODE_ENV === 'production'
        ? undefined
        : joinPaths([fileConfig.buildPath, 'snapshots']),
  } satisfies ScreenConfigModel,
});

export { config };
