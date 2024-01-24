import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    delay: 2000,

    dimension: { height: 800, width: 1280 },

    isHeadless: false,

    timeout: 10000,
  } satisfies ScreenConfigModel,
});

export { config };
