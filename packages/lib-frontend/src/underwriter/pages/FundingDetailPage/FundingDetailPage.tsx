import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { FundingDetail } from '#lib-frontend/funding/components/FundingDetail/FundingDetail';
import { FUNDING, QUOTE } from '#lib-frontend/funding/funding.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import {
  type FundingDetailPageParamsModel,
  type FundingDetailPagePropsModel,
} from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';

export const FundingDetailPage: LFCModel<FundingDetailPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { location, push } = useRouter<FundingDetailPageParamsModel>();

  const funding = location.params?.funding;
  const fundingid = location.params?.fundingid;

  return (
    <>
      <MainLayout
        {...wrapperProps}
        s
        size={THEME_SIZE.LARGE}>
        <Wrapper
          border
          p
          round
          s>
          <Text type={FONT_TYPE.HEADLINE}>{t('funding:funding')}</Text>

          {funding && <FundingDetail funding={funding} />}
        </Wrapper>
      </MainLayout>

      <FloatingFooter>
        <Button
          icon="send"
          onPress={() => push({ params: { funding }, pathname: QUOTE, root: true })}>
          {t('funding:sendQuote')}
        </Button>
      </FloatingFooter>
    </>
  );
};
