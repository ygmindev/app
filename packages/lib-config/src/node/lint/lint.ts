import { _lintConfig } from '@lib/config/node/lint/_lint';
import { lintConfig as config } from '@lib/config/node/lint/configs/lint';

export const lintConfig = _lintConfig(config);
