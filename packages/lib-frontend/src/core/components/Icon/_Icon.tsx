import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import {
  FONTAWESOME_ICONS,
  ICONS,
  IONIC_ICONS,
} from '@lib/frontend/core/components/Icon/Icon.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Fragment } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import type { IconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const _Icon = composeComponent<_IconPropsModel, IconProps>({
  getComponent: ({ icon }) =>
    (IONIC_ICONS as Record<string, string>)[icon]
      ? Ionicons
      : (FONTAWESOME_ICONS as Record<string, string>)[icon]
      ? FontAwesome
      : Fragment,

  getProps: ({ icon }: _IconPropsModel): IconProps => ({
    name: (ICONS as Record<string, string>)[icon] || '',
  }),
});
