import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import {
  type AgencyFormModel,
  type AgencyFormPropsModel,
} from '#lib-frontend/funding/containers/AgencyForm/AgencyForm.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const AgencyForm: LFCModel<AgencyFormPropsModel> = ({
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([FUNDING]);
  const { getMany } = useRatingAgencyResource();

  const { data: agencies } = useQuery('agencies1', async () => getMany({ filter: [] }));
  console.warn(agencies);

  return (
    <ItemStepForm<CreditRatingFormModel, AgencyFormModel>
      {...wrapperProps}
      id="agency"
      initialValues={initialValues}
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
