import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type PullTreasuriesParamsModel } from '@tool/task/quant/tasks/pullTreasuries/pullTreasuries.models';

const pullTreasuries: TaskParamsModel<PullTreasuriesParamsModel> = {
  name: 'pull-treasuries',

  task: [
    async () => {
      const result = await Container.get(HttpImplementation).get({
        url: 'https://query1.finance.yahoo.com/v8/finance/chart/%5EFVX?includeAdjustedClose=true&interval=1d&period1=1721613380&period2=1751328000&userYfid=true&lang=en-US&region=US',
      });
      console.warn(result);
    },
  ],
};

export default pullTreasuries;
