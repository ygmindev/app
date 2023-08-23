import { Button } from '#lib-frontend/core/components/Button/Button';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { ItemTable } from '#lib-frontend/data/components/ItemTable/ItemTable';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { NUMBER_UNIT } from '#lib-frontend/data/hooks/useFormatter/useFormatter.constants';
import { type FundingInProgressPagePropsModel } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const FundingInProgressPage: SFCModel<FundingInProgressPagePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const format = useFormatter();
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      p
      style={styles}
      testID={testID}>
      <Tile
        description={<Wrapper isRowAlign></Wrapper>}
        onPress={() => null}
        title={t('funding:refinancing')}>
        <ItemTable
          data={[
            {
              description: `$${format(100e6, { unit: NUMBER_UNIT.MILLION })}`,
              icon: 'dollar',
              title: t('funding:amount'),
            },
            {
              description: '10 years',
              icon: 'hourglass',
              title: t('funding:maturity'),
            },
            {
              description: 'bond (fixed-rate coupon)',
              icon: 'grid',
              title: t('funding:type'),
            },
          ]}
        />
      </Tile>

      <Tile
        onPress={() => null}
        title={t('funding:gcp')}>
        <ItemTable
          data={[
            {
              description: `$${format(50e6, { unit: NUMBER_UNIT.MILLION })}`,
              icon: 'dollar',
              title: t('funding:amount'),
            },
            {
              description: '30 days',
              icon: 'hourglass',
              title: t('funding:maturity'),
            },
            {
              description: t('funding:cp'),
              icon: 'grid',
              title: t('funding:type'),
            },
          ]}
        />
      </Tile>

      <Wrapper isHorizontalCenter>
        <Button icon="dollar">{t('core:start', { value: t('funding:funding') })}</Button>
      </Wrapper>
    </MainLayout>
  );
};
