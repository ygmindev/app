import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AgencyForm } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm';
import { CreditRatingCategoryForm } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm';
import { type CreditRatingItemFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm.models';
import { CreditRatingWatchForm } from '#lib-frontend/funding/containers/CreditRatingWatchForm/CreditRatingWatchForm';
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
      id="creditRating"
      onSubmit={onSubmit}
      steps={[
        {
          element: <AgencyForm />,
          id: 'agency',
          title: t('funding:agency'),
        },
        {
          element: <CreditRatingCategoryForm />,
          id: 'category',
          title: t('funding:category'),
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
