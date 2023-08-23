import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { type QuotesPagePropsModel } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const QuotesPage: SFCModel<QuotesPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const format = useFormatter();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    <MainLayout
      isHorizontalCenter
      p
      style={styles}
      testID={testID}>
      <Wrapper
        isRow
        justify={FLEX_JUSTIFY.FLEX_END}>
        <Button
          icon="filter"
          type={BUTTON_TYPE.TRANSPARENT}>
          {t('core:filter_plural')}
        </Button>
      </Wrapper>

      <Tile
        description={t('funding:quoted', {
          value: format(yesterday, { isReadable: true }),
        })}
        onPress={() => null}
        preview={
          <Image
            height={80}
            round={THEME_SIZE.SMALL}
            src="https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png"
            width={80}
          />
        }
        title="Goldman Sachs">
        <Table
          columns={[
            { formatter: ({ value }) => `${value.toFixed(0)} years`, id: 'tenor' },
            { formatter: ({ value }) => `T + ${value.toFixed(0)} bps`, id: 'spread' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'yield' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'coupon' },
          ]}
          data={[
            { coupon: 3.25, spread: 100, tenor: 2, yield: 3.25 },
            { coupon: 3.25, spread: 100, tenor: 3, yield: 3.25 },
            { coupon: 3.25, spread: 100, tenor: 5, yield: 3.25 },
            { coupon: 3.25, spread: 100, tenor: 10, yield: 3.25 },
            { coupon: 3.25, spread: 100, tenor: 30, yield: 3.25 },
          ]}
          isFullWidth
        />
      </Tile>
    </MainLayout>
  );
};
