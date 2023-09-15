import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import {
  CREDIT_RATING_CATEGORY,
  CREDIT_RATING_CATEGORY_RANK,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';

export const CreditRatingCategoryForm: LFCModel<CreditRatingCategoryFormPropsModel> = ({
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
}) => {
  const { t } = useTranslation();
  return (
    <ItemStepForm
      id="longTermCategory"
      initialValues={initialValues}
      message={t('funding:longTermCategoryFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={Object.values(CREDIT_RATING_CATEGORY)
        .sort((x, y) => CREDIT_RATING_CATEGORY_RANK[x] - CREDIT_RATING_CATEGORY_RANK[y])
        .map((id) => ({
          id,
          label: id.replace('m', '-').replace('p', '+'),
        }))}
    />
  );
};
