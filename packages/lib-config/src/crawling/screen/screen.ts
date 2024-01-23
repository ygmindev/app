import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as configBase } from '@lib/config/crawling/screen/screen.base';

const { config } = defineConfig({
  config: configBase,
});

export { config };
