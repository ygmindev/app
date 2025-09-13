import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  BUILD_DIR,
  IMAGE_EXTENSION_DEFAULT,
  VIDEO_EXTENSION_DEFAULT,
} from '@lib/config/file/file.constants';
import { _screen } from '@lib/config/screen/_screen';
import { type _ScreenConfigModel, type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { RUNTIME } from '@lib/shared/environment/environment.constants';
import { isCloud } from '@lib/shared/environment/utils/isCloud/isCloud';

export const config = defineConfig<ScreenConfigModel, _ScreenConfigModel>({
  config: _screen,

  params: () => ({
    delay: 1000,

    dimension: { height: 2000, width: 1250 },

    elementTimeout: 10e3,

    imageExtension: IMAGE_EXTENSION_DEFAULT,

    isHeadless: isCloud(),

    isIgnoreMedia: true,

    navigationTimeout: 120000,

    retry: 1,

    // proxies: [
    //   {
    //     password: 'baqs1fbshyxq',
    //     url: 'http://185.199.229.156',
    //     username: 'nvtjqvdh',
    //   },
    // ],
    snapshotPath:
      process.env.NODE_RUNTIME === RUNTIME.AWS_LAMBDA
        ? undefined
        : fromWorking(BUILD_DIR, 'snapshots'),

    videoExtension: VIDEO_EXTENSION_DEFAULT,

    zoom: 0.5,
  }),
});

export default config;
