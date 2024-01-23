import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const crawl: TaskParamsModel<unknown> = {
  name: 'web-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        await screen.goto('https://savelist.co/about');
      });
    },
  ],
};

export default crawl;
