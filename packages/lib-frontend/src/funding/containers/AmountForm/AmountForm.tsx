import { Text } from '#lib-frontend/core/components/Text/Text';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { AMOUNT_UNIT, AMOUNT_UNIT_OPTIONS } from '#lib-frontend/data/data.constants';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const AmountForm: LFCModel<AmountFormPropsModel> = ({
  data,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          _id: 'amount',
          element: (
            <RangeField
              defaultUnit={AMOUNT_UNIT.MILLION}
              unitOptions={AMOUNT_UNIT_OPTIONS}
            />
          ),
        },
      ]}
      initialValues={data}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() => <Text type={FONT_TYPE.HEADLINE}>{t('funding:amountFormMessage')}</Text>}
    />
  );
};
