import type { Config } from '@jest/types';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _TestConfigParamsModel {
  cachePath: string;

  command: string;

  configFile: string;

  coverageOutputPath: string;

  fileExtensions: Array<string>;

  isWatch?: boolean;

  match: string;

  mockPath: string;

  mocks?: Array<string | [string, CallableModel<unknown>]>;

  root: string;

  setup?: {
    onAfterAll?: CallablePromiseModel;

    onAfterEach?: CallablePromiseModel;

    onBeforeAll?: CallablePromiseModel;

    onBeforeEach?: CallablePromiseModel;

    onLoad?: CallablePromiseModel;
  };

  testExtensions: Array<string>;

  timeout: number;
}

export type _TestConfigModel = CallablePromiseModel<Config.InitialOptions>;
