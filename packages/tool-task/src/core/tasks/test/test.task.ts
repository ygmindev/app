import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const test: RegisterParamsModel = { ...runAll, name: 'test', options: { patterns: [/test/] } };

export default test;
