import { type ChartPropsModel } from '@lib/frontend/data/components/Chart/Chart.models';
import range from 'lodash/range';

export type ChartFixtureModel = {
  x: number;
  y: number;
};

const K = 5;
const L = 30;

export const chartPropsFixture: ChartPropsModel<ChartFixtureModel> = {
  data: range(1, 50).map((x) => ({
    x,
    y: (K / L) * (x / L) ** (K - 1) * Math.E ** (((-1 * x) / L) ** K),
  })),
  series: [
    { id: 'x', title: 'x' },
    { id: 'y', title: 'y' },
  ],
  xKey: 'x',
  yKey: 'y',
};
