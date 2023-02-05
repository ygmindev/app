import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import {
  FONTAWESOME_ICONS,
  ICONS,
  IONIC_ICONS,
} from '@lib/frontend/core/components/Icon/Icon.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import type { IconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const _Icon: SFCModel<_IconPropsModel, TextStyleModel> = ({ icon, ...props }) => {
  const { styles } = useStyles<_IconPropsModel, TextStyleModel>({ props });
  if (icon) {
    const _Component = (IONIC_ICONS as Record<string, string>)[icon]
      ? Ionicons
      : (FONTAWESOME_ICONS as Record<string, string>)[icon]
      ? FontAwesome
      : null;
    return (
      _Component && (
        <_Component
          name={(ICONS as Record<string, string>)[icon] || ''}
          style={styles as IconProps['style']}
        />
      )
    );
  }
  return null;
};
