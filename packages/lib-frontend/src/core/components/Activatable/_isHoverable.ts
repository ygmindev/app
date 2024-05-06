import { type _IsHoverableModel } from '@lib/frontend/core/components/Activatable/_isHoverable.models';
import { isServer } from '@lib/platform/core/utils/isServer/isServer';

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

export const _isHoverable = (): _IsHoverableModel => isEnabled;
