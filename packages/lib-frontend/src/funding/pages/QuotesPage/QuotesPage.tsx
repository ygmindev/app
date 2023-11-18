import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { type QuotesPagePropsModel } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const QuotesPage: SFCModel<QuotesPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { format } = useFormatter();
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
        justify={FLEX_JUSTIFY.END}>
        <Button
          icon="filter"
          type={BUTTON_TYPE.TRANSPARENT}>
          {t('core:filter_plural')}
        </Button>
      </Wrapper>

      <Tile
        // description={t('funding:quoted', {
        //   value: format(yesterday, { isReadable: true }),
        // })}
        image="https://companieslogo.com/img/orig/WF-f6e6a56c.png?t=1660034230"
        label="Woori Bank"
        onPress={() => null}>
        <Table
          columns={[
            { formatter: ({ value }) => `${value.toFixed(0)} years`, id: 'tenor' },
            { formatter: ({ value }) => `T + ${value.toFixed(0)} bps`, id: 'spread' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'yield' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'coupon' },
          ]}
          data={[
            { coupon: 3.25, spread: 100, tenor: 2, yield: 3.231 },
            { coupon: 3.75, spread: 120, tenor: 3, yield: 3.689 },
            { coupon: 4.125, spread: 145, tenor: 5, yield: 4.099 },
            { coupon: 4.5, spread: 160, tenor: 10, yield: 4.683 },
            { coupon: 5.25, spread: 175, tenor: 30, yield: 5.366 },
          ]}
          isFullWidth
        />
      </Tile>

      <Tile
        // description={t('funding:quoted', {
        //   value: format(yesterday, { isReadable: true }),
        // })}
        image="https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png"
        label="Goldman Sachs"
        onPress={() => null}>
        <Table
          columns={[
            { formatter: ({ value }) => `${value.toFixed(0)} years`, id: 'tenor' },
            { formatter: ({ value }) => `T + ${value.toFixed(0)} bps`, id: 'spread' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'yield' },
            { formatter: ({ value }) => `${value.toFixed(3)} %`, id: 'coupon' },
          ]}
          data={[
            { coupon: 3.3, spread: 110, tenor: 2, yield: 3.331 },
            { coupon: 3.75, spread: 125, tenor: 3, yield: 3.739 },
            { coupon: 4.125, spread: 150, tenor: 5, yield: 4.149 },
            { coupon: 4.75, spread: 160, tenor: 10, yield: 4.683 },
            { coupon: 5.25, spread: 170, tenor: 30, yield: 5.296 },
          ]}
          isFullWidth
        />
      </Tile>
    </MainLayout>
  );
};
