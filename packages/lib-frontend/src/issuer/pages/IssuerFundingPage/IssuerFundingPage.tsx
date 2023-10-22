import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { type IssuerFundingPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const IssuerFundingPage: LFCModel<IssuerFundingPagePropsModel> = ({ children }) => {
  const { t } = useTranslation([FUNDING]);
  const { push } = useRouter();
  const currentGroup = useCurrentGroup();
  return (
    <>
      {children}

      <FloatingFooter>
        <Button
          icon="add"
          onPress={() => push({ pathname: `/${GROUP}/${currentGroup?._id}/${FUNDING}/${FORM}` })}>
          {t('core:new', { value: t('funding:funding') })}
        </Button>
      </FloatingFooter>
    </>
  );
};
