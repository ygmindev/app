import type { GlobalsConfigModels } from '@lib/config/globals/globals.config.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export const globalsConfig: PartialModel<GlobalsConfigModels> = {
  __DEV__: process.env.NODE_ENV === 'development',
};
