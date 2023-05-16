import type { Config } from '@jest/types';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export type _TestConfigParamsModel = RunWithConfigStringParamsModel & {
  cachePath: string;

  coverageOutputPath: string;

  fileExtensions: Array<string>;

  isWatch?: boolean;

  match: string;

  mockPath: string;

  mocks?: Array<string | [string, CallableModel<unknown>]>;

  onAfterAll?: CallablePromiseModel;

  onAfterEach?: CallablePromiseModel;

  onBeforeAll?: CallablePromiseModel;

  onBeforeEach?: CallablePromiseModel;

  root: string;

  testExtensions: Array<string>;

  timeout: number;
};

export type _TestConfigModel = CallablePromiseModel<Config.InitialOptions>;
