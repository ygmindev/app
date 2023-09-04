import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { CREDIT_RATING_CATEGORY } from '#lib-shared/funding/resources/CreditRatingCategory/CreditRatingCategory.constants';

export const CreditRatingCategoryForm: LFCModel<CreditRatingCategoryFormPropsModel> = ({
  data,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
}) => {
  const { t } = useTranslation();
  return (
    <ItemStepForm
      data={data}
      id="value"
      message={t('funding:creditRatingCategoryFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={Object.values(CREDIT_RATING_CATEGORY).map((id) => ({
        id,
        label: id.replace('m', '-').replace('p', '+'),
      }))}
    />
  );
};
