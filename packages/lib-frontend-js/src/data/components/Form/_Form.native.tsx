import { View } from '@lib/frontend/core/components/View/View';
import { type ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _FormPropsModel } from '@lib/frontend/data/components/Form/_Form.models';

export const _Form = composeComponent<_FormPropsModel, ViewPropsModel>({
  Component: View,

  getProps: ({ children, testID }) => ({ children, testID }),
});
