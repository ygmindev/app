import { _lintConfig } from '@lib/config/js/lint/_lint.config';
import { lintConfig as config } from '@lib/config/js/lint/configs/lint.config';

export const lintConfig = _lintConfig(config);
