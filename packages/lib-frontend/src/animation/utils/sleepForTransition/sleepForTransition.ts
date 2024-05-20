import { THEME_CONFIG } from '@lib/config/theme/theme.constants';
import { type SleepForTransitionModel } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const sleepForTransition = async (): Promise<SleepForTransitionModel> =>
  sleep(THEME_CONFIG.animation.transition + 100);
