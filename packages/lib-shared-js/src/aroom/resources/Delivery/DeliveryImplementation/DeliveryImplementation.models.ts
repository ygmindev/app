import { type DeliveryModel } from '@lib/shared/aroom/resources/Delivery/Delivery.models';

export type DeliveryImplementationModel = {
  createDelivery(input: CreateDeliveryInputModel): Promise<CreateDeliveryResultModel>;
};

export type CreateDeliveryInputModel = DeliveryModel;

export type CreateDeliveryResultModel = {
  success: boolean;
};
