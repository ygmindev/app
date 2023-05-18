import type { Config } from '@jest/types';
import { ConfigStaticModel, RunWithConfigParamsModel } from '@lib/config/core/core.models';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export type TestConfigModel = ConfigStaticModel<RunWithConfigParamsModel & {
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
}>;

export type _TestConfigModel = CallablePromiseModel<Config.InitialOptions>;
