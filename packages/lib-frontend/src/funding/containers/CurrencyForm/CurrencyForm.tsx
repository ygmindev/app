import { Text } from '#lib-frontend/core/components/Text/Text';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { validateNotEmpty } from '#lib-frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { CURRENCY_FIELD_OPTIONS } from '#lib-frontend/funding/containers/CurrencyForm/CurrencyForm.constants';
import { type CurrencyFormPropsModel } from '#lib-frontend/funding/containers/CurrencyForm/CurrencyForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const CurrencyForm: LFCModel<CurrencyFormPropsModel> = ({
  initialValues,
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
          element: <SelectField options={CURRENCY_FIELD_OPTIONS} />,
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
