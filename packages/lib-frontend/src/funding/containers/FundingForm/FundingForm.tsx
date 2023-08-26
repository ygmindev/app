import { type SFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/form/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import {
  type FundingFormPropsModel,
  type FundingFormStepsModel,
} from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FundingForm: SFCModel<FundingFormPropsModel> = ({ ...props }) => {
  return (
    <StepForm<FundingFormModel, FundingFormStepsModel>
      {...props}
      onSubmit={async (value) => console.warn(value)}
      steps={[
        {
          element: <AmountForm />,
          id: 'amount',
        },
      ]}
      // onSuccess={async () => replace({ pathname: redirectTo ?? '/' })}
    />
  );
};
