import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _TestInitializeParamsModel {
  mocks?: Record<string, CallableModel | null>;
  onAfterAll?: CallablePromiseModel;
  onAfterEach?: CallablePromiseModel;
  onBeforeAll?: CallablePromiseModel;
  onBeforeEach?: CallablePromiseModel;
  onLoad?: CallableModel;
}

export interface _TestConfigParamsModel {
  cachePath: string;
  cleanup?: CallablePromiseModel;
  coverageOutputPath: string;
  extensions: Array<string>;
  externals?: Array<string>;
  fileExtensions: Array<string>;
  initialize?: _TestInitializeParamsModel;
  isWatch?: boolean;
  match: string;
  mockPath: string;
  resolveExtensions: Array<string>;
  root: string;
  timeout: number;
}
