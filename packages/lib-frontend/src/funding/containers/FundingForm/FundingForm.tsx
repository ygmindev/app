import { IN_PROGRESS } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { CurrencyForm } from '#lib-frontend/funding/containers/CurrencyForm/CurrencyForm';
import { FUNDING_FORM_INITIAL_VALUES } from '#lib-frontend/funding/containers/FundingForm/FundingForm.constants';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { create } = useFundingResource();
  const { replace } = useRouter();
  const currentUser = useCurrentUser();
  return (
    <StepForm
      {...props}
      initialValues={FUNDING_FORM_INITIAL_VALUES}
      onSubmit={async (form) => currentUser && create({ form })}
      onSuccess={async () => replace({ pathname: `${FUNDING}/${IN_PROGRESS}` })}
      steps={[
        {
          element: <CurrencyForm />,
          id: 'currency',
          title: t('funding:currency'),
        },
        {
          element: <AmountForm />,
          id: 'amount',
          title: t('funding:amount'),
        },
        {
          element: <MaturityForm />,
          id: 'maturity',
          title: t('funding:maturity'),
        },
        {
          element: <CreditRatingForm />,
          id: 'CrditRating',
          title: t('funding:creditRating'),
        },
      ]}
    />
  );
};
