import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { NUMBER_UNIT_AMOUNT } from '#lib-frontend/data/data.constants';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FIELD_TYPE_MORE } from '#lib-shared/data/data.constants';

export const AmountForm: SFCModel<AmountFormPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout {...wrapperProps}>
      <RangeField
        defaultUnit={NUMBER_UNIT_AMOUNT.MILLION}
        type={FIELD_TYPE_MORE.AMOUNT}
      />
    </MainLayout>
  );
};
