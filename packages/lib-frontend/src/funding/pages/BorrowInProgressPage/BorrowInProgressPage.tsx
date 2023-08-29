import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { FloatingDot } from '#lib-frontend/core/components/FloatingDot/FloatingDot';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { ItemTable } from '#lib-frontend/data/components/ItemTable/ItemTable';
import { AMOUNT_UNIT } from '#lib-frontend/data/data.constants';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { type BorrowInProgressPagePropsModel } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const BorrowInProgressPage: SFCModel<BorrowInProgressPagePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { format } = useFormatter();
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      p
      s
      style={styles}
      testID={testID}>
      <Tile
        onPress={() => null}
        rightElement={
          <Wrapper
            isCenter
            position={SHAPE_POSITION.RELATIVE}
            s={THEME_SIZE.SMALL}>
            <FloatingDot />

            <Chip color={THEME_COLOR.ERROR}>5</Chip>

            <Text fontSize={THEME_SIZE.SMALL}>quotes</Text>
          </Wrapper>
        }
        title={t('funding:refinancing')}>
        <ItemTable
          data={[
            {
              description: `${format(100e6, { unit: AMOUNT_UNIT.MILLION })} USD`,
              icon: 'dollar',
              title: t('funding:amount'),
            },
            {
              description: '2 years - 10 years',
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
        rightElement={
          <Wrapper
            isCenter
            s={THEME_SIZE.SMALL}>
            <Chip color={THEME_COLOR.ERROR}>7</Chip>

            <Text fontSize={THEME_SIZE.SMALL}>quotes</Text>
          </Wrapper>
        }
        title={t('funding:gcp')}>
        <ItemTable
          data={[
            {
              description: `${format(50e6, { unit: AMOUNT_UNIT.MILLION })} USD`,
              icon: 'dollar',
              title: t('funding:amount'),
            },
            {
              description: '30 days - 60 days',
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
    </MainLayout>
  );
};
