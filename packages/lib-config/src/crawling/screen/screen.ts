import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    delay: 3000,

    dimension: { height: 700, width: 1000 },

    isHeadless: false,

    timeout: 10000,
  } satisfies ScreenConfigModel,
});

export { config };
