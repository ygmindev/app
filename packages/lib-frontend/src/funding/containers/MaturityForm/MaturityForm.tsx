import { Text } from '#lib-frontend/core/components/Text/Text';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { RELATIVE_DATE_UNIT, RELATIVE_DATE_UNIT_OPTIONS } from '#lib-frontend/data/data.constants';
import { type MaturityFormPropsModel } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const MaturityForm: LFCModel<MaturityFormPropsModel> = ({
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
          _id: 'maturity',
          element: (
            <RangeField
              defaultUnit={RELATIVE_DATE_UNIT.YEAR}
              unitOptions={RELATIVE_DATE_UNIT_OPTIONS}
            />
          ),
        },
      ]}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() => <Text type={FONT_TYPE.HEADLINE}>{t('funding:maturityFormMessage')}</Text>}
    />
  );
};
