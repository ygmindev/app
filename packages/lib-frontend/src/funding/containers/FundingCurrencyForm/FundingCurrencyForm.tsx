import { Text } from '#lib-frontend/core/components/Text/Text';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { validateNotEmpty } from '#lib-frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { CURRENCY_FIELD_OPTIONS } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm.constants';
import { type FundingCurrencyFormPropsModel } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const FundingCurrencyForm: LFCModel<FundingCurrencyFormPropsModel> = ({
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <DropdownField
              label={t('funding:currency')}
              options={CURRENCY_FIELD_OPTIONS}
            />
          ),
          id: 'currency',
        },
      ]}
      initialValues={initialValues}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() => <Text type={FONT_TYPE.HEADLINE}>{t('funding:curencyFormMessage')}</Text>}
      validators={{ currency: validateNotEmpty }}
    />
  );
};
