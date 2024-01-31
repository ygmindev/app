import { type CreateDeliveryInputModel } from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const SAMPLE_DELIVERY: CreateDeliveryInputModel = {
  Creator: {
    companyName: 'Aroom',
    email: 'support@aroom.io',
    name: 'YG Min',
    phoneNumber: 2161231234,
  },
  finalDropoff: 'Columbia University, 116th And Broadway, New York, NY 10027',
  firstPickup: '56 Leonard St, New York, NY 10013',
  orderContact: [
    {
      stopAddress: '56 Leonard St, New York, NY 10013',
      stopName: 'Stop 1',
      stopPhoneNumber: '2121111111',
    },
    {
      stopAddress: '200 W 57th St, New York, NY 10019',
      stopName: 'Stop 2',
      stopPhoneNumber: '2122222222',
    },
    {
      stopAddress: 'Columbia University, 116th And Broadway, New York, NY 10027',
      stopName: 'Stop 3',
      stopPhoneNumber: '2123333333',
    },
  ],
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
  totalVolume: 'Medium Item: 18"x18"x18"',
  totalWeight: 150,
  tripPricing: 85,
  vehicleType: 'cargo-van',
  waypoint: ['200 W 57th St, New York, NY 10019'],
};

const crawl: TaskParamsModel<unknown> = {
  name: 'web-crawl',

  task: [async () => {}],
};

export default crawl;
