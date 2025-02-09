import { type ChartPropsModel } from '@lib/frontend/chart/chart.models';
import range from 'lodash/range';

export type ChartContainerFixtureModel = {
  x: number;
  y: number;
};

const K = 5;
const L = 30;

export const chartContainerFixturePropsFixture: ChartPropsModel<ChartContainerFixtureModel> = {
  data: range(1, 50).map((x) => ({
    x,
    y: 1 - Math.E ** (((-1 * x) / L) ** K), // weibull distribution CDF
  })),

  series: [{ id: 'y', value: 'y' }],

  xKey: 'x',
};
