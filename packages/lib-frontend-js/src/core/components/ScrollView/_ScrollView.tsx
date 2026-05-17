import {
  type _ScrollViewPropsModel,
  type _ScrollViewRefModel,
} from '@lib/frontend/core/components/ScrollView/_ScrollView.models';
import { getScrollViewParams } from '@lib/frontend/core/components/ScrollView/getScrollViewParams';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ScrollViewProps } from 'react-native';

export const _ScrollView =
  composeComponent(
    getScrollViewParams<_ScrollViewPropsModel, ScrollViewProps, _ScrollViewRefModel>(),
  );
