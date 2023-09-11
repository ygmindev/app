import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { FUNDING_FORM_INITIAL_VALUES } from '#lib-frontend/funding/containers/FundingForm/FundingForm.constants';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <StepForm
      {...props}
      id={FUNDING}
      initialValues={FUNDING_FORM_INITIAL_VALUES}
      onSubmit={async (value) => {
        console.warn(value);
        return;
      }}
      steps={[
        {
          element: <AmountForm />,
          id: 'amount',
          title: t('funding:amount'),
        },
        {
          element: <MaturityForm />,
          id: 'maturity',
          title: t('funding:maturity'),
        },
        {
          element: <CreditRatingForm />,
          id: 'creditRating',
          title: t('funding:creditRating'),
        },
      ]}
      // onSuccess={async () => replace({ pathname: redirectTo ?? '/' })}
    />
  );
};
