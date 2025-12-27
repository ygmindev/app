import { type TestConfigModel } from '@lib/config/node/test/test.models';

export type TestParamsModel = Pick<TestConfigModel, 'isWatch' | 'match'>;

export type TestModel = {};
