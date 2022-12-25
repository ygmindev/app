import { _View } from '@lib/frontend/core/components/View/_View';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';

export const View: SFCModel<ViewPropsModel> = ({ onMeasure, ...props }) => {
  const _onMeasure = onMeasure ? debounce({ callback: onMeasure }) : undefined;
  return (
    <_View
      {...props}
      onMeasure={_onMeasure}
    />
  );
};
