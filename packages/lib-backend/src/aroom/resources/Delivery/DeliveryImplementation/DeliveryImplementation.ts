import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import {
  type CreateDeliveryInputModel,
  type CreateDeliveryResultModel,
  type DeliveryImplementationModel,
} from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import {
  KEY_TYPE,
  SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { format } from 'date-fns';

@withContainer()
export class DeliveryImplementation implements DeliveryImplementationModel {
  @withInject(HttpImplementation) protected httpImplementation!: HttpImplementation;

  async createDelivery(input: CreateDeliveryInputModel): Promise<CreateDeliveryResultModel> {
    const CREDENTIALS = {
      email: 'support@essentialhomeimprovement.com',
      password: 'Huespace123!',
      url: 'https://app.curri.com/login',
    };

    await withScreen(async (screen) => {
      const summary: Array<{ key: string; value?: string | null }> = [];

      const {
        Creator,
        finalDropoff,
        firstPickup,
        orderContact,
        orderInformation,
        pickupDate,
        submitDate,
        totalVolume,
        totalWeight,
        tripPricing,
        vehicleType,
        waypoint,
      } = input;

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
      let parent = await screen.find({ type: SELECTOR_TYPE.ID, value: 'submitAddress' });
      await parent
        ?.find({ key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' })
        .then((h) => h?.type(firstPickup));

      await parent
        ?.find(
          {
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
          { isDelay: true },
        )
        .then((h) => h?.press());

      summary.push({
        key: 'Stop 1',
        value: await screen
          .find({ key: 'data-e2e-id', type: SELECTOR_TYPE.DATA, value: 'book-addresses-input-0' })
          .then((h) => h?.value()),
      });

      // add stops
      waypoint &&
        (await mapSequence(
          waypoint.map((stop, i) => async () => {
            await parent
              ?.find({
                key: 'data-e2e-id',
                type: SELECTOR_TYPE.DATA,
                value: 'book-addresses-add-stop',
              })
              .then((h) => h?.press());

            await parent
              ?.find({
                key: 'data-e2e-id',
                type: SELECTOR_TYPE.DATA,
                value: `book-addresses-input-${i + 1}`,
              })
              .then((h) => h?.type(stop));

            await parent
              ?.find(
                {
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: 'book-address-recommendation-0',
                },
                { isDelay: true },
              )
              .then((h) => h?.press());

            summary.push({
              key: `Stop ${i + 2}`,
              value: await screen
                .find({
                  key: 'data-e2e-id',
                  type: SELECTOR_TYPE.DATA,
                  value: `book-addresses-input-${i + 1}`,
                })
                .then((h) => h?.value()),
            });
          }),
        ));

      // add dropoff
      await parent
        ?.find({
          key: 'data-e2e-id',
          type: SELECTOR_TYPE.DATA,
          value: `book-addresses-input-${(waypoint?.length ?? 0) + 1}`,
        })
        .then((h) => h?.type(finalDropoff));

      await parent
        ?.find(
          {
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: 'book-address-recommendation-0',
          },
          { isDelay: true },
        )
        .then((h) => h?.press());

      summary.push({
        key: `Stop ${(waypoint?.length ?? 0) + 2}`,
        value: await screen
          .find({
            key: 'data-e2e-id',
            type: SELECTOR_TYPE.DATA,
            value: `book-addresses-input-${(waypoint?.length ?? 0) + 1}`,
          })
          .then((h) => h?.value()),
      });

      // press next
      await screen
        .find({ value: 'button[type=submit]' }, { isDelay: true })
        .then((h) => h?.press());

      // press vehicle
      parent = await screen.find({ type: SELECTOR_TYPE.ID, value: 'submitVehicle' });
      await parent
        ?.find({
          key: 'data-ph-capture-attribute-vehicle-sku',
          type: SELECTOR_TYPE.DATA,
          value: vehicleType,
        })
        .then((h) => h?.press());

      summary.push({ key: 'Vehicle Type', value: vehicleType });

      // press timing
      parent = await screen.find({ type: SELECTOR_TYPE.ID, value: 'submitTiming' });
      await parent
        ?.find({
          key: 'data-ph-capture-attribute-priority-type',
          type: SELECTOR_TYPE.DATA,
          value: 'scheduled',
        })
        .then((h) => h?.press());

      // pick date
      let tries = 0;
      const pickupDateFormatted = format(pickupDate, 'EEE MMM dd yyyy');
      while (tries <= 10) {
        try {
          await parent
            ?.find(
              { key: 'aria-label', type: SELECTOR_TYPE.DATA, value: pickupDateFormatted },
              { timeout: false },
            )
            .then((h) => h?.press());
          break;
        } catch (e) {
          await parent?.find({ value: '.DayPicker-NavButton--next' }).then((h) => h?.press());
          tries++;
        }
      }

      // press next
      await screen.find({ value: 'button[type=submit]' }).then((h) => h?.press());

      // add items
      parent = await screen.find({ type: SELECTOR_TYPE.ID, value: 'submitPayload' });
      orderInformation &&
        (await mapSequence(
          orderInformation.map((order, i) => async () => {
            const pickupIndex = [firstPickup, ...(waypoint ?? [])].findIndex(
              (v) => v === order.pickup,
            );
            const dropoffIndex = [...(waypoint ?? []), finalDropoff].findIndex(
              (v) => v === order.dropoff,
            );

            // add order
            i > 0 &&
              (await parent
                ?.find({ type: SELECTOR_TYPE.TEXT, value: 'Add another order' })
                .then((h) => h?.press()));

            // type order number
            await parent
              ?.find({ key: 'name', type: SELECTOR_TYPE.DATA, value: 'orderNumber' }, { index: i })
              .then((h) => h?.type(`${order.orderNumber}`));

            // select item type
            await parent
              ?.find({ type: SELECTOR_TYPE.ID, value: 'payload-description' }, { index: i })
              .then((h) => h?.type(totalVolume.split(':')[0]));
            await screen.key(KEY_TYPE.DOWN, { isDelay: true });
            await screen.key(KEY_TYPE.ENTER);

            // press pickup
            pickupIndex >= 0 &&
              (await parent
                ?.find(
                  { key: 'name', type: SELECTOR_TYPE.DATA, value: 'pickupQuoteIndex' },
                  { index: i },
                )
                .then((h) => h?.select(`${pickupIndex}`)));

            // press dropoff
            dropoffIndex >= 0 &&
              (await parent
                ?.find(
                  { key: 'name', type: SELECTOR_TYPE.DATA, value: 'dropoffQuoteIndex' },
                  { index: i },
                )
                .then((h) => h?.find({ value: 'option' }, { index: dropoffIndex }))
                .then((h) => h?.text()));
          }),
        ));

      // // type weight
      // await screen.type({
      //   isDelay: true,
      //   target: { type: SELECTOR_TYPE.ID, value: 'weight' },
      //   value: CREDENTIALS.totalWeightLbs,
      // });

      // press next
      await screen
        .find({ value: 'button[type=submit]' }, { isDelay: true })
        .then((h) => h?.press());

      let stepIndex = 0;
      parent = await screen.find({ type: SELECTOR_TYPE.ID, value: 'submitInfo' });
      for (const orderInfo of orderContact ?? []) {
        orderInfo.stopName &&
          (await parent
            ?.find({ value: 'input' }, { index: stepIndex * 4 })
            .then((h) => h?.type(orderInfo.stopName)));
        orderInfo.stopPhoneNumber &&
          (await parent
            ?.find({ value: 'input' }, { index: stepIndex * 4 + 1 })
            .then((h) => h?.type(orderInfo.stopPhoneNumber)));
        stepIndex++;
      }

      // press next
      await screen
        .find({ value: 'button[type=submit]' }, { isDelay: true })
        .then((h) => h?.press());

      const screenshot = await screen.snapshot({ filename: 'curri' });

      const http = new HttpImplementation();
      const result = await http.post<unknown, { fileUrl: string }>({
        params: screenshot,
        request: {
          headers: {
            Authorization: 'Bearer secret_12a1yon89yCfuAHp318BafwSmR1G',
            'Content-Type': 'image/png',
          },
        },
        url: 'https://api.bytescale.com/v2/accounts/12a1yon/uploads/binary',
      });
      console.warn(result?.fileUrl);
    });
    return { success: true };
  }
}
