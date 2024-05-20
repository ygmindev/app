import { _telemetry } from '@lib/config/telemetry/_telemetry';
import { type TelemetryConfigModel } from '@lib/config/telemetry/telemetry.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _telemetry,

  config: () =>
    ({
      // batchSize: 512,
      // queueSize: 2048,
      batchSize: 5,
      name: process.env.APP_TRACKING_NAME,
      queueSize: 5,
      source: process.env.APP_UPTRACE_SOURCE,
    }) satisfies TelemetryConfigModel,
});

export { _config, config };
