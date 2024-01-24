import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const PARAMS = {
  dropoff: '116th Broadway, New York, NY',
  email: 'support@essentialhomeimprovement.com',
  password: 'Huespace123!',
  pickup: '200 West Street, New York, NY',
  stops: ['56 Leonard Street, New York, NY', '104 W 35th St, New York, NY'],
  url: 'https://app.curri.com/login',
};

const crawl: TaskParamsModel<unknown> = {
  name: 'web-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        await screen.goto(PARAMS.url);
        // type email
        await screen.type({
          target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-email' },
          value: PARAMS.email,
        });
        // press continue
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'continue' }],
          target: { value: 'button' },
        });
        // type password
        await screen.type({
          target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-password' },
          value: PARAMS.password,
        });
        // press sign in
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'log in' }],
          target: { value: 'button' },
        });

        // add pickup
        await screen.type({
          target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' },
          value: PARAMS.pickup,
        });
        await screen.press({
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
        });

        // add stops
        for (let i = 1; i <= PARAMS.stops.length; i++) {
          await screen.press({ target: { type: SELECTOR_TYPE.TEXT, value: 'add another stop' } });
          await screen.type({
            target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: `book-addresses-input-${i}` },
            value: PARAMS.stops[i],
          });
          await screen.press({
            target: {
              key: 'e2e-id',
              type: SELECTOR_TYPE.DATA,
              value: 'book-address-recommendation-0',
            },
          });
        }

        // add dropoff
        await screen.type({
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: `book-addresses-input-${PARAMS.stops.length + 1}`,
          },
          value: PARAMS.dropoff,
        });
        await screen.press({
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
        });

        // press next
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'next' }],
          target: { value: 'button' },
        });

        await sleep(10000);
      });
    },
  ],
};

export default crawl;
