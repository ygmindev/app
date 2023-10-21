import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { type CreditRatingItemFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm.models';
import { CreditRatingCategoryForm } from '#lib-frontend/funding/containers/CreditRatingValueForm/CreditRatingValueForm';
import { CreditRatingWatchForm } from '#lib-frontend/funding/containers/CreditRatingWatchForm/CreditRatingWatchForm';
import { FundingAgencyForm } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CreditRatingItemForm: LFCModel<CreditRatingItemFormPropsModel> = ({
  onSubmit,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <StepForm
      {...wrapperProps}
      onSubmit={onSubmit}
      steps={[
        {
          element: <FundingAgencyForm />,
          id: 'agency',
          title: t('funding:ratingAgency'),
        },
        {
          element: <CreditRatingCategoryForm />,
          id: 'creditRating',
          title: t('funding:creditRating'),
        },
        {
          element: <CreditRatingWatchForm />,
          id: 'watch',
          title: t('funding:watch'),
        },
      ]}
    />
  );
};
