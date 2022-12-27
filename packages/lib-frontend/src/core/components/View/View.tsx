import { _View } from '@lib/frontend/core/components/View/_View';
import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';

export const viewParams: ComposeComponentParamsModel<ViewPropsModel, _ViewPropsModel> = {
  getComponent: () => _View,

  getProps: ({ onMeasure, ...props }: ViewPropsModel): _ViewPropsModel => ({
    ...props,
    onMeasure: onMeasure ? debounce({ callback: onMeasure }) : undefined,
  }),
};

export const View = composeComponent<ViewPropsModel, _ViewPropsModel>(viewParams);
