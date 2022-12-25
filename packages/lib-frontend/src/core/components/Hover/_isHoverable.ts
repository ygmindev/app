import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';

let isEnabled = !isSsr && process.env.NODE_ENV === 'test';

if (!isSsr) {
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = (): void => {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = (): void => {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

export const isHoverable = (): boolean => isEnabled;
