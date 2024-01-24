import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const crawl: TaskParamsModel<unknown> = {
  name: 'web-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        await screen.goto('https://app.curri.com/login');
        await screen.type({
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'login-email',
          },
          value: 'support@essentialhomeimprovement.com',
        });
        // await screen.press({
        //   conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'Continue' }],
        //   target: { value: 'button' },
        // });
        await screen.press({
          target: { type: SELECTOR_TYPE.TEXT, value: 'Continue' },
        });
        await sleep(10000);
      });
    },
  ],
};

export default crawl;
