import { telemetryConfig as configBase } from '@lib/config/telemetry/telemetry.frontend';

let telemetryConfig = configBase;

telemetryConfig = telemetryConfig.extend(() => ({}));

export { telemetryConfig };
