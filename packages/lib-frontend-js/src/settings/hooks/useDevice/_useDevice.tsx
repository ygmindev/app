import { type _UseDeviceModel } from '@lib/frontend/settings/hooks/useDevice/_useDevice.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const _useDevice = (): _UseDeviceModel => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)');
  return {
    brightness: isDark.matches ? STYLE_BRIGHTNESS.DARK : STYLE_BRIGHTNESS.LIGHT,
  };
};
