import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const clean: RegisterParamsModel = { ...runAll, name: 'clean', options: { patterns: [/clean/] } };

export default clean;
