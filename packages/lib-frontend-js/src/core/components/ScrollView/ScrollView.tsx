import { _ScrollView } from '@lib/frontend/core/components/ScrollView/_ScrollView';
import { type _ScrollViewPropsModel } from '@lib/frontend/core/components/ScrollView/_ScrollView.models';
import {
  type ScrollViewPropsModel,
  type ScrollViewRefModel,
} from '@lib/frontend/core/components/ScrollView/ScrollView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const ScrollView = composeComponent<
  ScrollViewPropsModel,
  _ScrollViewPropsModel,
  ViewStyleModel,
  ScrollViewRefModel
>({ Component: _ScrollView });

process.env.APP_IS_DEBUG && (ScrollView.displayName = variableName({ ScrollView }));
