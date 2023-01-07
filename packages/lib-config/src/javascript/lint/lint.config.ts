import { _lintConfig } from '@lib/config/javascript/lint/_lint.config';
import { lintConfig as config } from '@lib/config/javascript/lint/configs/lint.config';

export const lintConfig = _lintConfig(config);
