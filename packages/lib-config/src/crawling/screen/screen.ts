import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    delay: 5000,

    delayDefault: 500,

    dimension: { height: 1000, width: 1000 },

    isHeadless: false,

    timeout: 10000,
  } satisfies ScreenConfigModel,
});

export { config };
