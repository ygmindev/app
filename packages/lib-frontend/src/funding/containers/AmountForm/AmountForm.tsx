import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RangeField } from '#lib-frontend/form/components/RangeField/RangeField';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';

export const AmountForm: SFCModel<AmountFormPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout {...wrapperProps}>
      <RangeField type={FIELD_TYPE_MORE.AMOUNT} />
    </MainLayout>
  );
};
