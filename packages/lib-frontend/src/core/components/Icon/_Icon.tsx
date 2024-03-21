import { type _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import {
  FONTAWESOME_ICONS,
  ICONS,
  IONIC_ICONS,
  MATERIAL_ICONS,
} from '@lib/frontend/core/components/Icon/Icon.constants';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { forwardRef } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { type IconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const _Icon: SFCModel<_IconPropsModel, TextStyleModel> = forwardRef(
  ({ icon, ...props }, ref) => {
    const { styles } = useStyles<_IconPropsModel, TextStyleModel>({ props });
    if (icon) {
      const Component = (IONIC_ICONS as Record<string, string>)[icon]
        ? Ionicons
        : (FONTAWESOME_ICONS as Record<string, string>)[icon]
          ? FontAwesome
          : (MATERIAL_ICONS as Record<string, string>)[icon]
            ? MaterialIcons
            : null;

      return (
        Component && (
          <Component
            {...props}
            name={(ICONS as Record<string, string>)[icon] ?? ''}
            ref={ref as null}
            style={styles as IconProps['style']}
          />
        )
      );
    }
    return null;
  },
);
