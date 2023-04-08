import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseBrightnessModel } from '@lib/frontend/style/hooks/useBrightness/useBrightness.models';
import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';
import { DEVICE } from '@lib/shared/user/user.constants';
import { useColorScheme } from 'react-native';

export const useBrightness = (): UseBrightnessModel => {
  const actions = useActions();
  const brightness = useStore((state) => state.style.brightness);
  const device = useColorScheme();
  return [
    brightness === DEVICE ? (device as StyleBrightnessModel) : brightness,
    (value) => actions?.style.brightnessSet(value),
  ];
};
