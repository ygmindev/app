import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    dimension: { height: 800, width: 1280 },

    idSelector: (id) => `#${id}`,

    isHeadless: false,

    timeout: 1000,
  } satisfies ScreenConfigModel,
});

export { config };
