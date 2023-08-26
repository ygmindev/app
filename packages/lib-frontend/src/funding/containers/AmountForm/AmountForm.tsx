import { type SFCModel } from '#lib-frontend/core/core.models';
import { RangeField } from '#lib-frontend/form/components/RangeField/RangeField';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';

export const AmountForm: SFCModel<AmountFormPropsModel> = ({ testID, ...props }) => {
  return (
    <RangeField
      label={({ t }) => t('funding:amount')}
      type={FIELD_TYPE_MORE.NUMBER_POSITIVE}
    />
  );
};
