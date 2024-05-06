import { THEME_CONFIG } from '@lib/config/style/theme/theme.constants';
import { type SleepForEffectModel } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const sleepForEffect = async (): Promise<SleepForEffectModel> =>
  sleep(THEME_CONFIG.animation.effect + 100);
