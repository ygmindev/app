import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { type CreateDeliveryInputModel } from '@lib/shared/aroom/resources/Delivery/DeliveryService/DeliveryService.models';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { KEY_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const CREDENTIALS = {
  email: 'support@essentialhomeimprovement.com',
  password: 'Huespace123!',
  url: 'https://app.curri.com/login',
};

const SAMPLE_DELIVERY: CreateDeliveryInputModel = {
  Creator: {
    companyName: 'Aroom',
    email: 'support@aroom.io',
    name: 'YG Min',
    phoneNumber: 2161231234,
  },
  finalDropoff: 'Columbia University, 116th And Broadway, New York, NY 10027',
  firstPickup: '56 Leonard St, New York, NY 10013',
  orderInformation: [
    {
      additionalNote: 'this is the first order',
      dropoff: '200 W 57th St, New York, NY 10019',
      dropoffPhoneNumber: '2162222222',
      orderNumber: 111,
      pickup: '56 Leonard St, New York, NY 10013',
      pickupPhoneNumber: '2161111111',
    },
    {
      additionalNote: 'this is the second order',
      dropoff: 'Columbia University, 116th And Broadway, New York, NY 10027',
      dropoffPhoneNumber: '2163333333',
      orderNumber: 111,
      pickup: '200 W 57th St, New York, NY 10019',
      pickupPhoneNumber: '2162222222',
    },
  ],
  pickupDate: new Date('2024-01-28T00:00:00Z'),
  submitDate: new Date('2024-01-28T00:00:00Z'),
  totalVolume: '',
  totalWeight: 150,
  tripPricing: 85,
  vehicleType: 'cargo-van',
  waypoint: ['200 W 57th St, New York, NY 10019'],
};

const crawl: TaskParamsModel<unknown> = {
  name: 'web-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const {
          Creator,
          finalDropoff,
          firstPickup,
          orderInformation,
          pickupDate,
          submitDate,
          totalVolume,
          totalWeight,
          tripPricing,
          vehicleType,
          waypoint,
        } = SAMPLE_DELIVERY;

        await screen.goto(CREDENTIALS.url);

        // type email
        await screen.type({
          target: { key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-email' },
          value: CREDENTIALS.email,
        });
        // press continue
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'Continue' }],
          target: { value: 'button' },
        });
        // type password
        await screen.type({
          target: { key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-password' },
          value: CREDENTIALS.password,
        });
        // press sign in
        await screen.press({
          conditions: [{ type: SELECTOR_TYPE.TEXT, value: 'Log in' }],
          target: { value: 'button' },
        });

        // add pickup
        await screen.type({
          isDelay: true,
          target: { key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' },
          value: firstPickup,
        });
        await screen.press({
          isDelay: true,
          target: {
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
        });

        // add stops
        waypoint &&
          (await mapSequence(
            waypoint.map((stop, i) => async () => {
              await screen.press({
                isDelay: true,
                target: {
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: 'book-addresses-add-stop',
                },
              });
              await screen.type({
                target: {
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: `book-addresses-input-${i + 1}`,
                },
                value: stop,
              });
              await screen.press({
                isDelay: true,
                target: {
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: 'book-address-recommendation-0',
                },
              });
            }),
          ));

        // add dropoff
        await screen.type({
          target: {
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: `book-addresses-input-${(waypoint?.length ?? 0) + 1}`,
          },
          value: finalDropoff,
        });
        await screen.press({
          isDelay: true,
          target: {
            key: 'data-e2e-id',
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
            key: 'data-ph-capture-attribute-vehicle-sku',
            type: SELECTOR_TYPE.DATA,
            value: vehicleType,
          },
        });

        // press timing
        await screen.press({
          target: {
            key: 'data-ph-capture-attribute-priority-type',
            type: SELECTOR_TYPE.DATA,
            value: 'scheduled',
          },
        });

        // pick date
        let tries = 0;
        while (tries <= 10) {
          try {
            await screen.press({
              target: {
                key: 'aria-label',
                type: SELECTOR_TYPE.DATA,
                value: 'Sun Jan 28 2024',
              },
            });
            break;
          } catch (e) {
            await screen.press({ target: { value: '.DayPicker-NavButton--next' } });
            tries++;
          }
        }

        // press next
        await screen.press({
          isDelay: true,
          target: { value: 'button[type=submit]' },
        });

        // add items
        orderInformation &&
          (await mapSequence(
            orderInformation.map((order, i) => async () => {
              // additionalNote: 'this is the first order',
              // dropoff: '200 W 57th St, New York, NY 10019',
              // dropoffPhoneNumber: '2162222222',
              // orderNumber: 111,
              // pickup: '56 Leonard St, New York, NY 10013',
              // pickupPhoneNumber: '2161111111',

              i > 0 &&
                (await screen.press({
                  target: { type: SELECTOR_TYPE.TEXT, value: 'Add another order' },
                }));

              await screen.type({
                index: i,
                target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'orderNumber' },
                value: `${order.orderNumber}`,
              });

              //  press item
              await screen.type({
                index: i,
                target: { type: SELECTOR_TYPE.ID, value: 'payload-description' },
                value: 'Medium Item',
              });
              await screen.key({ isDelay: true, value: KEY_TYPE.DOWN });
              await screen.key({ value: KEY_TYPE.ENTER });
            }),
          ));

        await sleep(100000000);

        // // type weight
        // await screen.type({
        //   isDelay: true,
        //   target: { type: SELECTOR_TYPE.ID, value: 'weight' },
        //   value: CREDENTIALS.totalWeightLbs,
        // });

        // // press next
        // await screen.press({
        //   isDelay: true,
        //   target: { value: 'button[type=submit]' },
        // });

        await sleep(10000);
      });
    },
  ],
};

export default crawl;
