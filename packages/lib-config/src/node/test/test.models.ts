import { type Config } from '@jest/types';

import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { type CallableModel, type CallablePromiseModel } from '#lib-shared/core/core.models';

export type TestConfigOptionsModel = { match?: string; root?: string };

export type TestConfigModel = ConfigDynamicModel<
  {
    bundleConfig: BundleConfigModel;

    cachePath: string;

    coverageOutputPath: string;

    fileExtensions: Array<string>;

    isWatch?: boolean;

    mockPath: string;

    mocks?: Array<string | [string, CallableModel<unknown>]>;

    onAfterAll?: CallablePromiseModel;

    onAfterEach?: CallablePromiseModel;

    onBeforeAll?: CallablePromiseModel;

    onBeforeEach?: CallablePromiseModel;

    testExtensions: Array<string>;

    timeout: number;
  },
  TestConfigOptionsModel
>;

export type _TestConfigModel = ConfigDynamicModel<Config.InitialOptions, TestConfigOptionsModel>;
