import { _Chart } from '#lib-frontend/chart/components/Chart/_Chart';
import { type _ChartPropsModel } from '#lib-frontend/chart/components/Chart/_Chart.models';
import { type ChartPropsModel } from '#lib-frontend/chart/components/Chart/Chart.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Chart = composeComponent<ChartPropsModel, _ChartPropsModel>({
  Component: _Chart,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (Chart.displayName = variableName({ Chart }));
