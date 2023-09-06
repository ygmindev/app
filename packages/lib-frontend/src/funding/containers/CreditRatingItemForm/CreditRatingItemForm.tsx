import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AgencyForm } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm';
import { CreditRatingCategoryForm } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm';
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
          element: <CreditRatingCategoryForm />,
          id: 'category',
        },
      ]}
    />
  );
};
