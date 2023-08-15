import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { COMPARABLES, ISSUER, OFFERS } from '#lib-frontend/issuer/issuer.constants';
import { type IssuerPagePropsModel } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RouteTabs } from '#lib-frontend/route/components/RouteTabs/RouteTabs';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const IssuerPage: SFCModel<IssuerPagePropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  return (
    <Wrapper
      grow
      p
      s
      style={styles}
      testID={testID}>
      <Wrapper
        isHorizontalScrollable
        isRowAlign
        p>
        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Lender Type: All
        </Button>

        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Term: 3 - 10 years
        </Button>

        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Product: Bond, Loan, Revolving Credit
        </Button>

        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Currencies: USD, EUR, GBP, KOR
        </Button>

        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Credit Rating: Not rated
        </Button>

        <Button
          icon="chevronDown"
          size="s"
          type={BUTTON_TYPE.TRANSPARENT}>
          Amount: $10mm - $50mm
        </Button>
      </Wrapper>

      <Wrapper>
        <MainLayout isHorizontalCenter>
          <RouteTabs
            routes={[
              { label: t('issuer:offers'), pathname: `/${ISSUER}/${OFFERS}` },
              { label: t('issuer:comparables'), pathname: `/${ISSUER}/${COMPARABLES}` },
            ]}
          />
        </MainLayout>
      </Wrapper>

      <Wrapper grow>{children}</Wrapper>
    </Wrapper>
  );
};
