import { type SFCModel } from '#lib-frontend/core/core.models';
import { RangeField } from '#lib-frontend/form/components/RangeField/RangeField';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';

export const AmountForm: SFCModel<AmountFormPropsModel> = ({ testID, ...props }) => {
  return <RangeField />;
};
