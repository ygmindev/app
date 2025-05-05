import { _lint } from '@lib/config/node/lint/_lint';
import { ESLINT_CONFIG_PARAMS_FILENAME } from '@lib/config/node/lint/lint.constants';

let config;

try {
  const params = await import(`../../../../../__build__/${ESLINT_CONFIG_PARAMS_FILENAME}`);
  config = _lint(params);
} catch (_) {}

export default config;
