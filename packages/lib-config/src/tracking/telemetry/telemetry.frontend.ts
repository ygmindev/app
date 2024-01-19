import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _telemetry } from '@lib/config/tracking/telemetry/_telemetry';
import { config as configBase } from '@lib/config/tracking/telemetry/telemetry.base';

const { _config, config } = defineConfig({
  _config: _telemetry,

  config: configBase,
});

export { _config, config };
