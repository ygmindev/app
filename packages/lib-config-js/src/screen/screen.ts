import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { FILE_CONFIG } from '@lib/config/file/file.constants';
import { _screen } from '@lib/config/screen/_screen';
import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<ScreenConfigModel, _ScreenConfigModel>({
  config: _screen,

  params: () => ({
    delay: 1000,

    dimension: { height: 5000, width: 1440 },

    elementTimeout: 10e3,

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
        : fromWorking(FILE_CONFIG.buildDir, 'snapshots'),
  }),
});

export default config;
