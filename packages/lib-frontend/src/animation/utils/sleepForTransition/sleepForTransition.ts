import { THEME_ANIMATION } from '@lib/config/theme/theme.constants';
import { type SleepForTransitionModel } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const sleepForTransition = async (): Promise<SleepForTransitionModel> =>
  sleep(THEME_ANIMATION.transition + 100);
