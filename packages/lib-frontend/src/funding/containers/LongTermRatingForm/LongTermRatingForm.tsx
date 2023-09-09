import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type LongTermRatingFormPropsModel } from '#lib-frontend/funding/containers/LongTermRatingForm/LongTermRatingForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const LongTermRatingForm: LFCModel<LongTermRatingFormPropsModel> = ({
  data,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
}) => {
  const { t } = useTranslation();
  return (
    <ItemStepForm
      _id="value"
      data={data}
      message={t('funding:longTermRatingMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={[
        { _id: 'sAndP', label: ({ t }) => t('funding:sAndP') },
        { _id: 'moodys', label: ({ t }) => t('funding:moodys') },
      ]}
    />
  );
};
