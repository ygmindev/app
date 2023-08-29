import { type SFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FundingForm: SFCModel<FundingFormPropsModel> = ({ ...props }) => {
  return (
    <StepForm<FundingFormModel>
      {...props}
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
      ]}
      // onSuccess={async () => replace({ pathname: redirectTo ?? '/' })}
    />
  );
};
