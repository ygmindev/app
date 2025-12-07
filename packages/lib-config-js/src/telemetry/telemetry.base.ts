import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { _telemetry } from '@lib/config/telemetry/_telemetry';
import {
  type _TelemetryConfigModel,
  type TelemetryConfigModel,
} from '@lib/config/telemetry/telemetry.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const telemetryConfig = new Config<TelemetryConfigModel, _TelemetryConfigModel>({
  config: _telemetry,

  params: () => {
    const environment = Container.get(Environment);
    return {
      // batchSize: 512,
      // queueSize: 2048,
      batchSize: 5,
      name: environment.variables.APP_TELEMETRY_NAME ?? '',
      queueSize: 5,
      source: environment.variables.APP_UPTRACE_DSN ?? '',
    };
  },
});
