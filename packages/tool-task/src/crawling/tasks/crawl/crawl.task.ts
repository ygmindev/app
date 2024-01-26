import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { KEY_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const PARAMS = {
  dest: '116th and Broadway',
  email: 'support@essentialhomeimprovement.com',
  item: 'Medium Item',
  orderNumber: '12345',
  origin: '200 W 57th St',
  password: 'Huespace123!',
  stops: ['56 Leonard Street, New York, NY', '104 W 35th St, New York, NY'],
  timing: 'rush',
  totalWeightLbs: '150',
  url: 'https://app.curri.com/login',
  vehicle: 'cargo-van',
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
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'Continue' }],
          target: { value: 'button' },
        });
        // type password
        await screen.type({
          target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-password' },
          value: PARAMS.password,
        });
        // press sign in
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'Log in' }],
          target: { value: 'button' },
        });

        // add pickup
        await screen.type({
          isDelay: true,
          target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' },
          value: PARAMS.origin,
        });
        await screen.press({
          isDelay: true,
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
        });

        // add stops
        await mapSequence(
          PARAMS.stops.map((stop, i) => async () => {
            await screen.press({
              target: { key: 'e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-add-stop' },
            });
            await screen.type({
              target: {
                key: 'e2e-id',
                type: SELECTOR_TYPE.DATA,
                value: `book-addresses-input-${i + 1}`,
              },
              value: stop,
            });
            await screen.press({
              isDelay: true,
              target: {
                key: 'e2e-id',
                type: SELECTOR_TYPE.DATA,
                value: 'book-address-recommendation-0',
              },
            });
          }),
        );

        // add dropoff
        await screen.type({
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: `book-addresses-input-${PARAMS.stops.length + 1}`,
          },
          value: PARAMS.dest,
        });
        await screen.press({
          isDelay: true,
          target: {
            key: 'e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
        });

        // press next
        await screen.press({
          isDelay: true,
          target: { value: 'button[type=submit]' },
        });

        // press vehicle
        await screen.press({
          target: {
            key: 'ph-capture-attribute-vehicle-sku',
            type: SELECTOR_TYPE.DATA,
            value: PARAMS.vehicle,
          },
        });

        // press timing
        await screen.press({
          target: {
            key: 'ph-capture-attribute-priority-type',
            type: SELECTOR_TYPE.DATA,
            value: PARAMS.timing,
          },
        });

        //  press item
        await screen.type({
          target: { type: SELECTOR_TYPE.ID, value: 'payload-description' },
          value: PARAMS.item,
        });
        await screen.key({ isDelay: true, value: KEY_TYPE.DOWN });
        await screen.key({ value: KEY_TYPE.ENTER });

        // type weight
        await screen.type({
          isDelay: true,
          target: { type: SELECTOR_TYPE.ID, value: 'weight' },
          value: PARAMS.totalWeightLbs,
        });

        // press next
        await screen.press({
          isDelay: true,
          target: { value: 'button[type=submit]' },
        });

        await sleep(10000);
      });
    },
  ],
};

export default crawl;
