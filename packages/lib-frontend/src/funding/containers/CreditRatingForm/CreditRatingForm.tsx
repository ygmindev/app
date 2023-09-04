import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CreditRatingForm: LFCModel<CreditRatingFormPropsModel> = ({
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      s>
      <ModalButton element={<CreditRatingItemForm />}>
        {t('core:add', { value: t('funding:creditRating') })}
      </ModalButton>
    </MainLayout>
  );
};
