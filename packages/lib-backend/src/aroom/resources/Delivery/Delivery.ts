import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DELIVERY_RESOURCE } from '@lib/shared/aroom/resources/Delivery/Delivery.constants';
import {
  type AroomOrderContactModel,
  type AroomOrderModel,
  type AroomUserModel,
  type DeliveryModel,
} from '@lib/shared/aroom/resources/Delivery/Delivery.models';
import { type CreateDeliveryResultModel } from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'AroomUser' })
export class AroomUser implements AroomUserModel {
  @withField({ type: DATA_TYPE.STRING })
  companyName!: string;

  @withField({ type: DATA_TYPE.STRING })
  email!: string;

  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  phoneNumber!: number;
}

@withEntity({ name: 'AroomOrder' })
export class AroomOrder implements AroomOrderModel {
  @withField({ type: DATA_TYPE.STRING })
  dropoff!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  orderNumber!: number;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  orderReceiptAttach?: string;

  @withField({ type: DATA_TYPE.STRING })
  pickup!: string;
}

@withEntity({ name: 'AroomOrderContact' })
export class AroomOrderContact implements AroomOrderContactModel {
  @withField({ type: DATA_TYPE.STRING })
  stopAddress!: string;

  @withField({ type: DATA_TYPE.STRING })
  stopName!: string;

  @withField({ type: DATA_TYPE.STRING })
  stopPhoneNumber!: string;
}

@withEntity({ name: DELIVERY_RESOURCE })
export class Delivery implements DeliveryModel {
  @withField({ Resource: () => AroomUser, type: PROPERTY_TYPE.RESOURCE })
  Creator!: AroomUserModel;

  @withField({ type: DATA_TYPE.STRING })
  finalDropoff!: string;

  @withField({ type: DATA_TYPE.STRING })
  firstPickup!: string;

  @withField({
    Resource: () => AroomOrderContact,
    isArray: true,
    isOptional: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  orderContact?: Array<AroomOrderContactModel>;

  @withField({ Resource: () => AroomOrder, isArray: true, type: PROPERTY_TYPE.RESOURCE })
  orderInformation!: Array<AroomOrderModel>;

  @withField({ type: DATA_TYPE.DATE })
  pickupDate!: Date;

  @withField({ type: DATA_TYPE.DATE })
  submitDate!: Date;

  @withField({ type: DATA_TYPE.STRING })
  totalVolume!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  totalWeight!: number;

  @withField({ type: DATA_TYPE.NUMBER })
  tripPricing!: number;

  @withField({ type: DATA_TYPE.STRING })
  vehicleType!: string;

  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  waypoint?: Array<string>;
}

@withEntity({ name: 'DeliveryResult' })
export class DeliveryResult implements CreateDeliveryResultModel {
  @withField({ type: DATA_TYPE.BOOLEAN })
  success!: boolean;
}
