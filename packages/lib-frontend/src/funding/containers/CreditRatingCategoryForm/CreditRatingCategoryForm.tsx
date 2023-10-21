import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import {
  CREDIT_RATING_STEP,
  CREDIT_RATING_STEP_RANK,
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
      id="longTermStep"
      initialValues={initialValues}
      message={t('funding:longTermStepFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={Object.values(CREDIT_RATING_STEP)
        .sort((x, y) => CREDIT_RATING_STEP_RANK[x] - CREDIT_RATING_STEP_RANK[y])
        .map((id) => ({
          id,
          label: id.replace('m', '-').replace('p', '+'),
        }))}
    />
  );
};
