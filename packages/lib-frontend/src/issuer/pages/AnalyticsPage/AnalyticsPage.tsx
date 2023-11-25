import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type AnalyticsPagePropsModel } from '#lib-frontend/issuer/pages/AnalyticsPage/AnalyticsPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AnalyticsPage: LFCModel<AnalyticsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      flex
      s></MainLayout>
  );
};

// import toNumber from 'lodash/toNumber';
// import range from 'lodash/range';
// import reduce from 'lodash/reduce';
// import moment from 'moment';

// import { Icon } from '#lib-frontend/core/components/Icon/Icon';
// import { Text } from '#lib-frontend/core/components/Text/Text';
// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { type LFCModel } from '#lib-frontend/core/core.models';
// import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
// import { Chart } from '#lib-frontend/data/components/Chart/Chart';
// import { Table } from '#lib-frontend/data/components/Table/Table';
// import { type DataRendererModel } from '#lib-frontend/data/data.models';
// import { type AnalyticsPagePropsModel } from '#lib-frontend/issuer/pages/AnalyticsPage/AnalyticsPage.models';
// import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
// import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';

// export const AnalyticsPage: LFCModel<AnalyticsPagePropsModel> = ({ ...props }) => {
//   const { wrapperProps } = useLayoutStyles({ props });

//   const dates = range(0, 12).map((rmonth) => moment().subtract(rmonth, 'months').toDate());
//   const drifts = [10, 14, -6, 8, 12, -6, 11, 14, 6, 8, 12];
//   const tenors = [2, 3, 5, 7, 10, 20, 30];
//   const data = dates.reduce(
//     (result, date, i) => [
//       ...result,
//       tenors.reduce(
//         (resultF, tenor, j) => ({
//           ...resultF,
//           [`${tenor} yr`]:
//             55 + j * 20 + drifts.slice(0, i + 1).reduce((a, b) => a + randomInt(b - 4, b + 4)),
//           x: date,
//         }),
//         {},
//       ),
//     ],
//     [] as Array<Record<string, number | Date>>,
//   );

//   const tableData = data.filter((row) =>
//     isEqual((row.x as Date).setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0)),
//   );
//   const tableDataF = tableData && tableData[0];
//   delete tableDataF['x'];
//   const tableDataFF =
//     tableDataF &&
//     reduce<any, unknown>(
//       tableDataF,
//       (result, v, k) =>
//         [
//           ...(result as any),
//           {
//             dod: randomInt(-2, 2),
//             mom: randomInt(-10, 10),
//             tenor: toNumber(k.replace(' yr', '')),
//             value: v as unknown,
//             wow: randomInt(-5, 5),
//             ytd: randomInt(-15, 15),
//           },
//         ] as unknown,
//       [],
//     );

//   const renderer: DataRendererModel<any, any> = ({ value }) => {
//     const color =
//       (value as unknown as number) > 0
//         ? 'error'
//         : (value as unknown as number) < 0
//         ? 'success'
//         : '';
//     return (
//       <Wrapper
//         isRowAlign
//         justify="space-between">
//         {(value as unknown as number) > 0 ? (
//           <Icon
//             color={color}
//             icon="caretUp"
//           />
//         ) : (value as unknown as number) < 0 ? (
//           <Icon
//             color={color}
//             icon="caretDown"
//           />
//         ) : null}

//         <Text
//           align="right"
//           color={color}>{`${Math.round(value as unknown as number)}`}</Text>
//       </Wrapper>
//     );
//   };

//   return (
//     <MainLayout
//       {...wrapperProps}
//       flex
//       s>
//       <Chart
//         data={data}
//         series={tenors.map((tenor) => ({ id: `${tenor} yr` }))}
//         title="Funding cost over time"
//       />

//       <Table
//         columns={[
//           { formatter: ({ value }) => `${value} yr`, id: 'tenor', width: 70 },
//           { formatter: ({ value }) => `${value} bps`, id: 'value', label: 'Spread', width: 70 },
//           { id: 'dod', label: 'DoD', renderer, width: 70 },
//           { id: 'wow', label: 'WoW', renderer, width: 70 },
//           { id: 'mom', label: 'MoM', renderer, width: 70 },
//           { id: 'ytd', label: 'YTD', renderer, width: 70 },
//         ]}
//         data={tableDataFF as any}
//         flex
//       />
//     </MainLayout>
//   );
// };
