import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR, IMAGE_EXTENSION } from '@lib/config/file/file.constants';
import { _screen } from '@lib/config/screen/_screen';
import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<ScreenConfigModel, _ScreenConfigModel>({
  config: _screen,

  params: () => ({
    delay: 1000,

    dimension: { height: 700, width: 750 },

    elementTimeout: 10e3,

    imageExtension: IMAGE_EXTENSION,

    isHeadless: true,

    isIgnoreMedia: true,

    navigationTimeout: 120000,

    // proxies: [
    //   {
    //     password: 'baqs1fbshyxq',
    //     url: 'http://185.199.229.156',
    //     username: 'nvtjqvdh',
    //   },
    // ],

    snapshotPath:
      process.env.NODE_ENV === 'production' ? undefined : fromWorking(BUILD_DIR, 'snapshots'),
  }),
});

export default config;
