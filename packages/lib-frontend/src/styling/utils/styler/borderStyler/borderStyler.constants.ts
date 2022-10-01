import type { ShadowStyleIOS, ViewStyle } from 'react-native';

export enum BORDER_DIRECTION {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export const BORDER_SHADOW: ShadowStyleIOS & Pick<ViewStyle, 'elevation'> = {
  elevation: 1,
  shadowColor: '#000',
  shadowOffset: { height: 1, width: 0 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
};
