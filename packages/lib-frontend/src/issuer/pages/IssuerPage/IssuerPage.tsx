import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { ISSUER } from '#lib-frontend/issuer/issuer.constants';
import { type IssuerPagePropsModel } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const IssuerPage: SFCModel<IssuerPagePropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  const { valueControlled, valueControlledSet } = useControlledValue<string>({
    defaultValue: 'offers',
  });
  return (
    <Wrapper
      grow
      p
      s
      style={styles}
      testID={testID}>
      <Wrapper isRowAlign>
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
          <Tabs
            onChange={(value) => {
              void push({ pathname: `/${ISSUER}/${value}` });
              valueControlledSet(value);
            }}
            tabs={[
              { id: 'offers', label: 'Offers' },
              { id: 'comparables', label: 'Comparables' },
            ]}
            value={valueControlled}
          />
        </MainLayout>
      </Wrapper>

      <Wrapper grow>{children}</Wrapper>
    </Wrapper>
  );
};
