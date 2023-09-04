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
      data={data}
      id="value"
      message={t('funding:longTermRatingMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      options={[
        { id: 'sAndP', label: ({ t }) => t('funding:sAndP') },
        { id: 'moodys', label: ({ t }) => t('funding:moodys') },
      ]}
    />
  );
};
