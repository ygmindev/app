import { _lintConfig } from '@lib/config/node/lint/_lint.config';
import { lintConfig as config } from '@lib/config/node/lint/configs/lint.config';

export const lintConfig = _lintConfig(config);
