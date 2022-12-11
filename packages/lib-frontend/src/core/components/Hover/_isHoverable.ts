let isEnabled = !import.meta.env.SSR && process.env.NODE_ENV === 'test';

if (!import.meta.env.SSR) {
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
