import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const lint: RegisterParamsModel = { ...runAll, name: 'lint', options: { patterns: [/lint/] } };

export default lint;
