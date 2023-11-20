import { Text } from '#lib-frontend/core/components/Text/Text';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type FundingMaturityFormPropsModel } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const FundingMaturityForm: LFCModel<FundingMaturityFormPropsModel> = ({
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
            <NumberRangeField
              label={t('funding:maturity')}
              type={NUMBER_UNIT_TYPE.RELATIVE_DATE}
            />
          ),
          id: 'maturityDays',
        },
      ]}
      initialValues={initialValues}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() => <Text type={FONT_TYPE.HEADLINE}>{t('funding:maturityFormMessage')}</Text>}
    />
  );
};
