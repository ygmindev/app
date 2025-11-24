import { telemetryConfig as configBase } from '@lib/config/telemetry/telemetry.base';

let telemetryConfig = configBase;

telemetryConfig = telemetryConfig.extend(() => ({}));

export { telemetryConfig };
