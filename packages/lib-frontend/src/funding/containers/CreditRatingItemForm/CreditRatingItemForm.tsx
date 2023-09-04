import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AgencyForm } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CreditRatingItemForm: LFCModel<CreditRatingFormPropsModel> = ({
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <StepForm
      {...wrapperProps}
      id="creditRating"
      steps={[
        {
          element: <AgencyForm />,
          id: 'agency',
        },
        {
          element: (
            <FormContainer
              fields={[
                {
                  element: <AgencyForm />,
                  id: 'agency',
                },
                {
                  element: <AgencyForm />,
                  id: 'agency',
                },
              ]}
            />
          ),
          id: 'creditRatingItem',
        },
      ]}
    />
  );
};
