import { type _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import {
  FONTAWESOME_ICONS,
  ICONS,
  IONIC_ICONS,
  MATERIAL_ICONS,
  OCTICON_ICONS,
} from '@lib/frontend/core/components/Icon/Icon.constants';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { useMemo } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { type IconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export const _Icon: SFCModel<_IconPropsModel> = ({ icon, ...props }) => {
  const { styles } = useStyles<_IconPropsModel, TextStyleModel>({ props });
  if (icon) {
    const Component = useMemo(
      () =>
        (IONIC_ICONS as Record<string, string>)[icon]
          ? Ionicons
          : (FONTAWESOME_ICONS as Record<string, string>)[icon]
            ? FontAwesome
            : (MATERIAL_ICONS as Record<string, string>)[icon]
              ? MaterialCommunityIcons
              : (OCTICON_ICONS as Record<string, string>)[icon]
                ? Octicons
                : undefined,
      [icon],
    );

    return (
      Component && (
        <Component
          {...props}
          name={(ICONS as Record<string, string>)[icon] ?? ''}
          style={styles as IconProps['style']}
        />
      )
    );
  }
  return null;
};
