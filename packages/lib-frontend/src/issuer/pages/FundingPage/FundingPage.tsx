import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { type FundingPagePropsModel } from '#lib-frontend/issuer/pages/FundingPage/FundingPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const FundingPage: LFCModel<FundingPagePropsModel> = ({ children }) => {
  const { t } = useTranslation([FUNDING]);
  const { push } = useRouter();
  return (
    <>
      {children}

      <FloatingFooter>
        <Button
          icon="add"
          onPress={() => push({ pathname: FORM, root: true })}>
          {t('core:new', { value: t('funding:funding') })}
        </Button>
      </FloatingFooter>
    </>
  );
};
