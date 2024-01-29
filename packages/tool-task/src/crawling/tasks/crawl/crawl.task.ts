import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { type SelectorPathModel } from '@lib/config/crawling/screen/screen.models';
import { type CreateDeliveryInputModel } from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
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
      dropoffName: 'Stop 2 name',
      dropoffPhoneNumber: '2162222222',
      orderNumber: 111,
      pickup: '56 Leonard St, New York, NY 10013',
      pickupName: 'Stop 1 name',
      pickupPhoneNumber: '2161111111',
    },
    {
      additionalNote: 'this is the second order',
      dropoff: 'Columbia University, 116th And Broadway, New York, NY 10027',
      dropoffName: 'Stop 3 Name',
      dropoffPhoneNumber: '2163333333',
      orderNumber: 222,
      pickup: '200 W 57th St, New York, NY 10019',
      pickupName: 'Stop 2 Name',
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
        let parent: SelectorPathModel = { value: '#submitPayload' };
        orderInformation &&
          (await mapSequence(
            orderInformation.map((order, i) => async () => {
              const pickupIndex = [firstPickup, ...(waypoint ?? [])].findIndex(
                (v) => v === order.pickup,
              );
              const dropoffIndex = [...(waypoint ?? []), finalDropoff].findIndex(
                (v) => v === order.dropoff,
              );

              i > 0 &&
                (await screen.press({
                  parent,
                  target: { type: SELECTOR_TYPE.TEXT, value: 'Add another order' },
                }));

              await screen.type({
                index: i,
                parent,
                target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'orderNumber' },
                value: `${order.orderNumber}`,
              });

              // press item
              await screen.type({
                index: i,
                parent,
                target: { type: SELECTOR_TYPE.ID, value: 'payload-description' },
                value: 'Medium Item',
              });
              await screen.key({ isDelay: true, value: KEY_TYPE.DOWN });
              await screen.key({ value: KEY_TYPE.ENTER });

              // press pickup
              if (pickupIndex >= 0) {
                const pickupValue = await screen.getValue({
                  index: pickupIndex,
                  parent: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'pickupQuoteIndex' },
                  target: { value: 'option' },
                });
                console.warn(`@@@ ORDER: ${i}: PICKUP ${pickupValue}`);
                pickupValue &&
                  (await screen.type({
                    index: i,
                    parent,
                    target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'pickupQuoteIndex' },
                    value: pickupValue,
                  }));
              }

              // press dropoff
              if (dropoffIndex >= 0) {
                const dropoffValue = await screen.getValue({
                  index: dropoffIndex,
                  parent: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'dropoffQuoteIndex' },
                  target: { value: 'option' },
                });
                console.warn(`@@@ ORDER: ${i}: DROPOFF ${dropoffValue}`);
                dropoffValue &&
                  (await screen.type({
                    index: i,
                    parent,
                    target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'dropoffQuoteIndex' },
                    value: dropoffValue,
                  }));
              }
            }),
          ));

        // // type weight
        // await screen.type({
        //   isDelay: true,
        //   target: { type: SELECTOR_TYPE.ID, value: 'weight' },
        //   value: CREDENTIALS.totalWeightLbs,
        // });

        // press next
        await screen.press({
          isDelay: true,
          target: { value: 'button[type=submit]' },
        });

        //  type stops info
        const stopsAll = [firstPickup, ...(waypoint ?? []), finalDropoff];
        const stopsInfo =
          orderInformation &&
          stopsAll.map((stop) => {
            const pickupInfo = orderInformation.find((order) => order.pickup === stop);
            const dropoffInfo = orderInformation.find((order) => order.dropoff === stop);
            const name = pickupInfo?.pickupName ?? dropoffInfo?.dropoffName;
            const contact = pickupInfo?.pickupPhoneNumber ?? dropoffInfo?.dropoffPhoneNumber;
            const note = filterNil([pickupInfo?.additionalNote, dropoffInfo?.additionalNote]).join(
              '. ',
            );
            return { contact, name, note, stop };
          });

        let stepIndex = 1;
        parent = { value: '#submitInfo' };
        for (const stopInfo of stopsInfo) {
          stopInfo.name &&
            (await screen.type({
              index: stepIndex * 1 - 1,
              parent,
              target: { value: 'input' },
              value: stopInfo.name,
            }));
          stopInfo.contact &&
            (await screen.type({
              index: stepIndex * 2 - 1,
              parent,
              target: { value: 'input' },
              value: stopInfo.contact,
            }));
          stopInfo.note &&
            (await screen.type({
              index: stepIndex,
              parent,
              target: { value: 'textarea' },
              value: stopInfo.note,
            }));
          stepIndex++;
        }

        // press next
        await screen.press({
          isDelay: true,
          target: { value: 'button[type=submit]' },
        });

        await sleep(100000000);

        await sleep(10000);
      });
    },
  ],
};

export default crawl;
