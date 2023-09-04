import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  return (
    <StepForm
      {...props}
      id={FUNDING}
      onSubmit={async (value) => {
        console.warn(value);
        return;
      }}
      steps={[
        {
          element: <AmountForm />,
          id: 'amount',
        },
        {
          element: <MaturityForm />,
          id: 'maturity',
        },
        {
          element: <CreditRatingForm />,
          id: 'creditRating',
        },
      ]}
      // onSuccess={async () => replace({ pathname: redirectTo ?? '/' })}
    />
  );
};
