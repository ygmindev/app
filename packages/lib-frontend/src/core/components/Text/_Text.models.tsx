import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';
import type { TextProps } from 'react-native';

export interface _TextPropsModel extends WithChildrenPropsModel<string>, WithTestIdModel {
  Component?: ComponentType<TextProps>;
  isEllipsis?: boolean;
  onPress?: CallableModel;
  style?: StyleModel;
}
