import { Button } from '#lib-frontend/core/components/Button/Button';
import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { Text } from '#lib-frontend/core/components/Text/Text';
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
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const FundingInProgressPage: SFCModel<FundingInProgressPagePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const format = useFormatter();
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      isHorizontalCenter
      p
      style={styles}
      testID={testID}>
      <Tile
        onPress={() => null}
        rightElement={
          <Wrapper
            isCenter
            s={THEME_SIZE.SMALL}>
            <Chip color={THEME_COLOR.ERROR}>5</Chip>

            <Text fontSize={THEME_SIZE_MORE.SMALL}>quotes</Text>
          </Wrapper>
        }
        title={t('funding:refinancing')}>
        <ItemTable
          data={[
            {
              description: `$${format(100e6, { unit: NUMBER_UNIT.MILLION })}`,
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

            <Text fontSize={THEME_SIZE_MORE.SMALL}>quotes</Text>
          </Wrapper>
        }
        title={t('funding:gcp')}>
        <ItemTable
          data={[
            {
              description: `$${format(50e6, { unit: NUMBER_UNIT.MILLION })}`,
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

      <Wrapper
        bottom={0}
        isHorizontalCenter
        left={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}>
        <Button
          icon="add"
          isShadow>
          {t('funding:requestForQuote')}
        </Button>
      </Wrapper>
    </MainLayout>
  );
};
