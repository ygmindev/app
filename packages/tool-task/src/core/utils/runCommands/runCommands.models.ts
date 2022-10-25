import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';

export interface RunCommandsParamsModel {
  commands: Array<
    {
      command: string;
      completeMessage?: string;
      root?: string;
    } & EnvironmentOverrideParamsModel
  >;
}
