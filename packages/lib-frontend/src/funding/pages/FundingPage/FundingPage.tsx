import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { type FundingPagePropsModel } from '#lib-frontend/funding/pages/FundingPage/FundingPage.models';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const FundingPage: LFCModel<FundingPagePropsModel> = ({ children }) => {
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
          {t('core:add', { value: t('funding:funding') })}
        </Button>
      </FloatingFooter>
    </>
  );
};
