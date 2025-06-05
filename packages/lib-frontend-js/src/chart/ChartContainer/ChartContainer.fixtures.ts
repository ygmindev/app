import { type ChartPropsModel } from '@lib/frontend/chart/chart.models';
import range from 'lodash/range';

export type ChartContainerFixtureModel = {
  exponential: number;
  gumbel: number;
  weibull: number;
  x: number;
};

const A = 3;
const B = 5;

export const chartContainerFixturePropsFixture: ChartPropsModel<ChartContainerFixtureModel> = {
  data: range(1, 10).map((x) => ({
    exponential: A * Math.E ** (-A * x),
    gumbel: (1 / B) * Math.E ** (-1 * ((x - A) / B + Math.E ** (-(x - A) / B))),
    weibull: (A / B) * (x / B) ** (A - 1) * Math.E ** (-1 * (x / B) ** A),
    x,
  })),

  series: [
    { id: 'exponential', value: 'exponential' },
    { id: 'weibull', value: 'weibull' },
    { id: 'gumbel', value: 'gumbel' },
  ],

  xKey: 'x',
};
