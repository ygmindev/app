import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type AgencyFormPropsModel } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const AgencyForm: LFCModel<AgencyFormPropsModel> = ({
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
      id="agency"
      message={t('funding:agencyFormMessage')}
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
