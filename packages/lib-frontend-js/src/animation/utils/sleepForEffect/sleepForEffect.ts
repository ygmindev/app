import { THEME_ANIMATION } from '@lib/config/theme/theme.constants';
import { type SleepForEffectModel } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const sleepForEffect = async (): Promise<SleepForEffectModel> =>
  sleep(THEME_ANIMATION.effect + 100);
