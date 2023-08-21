import { Table } from '#lib-frontend/core/components/Table/Table';
import { Tile } from '#lib-frontend/core/components/Tile/Tile';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type QuotesPagePropsModel } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const QuotesPage: SFCModel<QuotesPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      style={styles}
      testID={testID}>
      <Tile
        description="Quoted on August 20, 2023"
        onPress={() => null}
        // preview={
        //   <Image
        //     height={80}
        //     round={THEME_SIZE.SMALL}
        //     src="https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png"
        //     width={80}
        //   />
        // }
        title="XXX">
        <Table
          columns={[
            { formatter: ({ value }) => `${value.toFixed(0)} years`, id: 'tenor' },
            { formatter: ({ value }) => `${value.toFixed(3)}%`, id: 'coupon' },
            { formatter: ({ value }) => `${value.toFixed(0)} bps`, id: 'spread' },
          ]}
          data={[
            { coupon: 3.25, spread: 100, tenor: 2 },
            { coupon: 3.25, spread: 100, tenor: 3 },
            { coupon: 3.25, spread: 100, tenor: 5 },
            { coupon: 3.25, spread: 100, tenor: 10 },
            { coupon: 3.25, spread: 100, tenor: 30 },
          ]}
          isFullWidth
        />
      </Tile>
    </MainLayout>
  );
};
