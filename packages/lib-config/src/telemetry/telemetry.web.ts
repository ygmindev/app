import configBase from '@lib/config/telemetry/telemetry.frontend';
import {
  type _TelemetryConfigModel,
  type TelemetryConfigModel,
} from '@lib/config/telemetry/telemetry.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<TelemetryConfigModel, _TelemetryConfigModel>({
  ...configBase,
});

export default config;
