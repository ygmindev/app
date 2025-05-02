import { _lint } from '@lib/config/node/lint/_lint';
import { ESLINT_CONFIG_PARAMS_FILENAME } from '@lib/config/node/lint/lint.constants';

const params = await import(`../../../../../__build__/${ESLINT_CONFIG_PARAMS_FILENAME}`);

export default _lint(params);
