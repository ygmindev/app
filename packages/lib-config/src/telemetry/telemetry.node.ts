import { _telemetry } from '@lib/config/telemetry/_telemetry';
import { config as configBase } from '@lib/config/telemetry/telemetry.base';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _telemetry,

  config: configBase,
});

export { _config, config };
