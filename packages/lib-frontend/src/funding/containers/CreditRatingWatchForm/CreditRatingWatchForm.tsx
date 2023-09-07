import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type CreditRatingWatchFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingWatchForm/CreditRatingWatchForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { CREDIT_RATING_WATCH } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';

export const CreditRatingWatchForm: LFCModel<CreditRatingWatchFormPropsModel> = ({
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
      id="longTermWatch"
      message={t('funding:longTermWatchFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={Object.values(CREDIT_RATING_WATCH).map((id) => ({ id, label: id }))}
    />
  );
};
