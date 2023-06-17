import { isServer } from '#lib-platform/core/utils/isServer/isServer';
import type { CallableModel } from '#lib-shared/core/core.models';

let isEnabled: boolean;

if (!isServer) {
  isEnabled = true;
  let lastTouchTimestamp = 0;

  const enableHover = (): void => {
    if (isEnabled || Date.now() - lastTouchTimestamp < 1000) {
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

export const _isHoverable: CallableModel<boolean> = () => isEnabled;
