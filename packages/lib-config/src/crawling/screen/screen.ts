import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';

const { config } = defineConfig({
  config: {
    dimension: { height: 800, width: 1280 },

    idSelector: ({ key, paths, value }) =>
      `${key ? `[data-${key}="${value}"]` : `#${value}`}${paths ? ` ${paths.join(' ')}` : ''}`,

    isHeadless: false,

    timeout: 5000,
  } satisfies ScreenConfigModel,
});

export { config };
