import { type CreateDeliveryInputModel } from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import {
  KEY_TYPE,
  SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { format } from 'date-fns';

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
      dropoff: '200 W 57th St, New York, NY 10019',
      orderNumber: 111,
      orderReceiptAttach: '',
      pickup: '56 Leonard St, New York, NY 10013',
    },
    {
      dropoff: 'Columbia University, 116th And Broadway, New York, NY 10027',
      orderNumber: 111,
      orderReceiptAttach: '',
      pickup: '200 W 57th St, New York, NY 10019',
    },
  ],
  pickupDate: new Date('2024-02-02T00:00:00Z'),
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

        await screen.open(CREDENTIALS.url);

        // type email
        await screen
          .find({ key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-email' })
          .then((h) => h?.type(CREDENTIALS.email));

        // type email
        await screen.find({ type: SELECTOR_TYPE.TEXT, value: 'Continue' }).then((h) => h?.press());

        // type password
        await screen
          .find({ key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'login-password' })
          .then((h) => h?.type(CREDENTIALS.password));

        // press sign in
        await screen.find({ type: SELECTOR_TYPE.TEXT, value: 'Log in' }).then((h) => h?.press());

        // add pickup
        await screen
          .find({ key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' })
          .then((h) => h?.type(firstPickup));

        await screen
          .find(
            {
              key: 'data-e2e-id',
              type: SELECTOR_TYPE.DATA,
              value: 'book-address-recommendation-0',
            },
            { isDelay: true },
          )
          .then((h) => h?.press());

        // add stops
        waypoint &&
          (await mapSequence(
            waypoint.map((stop, i) => async () => {
              await screen
                .find({
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: 'book-addresses-add-stop',
                })
                .then((h) => h?.press());

              await screen
                .find({
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: `book-addresses-input-${i + 1}`,
                })
                .then((h) => h?.type(stop));

              await screen
                .find(
                  {
                    key: 'data-e2e-id',
                    type: SELECTOR_TYPE.DATA,
                    value: 'book-address-recommendation-0',
                  },
                  { isDelay: true },
                )
                .then((h) => h?.press());
            }),
          ));

        // add dropoff
        await screen
          .find({
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: `book-addresses-input-${(waypoint?.length ?? 0) + 1}`,
          })
          .then((h) => h?.type(finalDropoff));

        await screen
          .find(
            {
              key: 'data-e2e-id',
              type: SELECTOR_TYPE.DATA,
              value: 'book-address-recommendation-0',
            },
            { isDelay: true },
          )
          .then((h) => h?.press());

        // press next
        await screen
          .find({ value: 'button[type=submit]' }, { isDelay: true })
          .then((h) => h?.press());

        // press vehicle
        await screen
          .find({
            key: 'data-ph-capture-attribute-vehicle-sku',
            type: SELECTOR_TYPE.DATA,
            value: vehicleType,
          })
          .then((h) => h?.press());

        // press timing
        await screen
          .find({
            key: 'data-ph-capture-attribute-priority-type',
            type: SELECTOR_TYPE.DATA,
            value: 'scheduled',
          })
          .then((h) => h?.press());

        // pick date
        let tries = 0;
        const pickupDateFormatted = format(pickupDate, 'ddd EEE dd yyyy');
        while (tries <= 10) {
          try {
            await screen
              .find({ key: 'aria-label', type: SELECTOR_TYPE.DATA, value: pickupDateFormatted })
              .then((h) => h?.press());
            break;
          } catch (e) {
            await screen.find({ value: '.DayPicker-NavButton--next' }).then((h) => h?.press());
            tries++;
          }
        }

        // press next
        await screen.find({ value: 'button[type=submit]' }).then((h) => h?.press());

        // add items
        const parent = await screen.find({ value: '#submitPayload' });
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
                (await screen
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'Add another order' })
                  .then((h) => h?.press()));

              // type order number
              await screen
                .find({ key: 'name', type: SELECTOR_TYPE.DATA, value: 'orderNumber' })
                .then((h) => h?.type(`${order.orderNumber}`));

              // select item type
              await screen
                .find({ type: SELECTOR_TYPE.ID, value: 'payload-description' })
                .then((h) => h?.type('Medium Item'));
              await screen.key(KEY_TYPE.DOWN, { isDelay: true });
              await screen.key(KEY_TYPE.ENTER, { isDelay: true });

              // // press pickup
              // if (pickupIndex >= 0) {
              //   const pickupValue = await screen.getValue({
              //     index: pickupIndex,
              //     parent: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'pickupQuoteIndex' },
              //     target: { value: 'option' },
              //   });
              //   console.warn(`@@@ ORDER: ${i}: PICKUP ${pickupValue}`);
              //   pickupValue &&
              //     (await screen.type({
              //       index: i,
              //       parent,
              //       target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'pickupQuoteIndex' },
              //       value: pickupValue,
              //     }));
              // }

              // // press dropoff
              // if (dropoffIndex >= 0) {
              //   const dropoffValue = await screen.getValue({
              //     index: dropoffIndex,
              //     parent: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'dropoffQuoteIndex' },
              //     target: { value: 'option' },
              //   });
              //   console.warn(`@@@ ORDER: ${i}: DROPOFF ${dropoffValue}`);
              //   dropoffValue &&
              //     (await screen.type({
              //       index: i,
              //       parent,
              //       target: { key: 'name', type: SELECTOR_TYPE.DATA, value: 'dropoffQuoteIndex' },
              //       value: dropoffValue,
              //     }));
              // }
            }),
          ));

        // // // type weight
        // // await screen.type({
        // //   isDelay: true,
        // //   target: { type: SELECTOR_TYPE.ID, value: 'weight' },
        // //   value: CREDENTIALS.totalWeightLbs,
        // // });

        // // press next
        // await screen.press({
        //   isDelay: true,
        //   target: { value: 'button[type=submit]' },
        // });

        // //  type stops info
        // const stopsAll = [firstPickup, ...(waypoint ?? []), finalDropoff];
        // const stopsInfo =
        //   orderInformation &&
        //   stopsAll.map((stop) => {
        //     const pickupInfo = orderInformation.find((order) => order.pickup === stop);
        //     const dropoffInfo = orderInformation.find((order) => order.dropoff === stop);
        //     const name = pickupInfo?.pickupName ?? dropoffInfo?.dropoffName;
        //     const contact = pickupInfo?.pickupPhoneNumber ?? dropoffInfo?.dropoffPhoneNumber;
        //     const note = filterNil([pickupInfo?.additionalNote, dropoffInfo?.additionalNote]).join(
        //       '. ',
        //     );
        //     return { contact, name, note, stop };
        //   });

        // let stepIndex = 1;
        // parent = { value: '#submitInfo' };
        // for (const stopInfo of stopsInfo) {
        //   stopInfo.name &&
        //     (await screen.type({
        //       index: stepIndex * 1 - 1,
        //       parent,
        //       target: { value: 'input' },
        //       value: stopInfo.name,
        //     }));
        //   stopInfo.contact &&
        //     (await screen.type({
        //       index: stepIndex * 2 - 1,
        //       parent,
        //       target: { value: 'input' },
        //       value: stopInfo.contact,
        //     }));
        //   stopInfo.note &&
        //     (await screen.type({
        //       index: stepIndex,
        //       parent,
        //       target: { value: 'textarea' },
        //       value: stopInfo.note,
        //     }));
        //   stepIndex++;
        // }

        // // press next
        // await screen.press({
        //   isDelay: true,
        //   target: { value: 'button[type=submit]' },
        // });

        await sleep(30000);
      });
    },
  ],
};

export default crawl;
