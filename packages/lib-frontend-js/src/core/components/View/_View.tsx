import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { getViewParams } from '@lib/frontend/core/components/View/getViewParams';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ViewProps } from 'react-native';

export const _View = composeComponent<_ViewPropsModel, ViewProps>(getViewParams());
