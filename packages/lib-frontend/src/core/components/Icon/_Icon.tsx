import { FONTAWESOME_ICONS, IONIC_ICONS } from '@lib/frontend/core/components/Icon/_Icon.constants';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import { get } from 'lodash';
import type { ReactNode } from 'react';
import { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class _Icon extends Component<_IconPropsModel> {
  override render(): ReactNode {
    const { icon, testID } = this.props;
    if (icon) {
      let _icon = get(IONIC_ICONS, icon as string);
      if (_icon) {
        return (
          <Ionicons
            {...this.props}
            name={_icon}
            testID={testID}
          />
        );
      }
      _icon = get(FONTAWESOME_ICONS, icon as string);
      if (_icon) {
        return (
          <FontAwesome
            {...this.props}
            name={_icon}
            testID={testID}
          />
        );
      }
    }
    return null;
  }
}
