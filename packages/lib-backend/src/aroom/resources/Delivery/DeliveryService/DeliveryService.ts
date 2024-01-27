import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { HttpService } from '@lib/backend/http/utils/HttpService/HttpService';
import {
  type CreateDeliveryInputModel,
  type CreateDeliveryResultModel,
  type DeliveryServiceModel,
} from '@lib/shared/aroom/resources/Delivery/DeliveryService/DeliveryService.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';

const CREDENTIALS = {
  email: 'support@essentialhomeimprovement.com',
  password: 'Huespace123!',
  url: 'https://app.curri.com/login',
};

const SAMPLE_DELIVERY: { input: CreateDeliveryInputModel } = {
  input: {
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
  },
};

@withContainer()
export class DeliveryService implements DeliveryServiceModel {
  @withInject(HttpService) protected httpService!: HttpService;

  async createDelivery(input: CreateDeliveryInputModel): Promise<CreateDeliveryResultModel> {
    console.warn(input);
    return { success: true };
  }
}
