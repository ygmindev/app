import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingValueForm/CreditRatingValueForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import {
  CREDIT_RATING_VALUE,
  CREDIT_RATING_VALUE_RANK,
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
      id="longTermRating"
      initialValues={initialValues}
      message={t('funding:longTermRatingFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={Object.values(CREDIT_RATING_VALUE)
        .sort((x, y) => CREDIT_RATING_VALUE_RANK[x] - CREDIT_RATING_VALUE_RANK[y])
        .map((id) => ({
          id,
          label: id.replace('m', '-').replace('p', '+'),
        }))}
    />
  );
};
