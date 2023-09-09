import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <StepForm
      {...props}
      _id={FUNDING}
      onSubmit={async (value) => {
        console.warn(value);
        return;
      }}
      steps={[
        {
          _id: 'amount',
          element: <AmountForm />,
          title: t('funding:amount'),
        },
        {
          _id: 'maturity',
          element: <MaturityForm />,
          title: t('funding:maturity'),
        },
        {
          _id: 'creditRating',
          element: <CreditRatingForm />,
          title: t('funding:creditRating'),
        },
      ]}
      // onSuccess={async () => replace({ pathname: redirectTo ?? '/' })}
    />
  );
};
